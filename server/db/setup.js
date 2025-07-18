require("dotenv").config();
const fs = require("fs");

const db = require("./connect");

const sql = fs.readFileSync("./server/db/countries.sql").toString();

// Run the query to set up the database
db.query(sql)
    .then((data) => {
        db.end();
        console.log("Setup complete.");
    })
    .catch(error => console.log(error));