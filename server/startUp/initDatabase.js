const Daw = require('../models/Daw');
const Format = require('../models/Format');
const Style = require('../models/Style');

const dawsMock = require('../mock/daws.json');
const formatsMock = require('../mock/formats.json');
const stylesMock = require('../mock/styles.json');

module.exports = async () => {
  const daws = await Daw.find();
  if (daws.length !== dawsMock.length) {
    await createInitialEntity(Daw, dawsMock);
  }

  const formats = await Format.find();
  if (formats.length !== formatsMock.length) {
    await createInitialEntity(Format, formatsMock);
  }

  const styles = await Style.find();
  if (styles.length !== stylesMock.length) {
    await createInitialEntity(Style, stylesMock);
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
