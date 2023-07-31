const pool = require('../config/pool');

//ARROJA LOS DATOS DEL USUARIO YA SEA DE TABLA VE verified_artists o users REVISAR SI ES NECESARIO Q SE PUEDA INDICAR LA TABLA O SI SIRVE CON ID
const getUserById = async (table, id) => {
    const query = 'SELECT * FROM $1 WHERE user_id = $2';
    try {
        const response = await pool.query(query, [table, id]);
        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};
//SERVIRIA PARA BUSCAR EL PERFIL DE ALGUN VENDEDOR O ARTISTA SEGUN EL NOMBRE DEPENDIENDO SI ES TABLA verified_artists o users
const getUserByUsername = async (table, username) => {
    const query = 'SELECT * FROM $1 WHERE username = $2';
    try {
        const response = await pool.query(query, [table, username]);
        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};


const createUser = async (user) => {
    const query =
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
    try {
        const response = await pool.query(query, [user.username, user.email, user.password]);
        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};

/*VERIFICAR SI SE DEBEN ACTUALIZAR LOS TRES CAMPOS, PODRIA SERVIR PARA ACTUALIZAR CUALQUIERA SI SE MANTIENEN LOS DEMAS IGUAL QUE ANTES*/ 
const updateUser = async (id, user) => {
    const query =
      'UPDATE users SET username = $1, email = $2 password = $3 WHERE user_id = $4 RETURNING *';
    try {
        const response = await pool.query(query, [user.username, user.email, user.password, id]);
        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE user_id = $1';
    try {
        const response = await pool.query(query, [id]);
        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};



module.exports = {
    getUserById,
    getUserByUsername,
    createUser,
    updateUser,
    deleteUser
};