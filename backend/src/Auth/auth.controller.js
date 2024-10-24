import bcryptjs from 'bcryptjs';
import UserModel from "../common/models/user.model.js";
import {generateSecretToken} from "../common/util/secret_token.js";

export const registerPost = async (req, res) => {
    const { name, lastName, email, password, birthday, interestedIn, pastTrips, upcomingTrips} = req.body;
    try {
        const newUser = new UserModel({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            birthday: birthday,
            interestedIn: interestedIn,
            pastTrips: pastTrips,
            upcomingTrips: upcomingTrips,
        });
        await newUser.save();
        res.status(201).json({user: newUser});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


export const loginPost = async (req, res) => {
    const expirationSeconds = 1800;

    try{
        const user = await UserModel.findOne({ email: req.body.email}).select('+password');

        if(!user || !bcryptjs.compareSync(req.body.password, user.password)) {
            res.status(403).json({error: 'Incorrect username or password'});
            return;
        }
        const token = await generateSecretToken(user._id, user.email);
        const expirationDate =Math.floor(Date.now() / 1000) + expirationSeconds;
        res.status(201).json({user: user, token: token, expiresIn: expirationDate});
    } catch (error) {
        res.status(403).json({error: "Error logging in"});
    }
}
