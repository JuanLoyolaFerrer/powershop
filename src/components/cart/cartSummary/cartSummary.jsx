import { useNavigate } from 'react-router-dom';

function CartSummary({ total }) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

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
            <button
                className="checkout-btn"
                onClick={handleCheckout}
            >
                Proceder al Pago
            </button>
        </div>
    );
}

export default CartSummary;