import CartEmpty from '../cartEmpty/cartEmpty.jsx';
import CartItem from '../cartItem/cartItem.jsx';
import CartSummary from '../cartSummary/cartSummary.jsx';

function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
    if (!isOpen) return null;

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleOverlayClick = (e) => {
        if (e.target.className === 'cart-overlay') {
            onClose();
        }
    };

    return (
        <div className="cart-overlay" onClick={handleOverlayClick}>
            <div className="cart-modal">
                <div className="cart-header">
                    <h2>🛒 Tu Carrito</h2>
                    <button className="close-btn" onClick={onClose}>✕</button>
                </div>

                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <CartEmpty />
                    ) : (
                        <>
                            <div className="cart-items">
                                {cartItems.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdateQuantity={onUpdateQuantity}
                                        onRemoveItem={onRemoveItem}
                                    />
                                ))}
                            </div>

                            <CartSummary total={calculateTotal()} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartDrawer;