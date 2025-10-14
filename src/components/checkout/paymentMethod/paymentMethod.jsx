import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import PaymentQR from '../paymentQR/PaymentQR';
import { useState } from 'react';

export default function PaymentMethod({ formData, onInputChange, onSubmit, isProcessing, total, onBack }) {
    const [paymentType, setPaymentType] = useState('card'); // 'card' o 'qr'

    return (
        <>
            {/* Selector de Método de Pago */}
            <div className="checkout-card">
                <h2 className="checkout-card-title">
                    💳 Método de Pago
                </h2>
                <div className="payment-type-selector">
                    <button
                        type="button"
                        className={`payment-type-btn ${paymentType === 'card' ? 'active' : ''}`}
                        onClick={() => setPaymentType('card')}
                    >
                        <CreditCard size={24} />
                        Tarjeta de Crédito/Débito
                    </button>
                    <button
                        type="button"
                        className={`payment-type-btn ${paymentType === 'qr' ? 'active' : ''}`}
                        onClick={() => setPaymentType('qr')}
                    >
                        📱 Yape / Plin
                    </button>
                </div>
            </div>

            {/* Formulario de Pago con Tarjeta */}
            {paymentType === 'card' && (
                <div className="checkout-card">
                    <h2 className="checkout-card-title">
                        <CreditCard size={20} />
                        Información de Pago
                    </h2>
                    <form onSubmit={onSubmit} className="checkout-form-group">
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Número de tarjeta"
                            value={formData.cardNumber}
                            onChange={onInputChange}
                            maxLength="19"
                            className="checkout-input"
                            required
                        />
                        <input
                            type="text"
                            name="cardName"
                            placeholder="Nombre en la tarjeta"
                            value={formData.cardName}
                            onChange={onInputChange}
                            className="checkout-input"
                            required
                        />
                        <div className="checkout-form-row">
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/AA"
                                value={formData.expiry}
                                onChange={onInputChange}
                                maxLength="5"
                                className="checkout-input"
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={formData.cvv}
                                onChange={onInputChange}
                                maxLength="4"
                                className="checkout-input"
                                required
                            />
                        </div>

                        <div className="checkout-buttons-row">
                            <button
                                type="button"
                                onClick={onBack}
                                className="checkout-btn-back"
                            >
                                <ArrowLeft size={20} />
                                Volver
                            </button>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="checkout-btn-pay"
                                style={{ opacity: isProcessing ? 0.6 : 1, cursor: isProcessing ? 'not-allowed' : 'pointer' }}
                            >
                                {isProcessing ? (
                                    <>⏳ Procesando...</>
                                ) : (
                                    <>
                                        <Lock size={20} />
                                        Pagar S/ {total.toFixed(2)}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Pago con QR */}
            {paymentType === 'qr' && (
                <PaymentQR
                    total={total}
                    onBack={onBack}
                    onConfirm={onSubmit}
                    isProcessing={isProcessing}
                />
            )}
        </>
    );
}