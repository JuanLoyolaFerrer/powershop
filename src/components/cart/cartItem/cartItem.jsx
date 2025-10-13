import QuantityControl from '../quantityControl/quantityControl.jsx';

function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
    return (
        <div className="cart-item">
            <div className="item-image">{item.image}</div>
            <div className="item-details">
                <h4>{item.name}</h4>
                <p className="item-price">${item.price}</p>
            </div>
            <div className="item-actions">
                <QuantityControl
                    quantity={item.quantity}
                    onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
                />
                <button
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                    title="Eliminar producto"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}

export default CartItem;