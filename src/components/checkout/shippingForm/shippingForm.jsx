import { ArrowRight } from 'lucide-react';

export default function ShippingForm({ formData, onInputChange, onNext }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación básica
        if (!formData.email || !formData.fullName || !formData.address || !formData.city || !formData.zipCode) {
            alert('Por favor completa todos los campos');
            return;
        }

        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Información de Contacto */}
            <div className="checkout-card">
                <h2 className="checkout-card-title">
                    📧 Información de Contacto
                </h2>
                <div className="checkout-form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={onInputChange}
                        className="checkout-input"
                        required
                    />
                </div>
            </div>

            {/* Dirección de Envío */}
            <div className="checkout-card">
                <h2 className="checkout-card-title">
                    📍 Dirección de Envío
                </h2>
                <div className="checkout-form-group">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={formData.fullName}
                        onChange={onInputChange}
                        className="checkout-input"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        value={formData.address}
                        onChange={onInputChange}
                        className="checkout-input"
                        required
                    />
                    <div className="checkout-form-row">
                        <input
                            type="text"
                            name="city"
                            placeholder="Ciudad"
                            value={formData.city}
                            onChange={onInputChange}
                            className="checkout-input"
                            required
                        />
                        <input
                            type="text"
                            name="zipCode"
                            placeholder="Código Postal"
                            value={formData.zipCode}
                            onChange={onInputChange}
                            className="checkout-input"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Botón Continuar */}
            <button type="submit" className="checkout-btn-continue">
                Continuar al Pago
                <ArrowRight size={20} />
            </button>
        </form>
    );
}