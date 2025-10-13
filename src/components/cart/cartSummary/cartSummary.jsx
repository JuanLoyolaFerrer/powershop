function CartSummary({ total }) {
    return (
        <div className="cart-summary">
            <div className="summary-row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
                <span>Envío:</span>
                <span className="free-shipping">Gratis</span>
            </div>
            <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
                Proceder al Pago
            </button>
        </div>
    );
}

export default CartSummary;