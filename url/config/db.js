const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodbmongodb://localhost:27017/"
  );
};
