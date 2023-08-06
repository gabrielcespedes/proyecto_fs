import axios from 'axios';

// Función para obtener favorites dede el backend
export const getFavorites = async () => {
    try {
        const response = await axios.get('http://localhost:3000/favorites');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los favoritos:', error);
        throw error;
    }
};