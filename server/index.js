const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { PrismaClient } = require("./generated/prisma");

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT;

app.use(express.json());

app.use(cors());

app.get("/", async (req,res) => {
    try{
      let blogPosts = await prisma.blogposts.findMany()
      prisma.$disconnect()
      res.json(blogPosts);
    } catch (e) {
      console.error(e)
      res.send("Database not found")
      await prisma.$disconnect()
      process.exit(1)
    }
  })


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});