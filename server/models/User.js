const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: { type: String },
    nickname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    city: { type: String },
    country: { type: String },
    image: { type: String },
    sex: { type: String, enum: ['male', 'female', 'other'] },
    daw: [{ type: Schema.Types.ObjectId, ref: 'Daw' }],
    styles: [{ type: Schema.Types.ObjectId, ref: 'Style' }],
    workFormat: [{ type: Schema.Types.ObjectId, ref: 'Format' }],
    soundCloud: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', schema);
