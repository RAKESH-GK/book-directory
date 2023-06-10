const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

// To connect with your mongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/book_directory');

// Schema for users of app
const UserSchema = new mongoose.Schema({
    book_name: {
        type: String
    },
    author_name: {
        type: String
    },
    book_type:{
        type: String
    },
    no_of_pages:{
        type: Number
    },
    ratings:{
        type: Number
    },
    web_link:{
        type: String
    }
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
app.use(express.json());
app.use(cors());


console.log("App listen at port 5000");

//view all data
app.get("/", async (req, res) => {
    const book_data = await User.find();
    return res.status(200).json({
        data: book_data
    });
});

//add data to database
app.post("/add_book", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(req.body);
});

app.put("/update_book/:id", async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
    res.send(req.body);
});

//delete data

app.delete("/delete_book/:id", async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.send(req.body);
});
app.listen(5000);
