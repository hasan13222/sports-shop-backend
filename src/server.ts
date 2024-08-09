import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import { Server } from 'http';

let server: Server;
main().catch((err) => console.log(err));

// server and mongodb connections through mongoose
async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`Example app is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log({
      project_url: 'process.cwd()',
      message: 'failed to connect',
      error: error,
    });
  }
}

// unhandleRejection handler
process.on('unhandledRejection', () => {
  console.log('unhandledRejection. shutting down server');
  if(server){
    server.close(() => {
      process.exit(1)
    });
  }
  process.exit(1);
})

// uncaught exception handling
process.on('uncaughtException', () => {
  console.log('uncaughtException. shutting down')
  process.exit(1);
})

// Promise.reject();
// console.log(x)