const { Schema, model } = require('mongoose');

const schema = new Schema(
  // {
  //   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  //   author: { type: String, required: true },
  //   title: { type: String, required: true },
  //   cover: { type: String },
  //   link: { type: String, required: true },
  //   album: { type: Schema.Types.ObjectId, ref: 'Album', required: true },
  //   offer: [
  //     {
  //       userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  //       accepted: { type: Boolean, required: true },
  //     },
  //   ],
  //   bookmarkId: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  // },
  {
    userId: { type: String, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    cover: { type: String },
    link: { type: String, required: true },
    album: { type: String, required: true },
    offer: [
      {
        userId: { type: String, required: true },
        accepted: { type: Boolean, required: true },
      },
    ],
    bookmarkId: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = model('Track', schema);
