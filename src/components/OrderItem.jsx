import React from 'react';

const OrderItem = ({ order }) => {
    return (
        <div>
            <h5>Orden: {order.id}</h5>
            <p>Fecha: {order.date}</p>
            <p>Total: ${order.total}</p>
            {/* Puedes mostrar más información sobre el pedido, como los artículos comprados, el estado del pedido, etc. */}
        </div>
    );
};

export default OrderItem;
