import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import MapView from './MapView';  

const App = () => {  
    const [location, setLocation] = useState({ latitude: null, longitude: null });  

    useEffect(() => {  
        const getLocation = () => {  
            navigator.geolocation.getCurrentPosition(  
                (position) => {  
                    const { latitude, longitude } = position.coords;  
                    setLocation({ latitude, longitude });  

                    // Gather device information  
                    const deviceInfo = navigator.userAgent;
                    // Send location and device info to your backend  
                    axios.post('http://localhost:5000/api/location', { latitude, longitude, deviceInfo })  
                        .then(response => alert(deviceInfo))  
                        .catch(err => console.error(err));  
                },  
                (error) => {  
                    console.error('Error getting location', error.message);  
                },  
                {  
                    enableHighAccuracy: true,  
                    timeout: 5000,  
                    maximumAge: 0  
                }  
            );  
        };  

        getLocation();  
        const intervalId = setInterval(getLocation, 10000);  
        return () => clearInterval(intervalId);  
    }, []);  

    return (  
        <div>  
            <h1>Current Location</h1>  
            {location.latitude && location.longitude ? (  
                <>  
                    <p>Latitude: {location.latitude}</p>  
                    <p>Longitude: {location.longitude}</p>  
                    <MapView latitude={location.latitude} longitude={location.longitude} />  
                </>  
            ) : (  
                <p>Fetching location...</p>  
            )}  
        </div>  
    );  
};  

export default App;