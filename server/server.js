
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
    password: "admin@123", //Mysql@123
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
    const sql = 'SELECT * FROM users WHERE email=?';
    con.query(sql, [req.body.email], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in running query" });
        if (result.length > 0) {
            const userType = result[0].userType;
            if (userType === 'admin') {
                return res.json({ Status: "admin" });
            } else if (userType === 'customer') {
                return res.json({ Status: "customer", id: result[0].id,password: result[0].password}); // Assuming id is the field name for user ID
            }
        } else {
            return res.json({ Status: "Error", message: "No User Found\nClick ok to Register" });
        }
    });
});





app.post('/register', (req, res) => {
    const { firstName, lastName, email, phone, password, userType } = req.body;

    
    if (!firstName || !lastName || !email || !phone || !password || !userType) {
        return res.status(400).json({ error: "All fields are required" });
    }

    
    con.query('INSERT INTO users (firstName, lastName, email, phone, password, userType) VALUES (?, ?, ?, ?, ?, ?)',
    [firstName, lastName, email, phone, password, userType], // Include userType as a value
    (err, result) => {
        if (err) {
            console.log("Error in registration query:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        res.json({ message: "Registration successful", user: { id: result.insertId, firstName, lastName, email, phone } });
    }
);

});


app.get('/getvenue',(req,res)=>{
    const sql="SELECT * FROM venue";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error:"Got an error in the sql"});
        return res.json({Status:"Success",Result:result})
    })
})
app.get('/getvenue/:id',(req,res)=>{
    const id = req.params.id;
    const sql="SELECT * FROM venue WHERE id = ?";
    con.query(sql, [id], (err,result)=>{
        if(err) return res.json({Error:"Got an error in the sql"});
        return res.json({Status:"Success",Result:result})
    })
})


app.get('/getvenuedate', (req, res) => {
    // Extract the selected date from the query parameters
    const selectedDate = req.query.date;

    // Extract the selected location from the query parameters
    const selectedLocation = req.query.location;

    // If a date and location are provided, fetch venue data for that date and location
    if (selectedDate && selectedLocation) {
        const sql = "SELECT * FROM venue WHERE date = ? AND address = ?";
        con.query(sql, [selectedDate, selectedLocation], (err, result) => {
            if (err) {
                console.error('Error fetching venue data:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(result);
        });
    }  else {
        // If neither date nor location are provided, return an error
        return res.status(400).json({ error: 'Date and location are required parameters' });
    }
});


app.delete('/deletevenue/:id',(req,res)=>{
    const id = req.params.id;
    const sql='DELETE FROM venue WHERE id = ?';
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete venue error in sql"});
        return res.json({Status: "Success"})
    })
})

app.get('/getdecor',(req,res)=>{
    const sql="SELECT * FROM decor";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error:"Got an error in the sql"});
        return res.json({Status:"Success",Result:result})
    })
})

app.get('/getdecor/:id',(req,res)=>{
    const id = req.params.id;
    const sql="SELECT * FROM decor WHERE id = ?";
    con.query(sql, [id], (err,result)=>{
        if(err) return res.json({Error:"Got an error in the sql"});
        return res.json({Status:"Success",Result:result})
    })
})

app.get('/getdecordate', (req, res) => {
    // Extract the selected date from the query parameters
    const selectedDate = req.query.date;

    // Extract the selected location from the query parameters
    const selectedLocation = req.query.location;

    // If a date and location are provided, fetch venue data for that date and location
    if (selectedDate && selectedLocation) {
        const sql = "SELECT * FROM decor WHERE date = ? AND address = ?";
        con.query(sql, [selectedDate, selectedLocation], (err, result) => {
            if (err) {
                console.error('Error fetching venue data:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(result);
        });
    }  else {
        // If neither date nor location are provided, return an error
        return res.status(400).json({ error: 'Date and location are required parameters' });
    }
});

app.delete('/deletedecor/:id',(req,res)=>{
    const id = req.params.id;
    const sql='DELETE FROM decor WHERE id = ?';
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete decor error in sql"});
        return res.json({Status: "Success"})
    })
})


app.get('/getcaterer',(req,res)=>{
    const sql="SELECT * FROM caterer";
    con.query(sql,(err,result)=>{
        if(err) return res.json({Error:"Got an error in the sql"});
        return res.json({Status:"Success",Result:result})
    })
})


app.get('/getcaterer/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM caterer WHERE id = ?";
    con.query(sql, [id], (err, result) => { 
        if (err) return res.json({ Error: "Got an error in the sql" });
        return res.json({ Status: "Success", Result: result });
    });
});

app.get('/getcatererdate', (req, res) => {
    // Extract the selected date from the query parameters
    const selectedDate = req.query.date;

    // Extract the selected location from the query parameters
    const selectedLocation = req.query.location;

    // If a date and location are provided, fetch venue data for that date and location
    if (selectedDate && selectedLocation) {
        const sql = "SELECT * FROM caterer WHERE date = ? AND address = ?";
        con.query(sql, [selectedDate, selectedLocation], (err, result) => {
            if (err) {
                console.error('Error fetching venue data:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.json(result);
        });
    }  else {
        // If neither date nor location are provided, return an error
        return res.status(400).json({ error: 'Date and location are required parameters' });
    }
});




app.delete('/deletecaterer/:id',(req,res)=>{
    const id = req.params.id;
    const sql='DELETE FROM caterer WHERE id = ?';
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete caterer error in sql"});
        return res.json({Status: "Success"})
    })
})


// Route for handling adding venue
app.post('/addvenue', (req, res) => {
    const { img1, img2, img3, img4, name, address, capacity, price, date } = req.body;

    // Validate request body
    if (!img1 || !img2 || !img3 || !img4 || !name || !address || !capacity || !price || !date) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Insert into database
    con.query('INSERT INTO venue (img1, img2, img3, img4, name, address, capacity, price, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [img1, img2, img3, img4, name, address, capacity, price, date],
        (err, result) => {
            if (err) {
                console.log("Error in adding venue query:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            res.json({ message: "Venue added successfully", venue: { id: result.insertId, img1, img2, img3, img4, name, address, capacity, price, date } });
        }
    );
});


// Update a venue
app.put('/updatevenue/:id', (req, res) => {
    const venueId = req.params.id;
    const { img1, img2, img3, img4, name, address, capacity, price, date } = req.body;

    // Validate request body
    if (!img1 || !img2 || !img3 || !img4 || !name || !address || !capacity || !price || !date) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Update venue in the database
    const sql = `UPDATE venue SET img1=?, img2=?, img3=?, img4=?, name=?, address=?, capacity=?, price=?, date=? WHERE id=?`;
    con.query(sql, [img1, img2, img3, img4, name, address, capacity, price, date, venueId], (err, result) => {
        if (err) {
            console.log("Error updating venue:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        res.json({ message: "Venue updated successfully", venueId });
    });
});



// Route for handling adding venue
app.post('/adddecor', (req, res) => {
    const { img1, img2, img3, img4, name, address, theme, price, date } = req.body;

    // Validate request body
    if (!img1 || !img2 || !img3 || !img4 || !name || !address || !theme || !price || !date) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Insert into database
    con.query('INSERT INTO decor (img1, img2, img3, img4, name, address, theme, price, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [img1, img2, img3, img4, name, address, theme, price, date],
        (err, result) => {
            if (err) {
                console.log("Error in adding venue query:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            res.json({ message: "Venue added successfully", venue: { id: result.insertId, img1, img2, img3, img4, name, address, theme, price, date } });
        }
    );
});


// Update a venue
app.put('/updatedecorer/:id', (req, res) => {
    const venueId = req.params.id;
    const { img1, img2, img3, img4, name, address, theme, price, date } = req.body;

    // Validate request body
    if (!img1 || !img2 || !img3 || !img4 || !name || !address || !theme || !price || !date) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Update venue in the database
    const sql = `UPDATE decor SET img1=?, img2=?, img3=?, img4=?, name=?, address=?, theme=?, price=?, date=? WHERE id=?`;
    con.query(sql, [img1, img2, img3, img4, name, address, theme, price, date, venueId], (err, result) => {
        if (err) {
            console.log("Error updating venue:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        res.json({ message: "Venue updated successfully", venueId });
    });
});



// Route for handling adding venue
app.post('/addcaterer', (req, res) => {
    const { img1, img2, img3, img4, name, address, speciality, price, date } = req.body;

    // Validate request body
    if (!img1 || !img2 || !img3 || !img4 || !name || !address || !speciality || !price || !date) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Insert into database
    con.query('INSERT INTO caterer (img1, img2, img3, img4, name, address, speciality, price, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [img1, img2, img3, img4, name, address, speciality, price, date],
        (err, result) => {
            if (err) {
                console.log("Error in adding venue query:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            res.json({ message: "Venue added successfully", venue: { id: result.insertId, img1, img2, img3, img4, name, address, speciality, price, date } });
        }
    );
});


// Update a venue
app.put('/updatecaterer/:id', (req, res) => {
    const venueId = req.params.id;
    const { img1, img2, img3, img4, name, address, speciality, price, date } = req.body;

    // Validate request body
    if (!img1 || !img2 || !img3 || !img4 || !name || !address || !speciality || !price ||! date) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Update venue in the database
    const sql = `UPDATE caterer SET img1=?, img2=?, img3=?, img4=?, name=?, address=?, speciality=?, price=?, date=? WHERE id=?`;
    con.query(sql, [img1, img2, img3, img4, name, address, speciality, price, date, venueId], (err, result) => {
        if (err) {
            console.log("Error updating venue:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        res.json({ message: "Venue updated successfully", venueId });
    });
});


app.post('/addtocart', (req, res) => {
    const { userId, name, address, price } = req.body;

    // Validate request body
    if (!userId || !name || !address || !price) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Insert into cart table
    con.query('INSERT INTO cart (userId, name, address, price) VALUES (?, ?, ?, ?)',
        [userId, name, address, price],
        (err, result) => {
            if (err) {
                console.log("Error in adding to cart:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            // Respond with success message
            res.json({ status: "Success", message: "Success" });
        }
    );
});


app.get('/getbookings/:userId', (req, res) => {
    const userId = req.params.userId; // Retrieve userId from query parameters
    const sql = "SELECT * FROM cart WHERE userId = ?";
    con.query(sql, [userId], (err, result) => {
        if (err) return res.json({ Error: "Got an error in the sql" });
        return res.json({ Status: "Success", Result: result });
    });
});

// Get total price API
app.get('/gettotalprice/:userId', (req, res) => {
    const userId = req.params.userId; // Retrieve userId from query parameters
    const totalPriceQuery = "SELECT SUM(price) AS total_price FROM cart WHERE userId = ?";
    con.query(totalPriceQuery, [userId], (err, result) => {
        if (err) return res.json({ Error: "Got an error in the sql" });
        return res.json({ Status: "Success", TotalPrice: result[0].total_price });
    });
});

// DELETE route to remove an item from the cart
app.delete('/removeitem/:userId/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    // Perform the deletion operation in the database
    const deleteQuery = "DELETE FROM cart WHERE userId = ? AND id = ?";
    con.query(deleteQuery, [userId, itemId], (err, result) => {

        // Check if any rows were affected (if the item was found and deleted)
        if (result.affectedRows > 0) {
            return res.json({ status: "Success", message: "Item removed from cart" });
        } else {
            return res.json({ status: "Error", message: "Item not found in cart" });
        }
    });
});

// POST route to store total amount
app.post('/makepayment', (req, res) => {
    const { userId, totalAmount, paymentMode, paymentDate, paymentStatus } = req.body;

    // Validate request body
    if (!userId || !totalAmount || !paymentMode || !paymentDate || !paymentStatus) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Insert payment details into payments table
    const insertQuery = "INSERT INTO payments (userId, totalAmount, paymentMode, paymentDate, paymentStatus) VALUES (?, ?, ?, ?, ?)";
    con.query(insertQuery, [userId, totalAmount, paymentMode, paymentDate, paymentStatus], (err, result) => {
        if (err) {
            console.error('Error making payment:', err);
            return res.status(500).json({ error: "Payment failed. Please try again." });
        } else {
            console.log('Payment successful!');
            res.status(200).json({ status: 'Success' });
        }
    });
});


app.get('/paymenthistory/:userId', (req, res) => {
    const userId = req.params.userId;

    // Query the database to fetch payment history for the given user
    const sql = "SELECT * FROM payments WHERE userId = ?";
    con.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Error fetching payment history:", err);
            return res.json({ Status: "Error", Message: "Error fetching payment history" });
        }
        return res.json({ Status: "Success", Result: result });
    });
});


app.listen(8081, () => {
    console.log("Running");
});
