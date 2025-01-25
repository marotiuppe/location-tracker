# Live Location Tracker Application  

## Table of Contents  
- [Project Description](#project-description)  
- [Project Creation Instructions](#project-creation-instructions)  
- [Project Directory Structure](#project-directory-structure)  
- [Technologies Used](#technologies-used)  
- [How to Run the Application](#how-to-run-the-application)  
- [API Documentation](#api-documentation)  
- [Contribution](#contribution)  
- [License](#license)  
- [Contact Information](#contact-information)  

## Project Description  

The Live Location Tracker Application is a real-time tracking system that allows users to fetch and view their geographical locations (latitude and longitude) through a web interface. The application also logs location data along with device information, which can be used for various analytical purposes. Built with React for the front-end and Node.js with Express for the backend, this application demonstrates full-stack development capabilities.  

## Project Creation Instructions  

To set up this project locally, follow these steps:  

1. **Clone the repository**:  
    ```bash  
    git clone https://github.com/your-username/location-tracker.git  
    cd location-tracker  
    ```  

2. **Navigate to the backend directory if applicable**:  
   ```bash  
   cd server

3. **Install backend dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the backend directory and include your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. **Navigate to the client directory**:
   ```bash
   cd ../client
   ```

6. **Install client dependencies**:
   ```bash
   npm install
   ```

7. **Start the application**:
   - For the server:
     ```bash
     npm start
     ```
   - For the client:
     ```bash
     npm start
     ```
   The application should now be running on `http://localhost:3000`for the client  and `http://localhost:5000` for the server.

## Project Directory Structure

Here is the structure of the project directory:

```
location-tracker/
│
├── server/
│   ├── server.js              # Main server file
│   ├── .env                   # Environment variables
│   ├── package.json           # Backend dependencies and scripts
│   ├── models/                # Mongoose models (if any)
│   │   ├── Location.js        # Location Schema
│   ├── package.json           # Backend dependencies and scripts
│   ├── locationData.json      # Location received log
│
├── client/
│   ├── public/                # Static files
│   ├── src/                   # Application source code
│   │   ├── components/        # React components
│   │   ├── App.js             # Main application component
│   │   ├── App.css            # Application CSS
│   │   └── index.js           # Entry point for React application
│   │   └── MapView.js         # Commponent to View MAP
│   ├── package.json           # Frontend dependencies and scripts
│   └── .env                   # Environment variables for frontend (if needed)
│
└── README.md                  # This readme file
```

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Development Tools**: Nodemon, dotenv
- **Others**: CORS for cross-origin resource sharing

## How to Run the Application

1. Ensure you have **Node.js** and **npm** installed on your machine. You can download them from [Node.js Official Website](https://nodejs.org/).
2. Follow the project creation instructions to set up both the backend and frontend environments.
3. Start the backend server and frontend development server using the provided commands.
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Documentation

### POST `/api/location`

- **Description**: Receives latitude, longitude, and device information from the client.
- **Request Body**:
  ```json
  {
      "latitude": "number",
      "longitude": "number",
      "deviceInfo": "string"
  }
  ```
- **Response**:
  - **200 OK**: Location received and logged.
  - **500 Internal Server Error**: If there is an error saving the location data.

## Contribution

Contributions are welcome! If you have suggestions for improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

## Contact Information

For any inquiries, please contact:

- Your Name - [marotiuppe891@gmail.com](mailto:marotiuppe891@gmail.com)
- GitHub Profile - [marotiuppe](https://github.com/marotiuppe)

---