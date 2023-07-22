// CommentItem.js
import React from 'react';

const CommentItem = ({ comment }) => {
    return (
        <div>
            <h5>Producto: {comment.product}</h5>
            {/* Muestra el comentario o calificación */}
        </div>
    );
};

export default CommentItem;
