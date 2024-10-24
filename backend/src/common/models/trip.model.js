import mongoose from "mongoose";

const TripSchema = new mongoose.Schema({
    locationName: { type: String, required: true },
    images: [String],
    sightseeingInterests: [String],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const Trip = mongoose.model('Trip', TripSchema);

export default Trip;