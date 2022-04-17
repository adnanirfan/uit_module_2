// const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri =
//   "mongodb+srv://dbuser:dbpassword@cluster0.nh1yk.mongodb.net/test?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// client.connect(async (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Connected!");

//   const collection = client.collection("users");
//   // const x = await collection.insertOne({
//   //   username: "Abdullah",
//   //   email: "asd@asd.asd",
//   // });
//   // const x = await collection.findOne({ email: "asd@asd.asd" });
//   const x = await collection.updateOne(
//     { email: "asd@asd.asd" },
//     { $set: { password: "qwerty", username: "Haris" } },
//     { upsert: true }
//   );
//   console.log("User > ______", x);

//   // perform actions on the collection object
//   // client.close();
// });

// module.exports = client;
