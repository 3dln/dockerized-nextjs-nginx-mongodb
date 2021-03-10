import * as Mongoose from "mongoose";

const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};

const connect = async () => {
  return new Promise(async (resolve, reject) => {
    if (Mongoose.connection >= 1) {
      resolve();
    }

    await Mongoose.connect("mongodb://localhost:27017/mydb", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
      .then(() => {
        console.log("connected to mongodb");
        resolve();
      })
      .catch((err) => {
        console.log("error connecting to the database", err);
        reject();
      });
  });
};

export default async (req, res) => {
  // Try to connect to the database
  await connect()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(() => res.status(200).json({ success: false }));
};
