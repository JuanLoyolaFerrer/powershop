import { ArrowLeft, Lock } from 'lucide-react';

export default function PaymentQR({ total, onBack, onConfirm, isProcessing }) {
    return (
        <div className="checkout-card">
            <h2 className="checkout-card-title">
                📱 Pago con Yape / Plin
            </h2>

            <div className="payment-qr-container">
                <div className="qr-code-box">
                    <div className="qr-code-placeholder">
                        {/* Aquí puedes usar una librería como qrcode.react */}
                        <div style={{
                            width: '200px',
                            height: '200px',
                            background: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '10px',
                            fontSize: '4rem'
                        }}>
                            📱
                        </div>
                    </div>
                    <div className="qr-instructions">
                        <p><strong>Escanea el código QR</strong></p>
                        <p>Monto a pagar: <span className="qr-amount">S/ {total.toFixed(2)}</span></p>
                        <div className="qr-steps">
                            <p>1️⃣ Abre tu app de Yape o Plin</p>
                            <p>2️⃣ Escanea el código QR</p>
                            <p>3️⃣ Confirma el pago</p>
                        </div>
                    </div>
                </div>

                <div className="payment-qr-info">
                    <div className="info-box">
                        <span className="info-icon">⚠️</span>
                        <p>Después de realizar el pago, haz clic en "Confirmar Pago"</p>
                    </div>
                </div>
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
                    type="button"
                    onClick={onConfirm}
                    disabled={isProcessing}
                    className="checkout-btn-pay"
                    style={{ opacity: isProcessing ? 0.6 : 1, cursor: isProcessing ? 'not-allowed' : 'pointer' }}
                >
                    {isProcessing ? (
                        <>⏳ Verificando...</>
                    ) : (
                        <>
                            <Lock size={20} />
                            Confirmar Pago
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}