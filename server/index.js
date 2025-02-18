const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');
dotenv.config({ path: "./dev.env" });

const app = express();
const corsOptions = {
    origin: 'http://localhost:8080'
}
app.use(cors(corsOptions));

const port = process.env.PORT || 4000;
app.get("/articles", async function (req, res) {
//    console.log(process.env.NEWS_URL, process.env.CORS_FE_URL);
    try {
        const fetchedData = await axios.get(process.env.NEWS_URL);
        const finalResponse = await fetchedData.data;
        res.status(200).json(finalResponse);
    } catch (e) {
        res.status(500).json({error: e});
    }

});

app.listen(port, function () {
    console.log("App is listening on " + port);
});

module.exports = app;
