const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const eventRoutes = require('./Routes/event');
const multer = require('multer');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('✅ MongoDB connected');
   } catch (error) {
      console.error('❌ MongoDB connection failed:', error);
   }
};

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.use('/api/v1/events', eventRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start Server
app.listen(port, () => {
   connect();
   console.log(`🚀 Server is running at http://localhost:${port}`);
});
