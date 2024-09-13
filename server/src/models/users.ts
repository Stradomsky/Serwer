import mongoose, { Schema, Document } from 'mongoose';

export type UserRole = 'Admin' | 'Developer' | 'DevOps';

export interface Passwords {
  password: string;
  email: string;
}

export interface IUser extends Document {
  id: number;
  firstName: string;
  lastName: string;
  role: UserRole;
  passwords: Passwords;
}

const UserSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  role: { type: String, required: true },
  passwords: {
    email: { type: String, required: false },
    password: { type: String, required: false }
  },
});

export const User = mongoose.model<IUser>('User', UserSchema);
