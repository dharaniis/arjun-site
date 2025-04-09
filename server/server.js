import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();
const app = express()
const port = process.env.PORT;

app.use(cors());

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_KEY,
    port: process.env.DB_PORT,
  });


let data = [];

db.connect(); 

db.query("SELECT * FROM blogPosts", (err, res) => {
    if (err) {
      console.error("Error executing query", err.stack);
    } else {
      data = res.rows;
    }
    db.end();
  });

app.get("/", (req,res) => {
    res.json(data);
}); 

app.listen(port, () => {
    console.log(`Server running locally on port ${port}`);
})