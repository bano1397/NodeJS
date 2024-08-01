const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    try {
        let data = await dbConnect();
        data = await data.find().toArray();
        resp.send(data);
    } catch (error) {
        resp.status(500).send({ error: 'An error occurred while fetching data' });
    }
});

app.post("/", async (req, resp) => {
    try {
        let data = await dbConnect();
        let result = await data.insertOne(req.body);
        resp.send(result);
    } catch (error) {
        resp.status(500).send({ error: 'An error occurred while inserting data' });
    }
});

const port = 5001; // Change this to an available port if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
