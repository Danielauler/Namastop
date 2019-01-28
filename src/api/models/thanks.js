import mongoose from 'mongoose';

const { Schema } = mongoose;

const Thanks = new Schema(
  {
    channel_id: { type: String, required: true },
    user_name: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

export default Thanks;
