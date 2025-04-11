import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client';

dotenv.config();
const app = express()
const port = process.env.PORT;

app.use(cors());

let prisma = new PrismaClient() 

app.get("/", async (req,res) => {
  try{
    let blogPosts = await prisma.blogposts.findMany()
    prisma.$disconnect()
    res.json(blogPosts);
  } catch (error) {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }
})

app.listen(port, () => {
    console.log(`Server running locally on port ${port}`);
})