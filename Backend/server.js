require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const artworksRoutes = require('./src/routes/artworksRoutes');

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SERVIDOR ENCENDIDO EN PUERTO ${PORT}`);
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/artworks', artworksRoutes);

module.exports = app;