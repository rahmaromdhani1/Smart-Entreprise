
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },        
  lastName: { type: String, required: true },         
  phone: { type: String, required: true, unique: true }, 
  mail: { type: String, required: true, unique: true },  
  password: { type: String, required: true },       
  role: { type: String, enum: ["Admin", "Staff"], required: true }, 
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
