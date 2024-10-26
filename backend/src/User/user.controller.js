import UserModel from "../common/models/user.model.js";
import TripModel from "../common/models/trip.model.js";


export const addUser = async (req, res) => {
    const { name, lastName, email, password, birthday, interestedIn, trips} = req.body;
    try {
        const newUser = new UserModel({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            birthday: birthday,
            interestedIn: interestedIn,
            trips: trips
        });
        await newUser.save();
        res.status(201).json({user: newUser});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id);
        const trips = await TripModel.find({ user: req.user.id });
        user.trips = trips;
        if (!user) {
            res.status(404).json({error: 'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}