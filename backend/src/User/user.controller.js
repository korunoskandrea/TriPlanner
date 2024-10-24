import UserModel from "../common/models/user.model.js";
import userModel from "../common/models/user.model.js";

export const addUser = async (req, res) => {
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

