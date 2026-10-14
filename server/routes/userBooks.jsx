import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("UserBooks");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/browse", async (req, res) => {
  try {
    let collection = await db.collection("UserBooks");
    let query = {
      borough: "Queens",
      name: { $regex: "Moon", $options: "i" },
    };
    let results = await collection.find(query).toArray();
    res.send(results).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error browsing UserBooks");
  }
});

export default router;

