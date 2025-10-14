import { Trash2 } from 'lucide-react';

export default function OrderSummary({ cartItems, updateQuantity, removeItem, subtotal, tax, shipping, total }) {
    return (
        <div className="checkout-summary-section">
            <div className="checkout-summary-card">
                <h2 className="checkout-card-title">
                    📦 Resumen del Pedido
                </h2>

                <div className="checkout-items-container">
                    {cartItems.map(item => (
                        <div key={item.id} className="checkout-item">
                            <div className="checkout-item-image">{item.image}</div>
                            <div className="checkout-item-details">
                                <h3 className="checkout-item-name">{item.name}</h3>
                                <p className="checkout-item-price">S/ {item.price.toFixed(2)}</p>
                                <div className="checkout-quantity-controls">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="checkout-qty-btn"
                                    >
                                        −
                                    </button>
                                    <span className="checkout-quantity">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="checkout-qty-btn"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="checkout-remove-btn"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="checkout-summary-details">
                    <div className="checkout-summary-row">
                        <span>Subtotal</span>
                        <span>S/ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="checkout-summary-row">
                        <span>IGV (18%)</span>
                        <span>S/ {tax.toFixed(2)}</span>
                    </div>
                    <div className="checkout-summary-row">
                        <span>Envío</span>
                        <span>{shipping === 0 ? '🎉 GRATIS' : `S/ ${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="checkout-total-row">
                        <span>TOTAL</span>
                        <span>S/ {total.toFixed(2)}</span>
                    </div>
                </div>

                {shipping > 0 && (
                    <div className="checkout-free-shipping">
                        💡 ¡Envío gratis en compras mayores a S/ 100!
                    </div>
                )}
            </div>
        </div>
    );
}