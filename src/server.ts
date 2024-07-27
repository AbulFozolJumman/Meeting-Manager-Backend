/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(
        `Meeting manager backend is listening on port ${config.port}`,
      );
    });
  } catch (err) {
    console.log(err);
  }
}

main();
