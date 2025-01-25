// server.js  
const express = require('express');  
const mongoose = require('mongoose');  
const cors = require('cors');  
const fs = require('fs');  
require('dotenv').config();  

const app = express();  
const PORT = process.env.PORT || 5000;  

app.use(cors());  
app.use(express.json()); // Middleware to parse JSON  

// Log MongoDB URI for debugging  
console.log("MongoDB URI: ", process.env.MONGODB_URI);  

// Connect to MongoDB (removed deprecated options)  
mongoose.connect(process.env.MONGODB_URI)  
    .then(() => console.log('MongoDB connected'))  
    .catch(err => console.error(err));  

// Basic route  
app.get('/', (req, res) => {  
    res.send('Hello from the backend');  
});  

// Define your location route  
app.post('/api/location', (req, res) => {  
    const { latitude, longitude, deviceInfo } = req.body;  

    // Create a location data object with a timestamp  
    const locationData = {  
        latitude,  
        longitude,  
        deviceInfo,  
        timestamp: new Date().toISOString()  
    }; 
    // Write the location data to a JSON file  
    fs.appendFile('locationData.json', JSON.stringify(locationData) + '\n', (err) => {  
        if (err) {  
            console.error('Error writing to file', err);  
            return res.status(500).json({ message: 'Error saving location data' });  
        } 

        // Send a response back to the client  
        res.status(200).json({ message: 'Location received', data: locationData });  
    });  
});  

app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);  
});