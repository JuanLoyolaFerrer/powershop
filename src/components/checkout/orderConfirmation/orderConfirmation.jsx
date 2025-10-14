import { CheckCircle, Download, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OrderConfirmation({ orderNumber, total }) {
    const navigate = useNavigate();

    return (
        <div className="order-confirmation-page">
            <div className="order-confirmation-container">
                <div className="order-confirmation-card">
                    {/* Icono de Éxito */}
                    <div className="success-icon-container">
                        <CheckCircle size={80} className="success-icon" />
                    </div>

                    {/* Mensaje Principal */}
                    <h1 className="confirmation-title">¡Compra Exitosa! 🎉</h1>
                    <p className="confirmation-subtitle">
                        Tu pedido ha sido procesado correctamente
                    </p>

                    {/* Detalles del Pedido */}
                    <div className="order-details-box">
                        <div className="order-detail-item">
                            <span className="detail-label">Número de Orden:</span>
                            <span className="detail-value">{orderNumber}</span>
                        </div>
                        <div className="order-detail-item">
                            <span className="detail-label">Total Pagado:</span>
                            <span className="detail-value total-amount">S/ {total.toFixed(2)}</span>
                        </div>
                        <div className="order-detail-item">
                            <span className="detail-label">Fecha:</span>
                            <span className="detail-value">{new Date().toLocaleDateString('es-ES')}</span>
                        </div>
                    </div>

                    {/* Información Adicional */}
                    <div className="confirmation-info">
                        <div className="info-item">
                            <span className="info-emoji">📧</span>
                            <p>Te hemos enviado un email de confirmación con los detalles de tu pedido</p>
                        </div>
                        <div className="info-item">
                            <span className="info-emoji">📦</span>
                            <p>Tu pedido será enviado en las próximas 24-48 horas</p>
                        </div>
                        <div className="info-item">
                            <span className="info-emoji">🚚</span>
                            <p>Recibirás un código de seguimiento cuando tu pedido sea despachado</p>
                        </div>
                    </div>

                    {/* Botones de Acción */}
                    <div className="confirmation-actions">
                        <button
                            className="btn-download-invoice"
                            onClick={() => alert('Descargando factura...')}
                        >
                            <Download size={20} />
                            Descargar Factura
                        </button>
                        <button
                            className="btn-back-home"
                            onClick={() => navigate('/')}
                        >
                            <Home size={20} />
                            Volver a la Tienda
                        </button>
                    </div>

                    {/* Mensaje de Agradecimiento */}
                    <div className="thank-you-message">
                        <p>¡Gracias por tu compra! 💜</p>
                        <p className="small-text">Si tienes alguna pregunta, contáctanos en info@powershop.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}