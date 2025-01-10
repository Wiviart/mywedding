const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch").default;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const scriptURL = "https://script.google.com/macros/s/AKfycbyeQ6ON2HoMmRSO4SkZlN0UPpDPOZxF9viDYEv_EQuB2cOSA7FRw76LKGmeowQwNlnQBQ/exec";

app.post("/proxy", async (req, res) => {
    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body),
        });

        console.log("Response Status:", response.status);
        const data = await response.json();
        console.log("Response Body:", data);
        res.json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch from Google Apps Script" });
    }
});

app.listen(3000, () => console.log("Proxy running on http://localhost:3000"));

const getURL = (sheetName) => `https://script.google.com/macros/s/AKfycbwo_VSiKLjq84y0wYroDaQUiJktOIZ4-cZeZQyoId0PXAxJAT_28uTVao5lpW0neS0B/exec?sheetName=${sheetName}`;

app.get("/proxy", async (req, res) => {
    try {
        const sheetName = req.query.sheetName;
        const url = getURL(sheetName);
        const response = await fetch(url);
        console.log("Response Status:", response.status);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch data from Google Apps Script" });
    }
});