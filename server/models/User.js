const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    city: { type: String, required: true },
    country: { type: String, required: true },
    sex: { type: String, enum: ['male', 'female', 'other'] },
    experience: {
      type: Schema.Types.ObjectId,
      ref: 'Experience',
      required: true,
    },
    daw: [{ type: Schema.Types.ObjectId, ref: 'Daw', required: true }],
    styles: [{ type: Schema.Types.ObjectId, ref: 'Style', required: true }],
    workFormat: [
      { type: Schema.Types.ObjectId, ref: 'WorkFormat', required: true },
    ],
    soundCloud: { type: String },
    telegram: { type: String },
    instagram: { type: String },
    contactEmail: { type: String, required: true },
    bookmark: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', schema);
