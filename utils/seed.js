const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomThoughts, getUser } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let usersCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (usersCheck.length) {
    await connection.dropCollection("users");
  }

  let thoughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection("thoughts");
  }

  // Create empty array to hold the users for testing
  const users = [];
  
  // Create 10 users with 2 thoughts each
  for (let i = 0; i < 10; i++) {
    const {name, email} = getUser(i);
    const thoughts = getRandomThoughts(2, name);
    const thoughtData = await Thought.create(thoughts);

    // Pushing to users for testing
    users.push({
      username: name,
      email: email,
      thoughts: thoughts,
    })
    // Add user to collection
    await User.create({
      username: name,
      email: email,
      thoughts: [...thoughtData.map(({ _id }) => _id)],
    });
  }



  // Log out the seed data to indicate what should appear in the database

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
