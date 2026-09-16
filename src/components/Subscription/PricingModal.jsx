import React, { useState, useEffect, useRef } from 'react';
import { useCV } from '../../context/CVContext';
import confetti from 'canvas-confetti';
import { 
  X, 
  Crown, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Zap, 
  ArrowRight,
  Lock,
  Star
} from 'lucide-react';

export default function PricingModal() {
  const { 
    isPricingModalOpen, 
    setIsPricingModalOpen, 
    isSubscribed, 
    setIsSubscribed, 
    upgradeReason 
  } = useCV();

  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Alexander Vance',
    cardNumber: '4242 •••• •••• 4242',
    expiry: '12/28',
    cvc: '891'
  });

  const dialogRef = useRef(null);

  // Sync native dialog with state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isPricingModalOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isPricingModalOpen]);

  // Fallback light-dismiss for older browsers
  const handleDialogBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsPricingModalOpen(false);
    setCheckoutSuccess(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSubscribed(true);
      setCheckoutSuccess(true);

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log("Confetti trigger", err);
      }

      // Auto close after showing success
      setTimeout(() => {
        handleClose();
      }, 1800);
    }, 900);
  };

  const handleCancelSubscription = () => {
    setIsSubscribed(false);
    handleClose();
  };

  if (!isPricingModalOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="pricing-dialog"
      onClick={handleDialogBackdropClick}
      onCancel={handleClose}
    >
      <div className="pricing-modal-inner">
        {/* Close Button */}
        <button className="pricing-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {checkoutSuccess ? (
          <div className="checkout-success-view">
            <div className="success-icon-wrap">
              <Sparkles size={40} color="#10b981" />
            </div>
            <h2 className="success-title">Welcome to Resumate Pro!</h2>
            <p className="success-subtitle">
              Your subscription is active. All 5 premium templates, high-res PDF exports, and custom color accents are now fully unlocked.
            </p>
            <div className="success-badge">
              <Crown size={16} color="#fbbf24" />
              <span>Pro Plan Active</span>
            </div>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="modal-top-banner">
              <div className="modal-crown-tag">
                <Crown size={15} />
                <span>RESUMATE PRO SUBSCRIPTION</span>
              </div>
              <h2 className="modal-heading">Supercharge Your Job Search</h2>
              <p className="modal-subtext">
                {upgradeReason || "Unlock all 5 high-converting templates, remove watermarks, and export unlimited ATS-optimized resumes."}
              </p>

              {/* Billing Toggle */}
              <div className="billing-toggle-container">
                <button
                  className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly Billing
                </button>
                <button
                  className={`toggle-option ${billingCycle === 'annual' ? 'active' : ''}`}
                  onClick={() => setBillingCycle('annual')}
                >
                  Annual Billing
                  <span className="discount-pill">Save 38%</span>
                </button>
              </div>
            </div>

            {/* Plans Comparison Grid */}
            <div className="pricing-plans-grid">
              {/* Free Card */}
              <div className="plan-card free-plan">
                <div className="plan-header">
                  <span className="plan-name">Free Starter</span>
                  <div className="plan-price">
                    <span className="price-amount">$0</span>
                    <span className="price-term">/ forever</span>
                  </div>
                  <p className="plan-pitch">Basic CV creation for entry-level applications.</p>
                </div>
                <ul className="plan-features">
                  <li><Check size={14} className="feature-check" /> 3 Classic Free Templates</li>
                  <li><Check size={14} className="feature-check" /> Standard PDF download</li>
                  <li><Check size={14} className="feature-check" /> Basic text formatting</li>
                  <li className="dimmed">✕ Premium Executive & Studio Templates</li>
                  <li className="dimmed">✕ Watermark-free premium exports</li>
                  <li className="dimmed">✕ Custom theme palette switching</li>
                </ul>
                <div className="current-free-indicator">
                  {!isSubscribed ? "Your Current Plan" : "Downgrade"}
                </div>
              </div>

              {/* Pro Card */}
              <div className="plan-card pro-plan featured">
                <div className="pro-popular-tag">MOST POPULAR</div>
                <div className="plan-header">
                  <div className="pro-title-row">
                    <span className="plan-name">Resumate Pro</span>
                    <Crown size={18} color="#fbbf24" />
                  </div>
                  <div className="plan-price">
                    <span className="price-currency">$</span>
                    <span className="price-amount">
                      {billingCycle === 'annual' ? '7.40' : '12'}
                    </span>
                    <span className="price-term">/ month</span>
                  </div>
                  <span className="billed-note">
                    {billingCycle === 'annual' ? 'Billed annually ($89/yr)' : 'Billed monthly ($12/mo)'}
                  </span>
                  <p className="plan-pitch">For professionals targeting high-paying dream positions.</p>
                </div>

                <ul className="plan-features">
                  <li><Check size={14} className="feature-check pro" /> <strong>All 5 Templates</strong> (including Luxe Sapphire & Creative)</li>
                  <li><Check size={14} className="feature-check pro" /> <strong>No Watermarks</strong> on any template</li>
                  <li><Check size={14} className="feature-check pro" /> <strong>Unlimited High-Res PDF</strong> Exports</li>
                  <li><Check size={14} className="feature-check pro" /> <strong>Custom Accent Colors & Fonts</strong></li>
                  <li><Check size={14} className="feature-check pro" /> <strong>ATS Compatibility</strong> Score & Format</li>
                  <li><Check size={14} className="feature-check pro" /> 24/7 Priority Support & Updates</li>
                </ul>

                {isSubscribed ? (
                  <div className="pro-active-state">
                    <div className="active-msg">
                      <ShieldCheck size={16} color="#10b981" />
                      <span>You are subscribed to Pro</span>
                    </div>
                    <button 
                      className="cancel-sub-btn" 
                      onClick={handleCancelSubscription}
                    >
                      Simulate Cancel / Downgrade
                    </button>
                  </div>
                ) : (
                  /* Checkout form */
                  <form className="checkout-form" onSubmit={handleSubscribe}>
                    <div className="form-legend">
                      <CreditCard size={14} />
                      <span>Instant Secure Checkout</span>
                    </div>

                    <div className="checkout-inputs">
                      <input 
                        type="text" 
                        placeholder="Cardholder Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required 
                      />
                      <input 
                        type="text" 
                        placeholder="Card Number" 
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        required 
                      />
                      <div className="card-sub-row">
                        <input 
                          type="text" 
                          placeholder="MM/YY" 
                          value={formData.expiry}
                          onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                          required 
                        />
                        <input 
                          type="text" 
                          placeholder="CVC" 
                          value={formData.cvc}
                          onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                          required 
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="submit-checkout-btn"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <span className="btn-spinner">Processing...</span>
                      ) : (
                        <>
                          <Lock size={14} />
                          <span>
                            Subscribe Now ({billingCycle === 'annual' ? '$89/yr' : '$12/mo'})
                          </span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>

                    <div className="guarantee-text">
                      <ShieldCheck size={12} />
                      <span>30-day money-back guarantee • Cancel anytime</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
