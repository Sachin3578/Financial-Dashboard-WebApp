import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  user_id: string;
  name: string;
}

const userSchema = new Schema<IUser>({
    user_id: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true 
},
});

export const User = model<IUser>("User", userSchema);
