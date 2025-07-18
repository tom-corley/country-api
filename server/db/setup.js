// Dependencies for reading environment variables and file system 
// and connecting to the database
require("dotenv").config();
const fs = require("fs");
const db = require("./connect");

// Read the SQL file that contains the database setup commands
const sql = fs.readFileSync("./server/db/countries.sql").toString();

// Run the query to set up the database
db.query(sql)
    .then((data) => {
        db.end();
        console.log("Setup complete.");
    })
    .catch(error => console.log(error));