function CartEmpty() {
    return (
        <div className="empty-cart">
            <p className="empty-icon">🛒</p>
            <p>Tu carrito está vacío</p>
            <p className="empty-subtitle">¡Agrega productos para comenzar!</p>
        </div>
    );
}

export default CartEmpty;