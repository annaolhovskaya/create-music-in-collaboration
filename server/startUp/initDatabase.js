const Daw = require('../models/Daw');
const WorkFormat = require('../models/WorkFormat');
const Style = require('../models/Style');
const Experience = require('../models/Experience');
const Album = require('../models/Album');
const Track = require('../models/Track');
const User = require('../models/User');

const dawsMock = require('../mock/daws.json');
const workFormatsMock = require('../mock/workFormats.json');
const stylesMock = require('../mock/styles.json');
const experiencesMock = require('../mock/experiences.json');
const albumsMock = require('../mock/albums.json');
const tracksMock = require('../mock/tracks.json');
const usersMock = require('../mock/users.json');

module.exports = async () => {
  const daws = await Daw.find();
  if (daws.length !== dawsMock.length) {
    await createInitialEntity(Daw, dawsMock);
  }

  const workFormats = await WorkFormat.find();
  if (workFormats.length !== workFormatsMock.length) {
    await createInitialEntity(WorkFormat, workFormatsMock);
  }

  const styles = await Style.find();
  if (styles.length !== stylesMock.length) {
    await createInitialEntity(Style, stylesMock);
  }

  const experiences = await Experience.find();
  if (experiences.length !== experiencesMock.length) {
    await createInitialEntity(Experience, experiencesMock);
  }

  const albums = await Album.find();
  if (albums.length !== albumsMock.length) {
    await createInitialEntity(Album, albumsMock);
  }

  const tracks = await Track.find();
  if (tracks.length !== tracksMock.length) {
    await createInitialEntity(Track, tracksMock);
  }

  const users = await User.find();
  if (users.length !== usersMock.length) {
    await createInitialEntity(User, usersMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();

  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
