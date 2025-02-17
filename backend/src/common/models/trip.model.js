import mongoose from "mongoose";

const TripSchema = new mongoose.Schema({
    tripType: { type: String},
    groupSize: { type: String },
    location: { type: String, required: true },
    interests: [String],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    notes: { type: String } ,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Trip = mongoose.model('Trip', TripSchema);

export default Trip;