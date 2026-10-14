import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

try {
await client.connect();
await client.db("admin").command({ ping: 1 });
console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
);
} catch(err) {
   console.error(err);
}

let db = client.db("UserBooks");

export default db;
