const mongoose = require("mongoose");

const uri =
  "mongodb+srv://dbuser:dbpassword@cluster0.nh1yk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function main() {
  try {
    const x = await mongoose.connect(uri);
    console.log("CONNECTED !!");
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

module.exports = { main };
