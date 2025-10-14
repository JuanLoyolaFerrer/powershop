import { Check } from 'lucide-react';

export default function CheckoutStepper({ currentStep }) {
    const steps = [
        { number: 1, title: 'Envío', icon: '📍' },
        { number: 2, title: 'Pago', icon: '💳' },
        { number: 3, title: 'Confirmación', icon: '✓' }
    ];

    return (
        <div className="checkout-stepper">
            <div className="checkout-stepper-container">
                {steps.map((step, index) => (
                    <div key={step.number} className="checkout-step-wrapper">
                        <div className="checkout-step-item">
                            <div
                                className={`checkout-step-circle ${currentStep >= step.number ? 'active' : ''
                                    } ${currentStep > step.number ? 'completed' : ''}`}
                            >
                                {currentStep > step.number ? (
                                    <Check size={24} />
                                ) : (
                                    <span className="checkout-step-icon">{step.icon}</span>
                                )}
                            </div>
                            <span className="checkout-step-title">{step.title}</span>
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`checkout-step-line ${currentStep > step.number ? 'completed' : ''
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}