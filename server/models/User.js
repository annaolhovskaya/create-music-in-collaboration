const { Schema, model } = require('mongoose');

const schema = new Schema(
  // {
  //   name: { type: String },
  //   nickname: { type: String },
  //   email: { type: String, required: true, unique: true },
  //   password: { type: String },
  //   avatar: { type: String },
  //   city: { type: String },
  //   country: { type: String },
  //   sex: { type: String, enum: ['male', 'female', 'other'] },
  //   experience: { type: Schema.Types.ObjectId, ref: 'Experience' },
  //   daw: [{ type: Schema.Types.ObjectId, ref: 'Daw' }],
  //   styles: [{ type: Schema.Types.ObjectId, ref: 'Style' }],
  //   workFormat: [{ type: Schema.Types.ObjectId, ref: 'WorkFormat' }],
  //   soundCloud: { type: String },
  //   telegram: { type: String },
  //   instagram: { type: String },
  //   contactEmail: { type: String, required: true },
  // },
  {
    name: { type: String },
    nickname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    avatar: { type: String },
    city: { type: String },
    country: { type: String },
    sex: { type: String, enum: ['male', 'female', 'other'] },
    experience: { type: String },
    daw: [{ type: String }],
    styles: [{ type: String }],
    workFormat: [{ type: String }],
    soundCloud: { type: String },
    telegram: { type: String },
    instagram: { type: String },
    contactEmail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', schema);
