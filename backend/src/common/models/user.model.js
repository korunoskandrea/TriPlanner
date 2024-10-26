import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Your name is required"] },
    lastName: { type: String, required: [true, "Your lastname is required"] },
    email: { type: String, required: [true, "Your email is required"], unique: true },
    password: { type: String, required: [true, "Your password is required"] },
    birthday: { type: Date, required: [true, "Your birthday is required"] },
    interestedIn: [String],
    trips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trip'}],
});

UserSchema.pre("save", async function (next) {
    this.password = await bcryptjs.hash(this.password, 12);
})

const User = mongoose.model('User', UserSchema);

export default User;