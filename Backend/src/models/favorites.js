const pool = require('../config/pool');

const getFavorites = async () => {
    const query = 'SELECT * FROM favorites';
    try {
        const { rows } = await pool.query(query);
        return rows;
    } catch (error) {
        throw new Error(error);
    }
};

const createFavorite = async (favorite) => {
    const query = 'INSERT INTO favorites (user_id, product_id) VALUES ($1, $2) RETURNING *';
    try {
        const response = await pool.query(query, [
            favorite.user_id,
            favorite.product_id
        ]);
        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteFavorite = async (id) => {
    const query = 'DELETE FROM favorites WHERE favorite_id = $1';
    try {
        const response = await pool.query(query, [id]);
        return response.rows;
    } catch (error) {
        throw new Error(error);
    }
};


module.exports = {
    getFavorites,
    createFavorite,
    deleteFavorite
};