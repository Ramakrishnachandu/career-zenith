// models/User.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true },
    workStatus: { type: String, required: true },
}, { collection: 'users' }); // Explicitly set the collection name

export default mongoose.models.User || mongoose.model('User', UserSchema);
