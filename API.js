const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        let data = await dbConnect();
        let result = await data.find().toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data");
    }
});

app.post("/", async (req, res) => {
    try {
        let data = await dbConnect();
        let result = await data.insertMany(req.body);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error inserting data");
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
    