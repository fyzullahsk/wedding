
import express from "express"
import mysql from "mysql"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "marriage",
});


con.connect(function(err) {
    if(err) { 
        console.log("Error in Connection");
        console.log(err);
    } else {
        console.log("SQL server Connected");
    }
});


app.post('/login', (req, res) => {
    const { Username, Password } = req.body;

    if (!Username || !Password) {
        return res.status(400).json({ error: "Username and Password are required" });
    }

    con.query('SELECT * FROM users WHERE email = ? AND password = ?', [Username, Password], (err, results) => {
        if (err) {
            console.error("Error in login query:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        res.json({ message: "Login successful", user: results[0] });
    });
});


app.post('/register', (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    
    if (!firstName || !lastName || !email || !phone || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    
    con.query('INSERT INTO users (firstName, lastName, email, phone, password) VALUES (?, ?, ?, ?, ?)',
        [firstName, lastName, email, phone, password],
        (err, result) => {
            if (err) {
                console.log("Error in registration query:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            res.json({ message: "Registration successful", user: { id: result.insertId, firstName, lastName, email, phone } });
        }
    );
});


app.listen(8081, () => {
    console.log("Running");
});
