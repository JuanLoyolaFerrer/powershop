function QuantityControl({ quantity, onDecrease, onIncrease }) {
    return (
        <div className="quantity-controls">
            <button className="qty-btn" onClick={onDecrease}>
                -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="qty-btn" onClick={onIncrease}>
                +
            </button>
        </div>
    );
}

export default QuantityControl;