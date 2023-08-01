const bcrypt = require('bcrypt');
const { getUserById, getUserByEmail, updateUser, deleteUser } = require('../models/users');



//SIRVE PARA OBTENER LA INFORMACION DE UN USUARIO LOGUEADO POR SU EMAIL
const userLogued = async (req, res) => {
    try {
        const loguedUserData = await getUserByEmail(req.email);
        res.json(loguedUserData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//SIRVE PARA OBTENER UN USUARIO SEGUN SU ID DEL REQ PARAMS, VER SI SIRVE UTILIZARLO
const oneUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//VER BIEN SI UTILIZAR ESTE YA QUE HABRIA Q ENCRIPTAR DE NUEVO LA PASSWORD, Y SI LO NECESITAMOS
const update = async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.username, req.email, req.password);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const destroy = async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {userLogued, oneUser, update, destroy};