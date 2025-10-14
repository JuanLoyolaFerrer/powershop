import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import CheckoutStepper from '../checkoutStepper/CheckoutStepper';
import ShippingForm from '../shippingForm/ShippingForm';
import PaymentMethod from '../paymentMethod/PaymentMethod';
import OrderSummary from '../orderSummary/OrderSummary';
import OrderConfirmation from '../orderConfirmation/OrderConfirmation';
import './checkout.css';

export default function Checkout() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Laptop Pro 15"', price: 1299.99, quantity: 1, image: '💻' },
        { id: 2, name: 'Mouse Inalámbrico', price: 29.99, quantity: 2, image: '🖱️' },
        { id: 3, name: 'Teclado Mecánico', price: 89.99, quantity: 1, image: '⌨️' }
    ]);

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        cardName: '',
        expiry: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(items =>
            items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.18;
    const shipping = subtotal > 100 ? 0 : 15;
    const total = subtotal + tax + shipping;

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            setOrderComplete(true);
        }, 2000);
    };

    const handleNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    if (orderComplete) {
        return <OrderConfirmation orderNumber="PS-2025-001" total={total} />;
    }

    return (
        <>
            {/* Header */}
            <div className="checkout-header">
                <div className="checkout-header-container">
                    <ShoppingCart size={40} style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))' }} />
                    <h1>Finalizar Compra</h1>
                </div>
            </div>

            {/* Stepper */}
            <CheckoutStepper currentStep={currentStep} />

            {/* Contenedor Principal */}
            <div className="checkout-container">
                <div className="checkout-grid">
                    {/* Formulario */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {currentStep === 1 && (
                            <ShippingForm
                                formData={formData}
                                onInputChange={handleInputChange}
                                onNext={handleNextStep}
                            />
                        )}

                        {currentStep === 2 && (
                            <PaymentMethod
                                formData={formData}
                                onInputChange={handleInputChange}
                                onSubmit={handlePayment}
                                isProcessing={isProcessing}
                                total={total}
                                onBack={handlePrevStep}
                            />
                        )}
                    </div>

                    {/* Resumen del Pedido */}
                    <OrderSummary
                        cartItems={cartItems}
                        updateQuantity={updateQuantity}
                        removeItem={removeItem}
                        subtotal={subtotal}
                        tax={tax}
                        shipping={shipping}
                        total={total}
                    />
                </div>
            </div>
        </>
    );
}