const express = require("express");
const cors = require("cors");
const dayjs = require('dayjs')
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const { PrismaClient } = require("./generated/prisma");

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT;

dayjs().format()

app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/newPost", async (req, res) => {
  const data = req.body;
  const clientDomain = req.headers.origin;
  const charCount = req.body.content.length;
  const date = dayjs().format('DD MMM YYYY');
  const duration = charCount > 3000 ?  5 : 3; 
  const createPost = await prisma.blogposts.create({
    data: {
      title: req.body.title,
      content: req.body.content,

      duration: duration,
      date: date,
    },
  })
  res.redirect(`${clientDomain}/blog`)
})  

app.post("/delPost", async (req, res) => {
  const deletePost = await prisma.blogposts.delete({
    where: {
      id: parseInt(req.body.id),
    },
  })
});

app.post("/editPost", async (req,res) => {
  const clientDomain = req.headers.origin;
  const updatePost = await prisma.blogposts.update({
  where: {
    id: parseInt(req.body.id),
  },
  data: {
    title: req.body.title,
    content: req.body.content,
  },
  });
  res.redirect(`${clientDomain}/blog`)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});