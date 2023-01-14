const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const chalk = require('chalk');
const initDatabase = require('./startUp/initDatabase');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

const PORT = config.get('port') ?? 8080;

// if (process.env.NODE_ENV === 'production') {
//   console.log('Production');
// } else {
//   console.log('Development');
// }

async function start() {
  try {
    mongoose.connection.once('open', () => {
      initDatabase();
    });
    await mongoose.connect(config.get('mongoUri'));
    console.log(chalk.bgYellow(`MongoDB connected!`));
    app.listen(PORT, () => {
      console.log(
        chalk.bgBlue.bold(`Server has been started on port ${PORT}...`)
      );
    });
  } catch (error) {
    console.log(chalk.red(error.message));
  }
}

start();
