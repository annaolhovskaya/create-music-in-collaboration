const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    cover: { type: String },
    link: { type: String, required: true },
    album: { type: Schema.Types.ObjectId, ref: 'Album', required: true },
    offer: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        accepted: { type: Boolean },
      },
    ],
    bookmarkId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

module.exports = model('Track', schema);
