import React, { useState } from 'react';
import '../styles/help.css';

function Help() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubmit =(event) =>{
    event.preventDefault(); 
    alert("Your Query has been submited");
  }
  return (
    <div className="help-wrapper">
      <div className="help-container__left">
        <div className="help-header_left">
          <p className='sub-help-title'>The FAQs</p>
          <h1 className='help-title'>Help Center</h1>
        </div>
        <form className='help_form'>
              <label htmlFor="email" className='help-form__label'>Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required className='help-form__input' />

              <label htmlFor="query" className='help-form__label'>Your Query:</label>
              <textarea id="query" name="query" placeholder="Enter your query" rows="5" required className='help-form__input'></textarea>

              <button  onClick={handleSubmit}className='help-form__btn'>Submit</button>
        </form>
      </div>
      <div className="help-container__right">
        <div className="help-header_right">
          <h3 className='help-title'>Quick Assists</h3>
          <p className='sub-help-title'>Answers to our most frequently asked questions are just one click away.</p>
        </div>
        <div className="collapsible-container">
          <div className="collapsible">
            <label className="collapsible-label" onClick={() => toggleSection(1)}>Account Management</label>
            {openSection === 1 && (
              <div className='collapsible-box'>
                <h3 className="collapsible-head">Creating an Account:</h3>
                <p className="collapsible-text">
                  To create an account, click on the "Sign Up" button at the top right of the page. Fill in your details,
                  including your email, password, and any other required information, then click "Submit." You’ll receive a
                  confirmation email to verify your account.
                </p>

                <h3 className="collapsible-head">Resetting Your Password:</h3>
                <p className="collapsible-text">
                  If you’ve forgotten your password, click on the "Forgot Password?" link on the login page. Enter your
                  registered email address, and we’ll send you instructions to reset your password.
                </p>

                <h3 className="collapsible-head">Updating Account Information:</h3>
                <p className="collapsible-text">
                  To update your personal information, log in to your account, go to the "Account Settings" page, and
                  make the necessary changes. Don’t forget to save your updates!
                </p>
              </div>
            )}
          </div>
          <div className="collapsible">
            <label className="collapsible-label" onClick={() => toggleSection(2)}>Shopping and Orders</label>
            {openSection === 2 && (
              <div className='collapsible-box'>
                <h3 className="collapsible-head">Placing an Order:</h3>
                <p className="collapsible-text">
                  Browse through our products and add items to your bag. Once you’re ready, click on the "Bag" icon,
                  review your items, and click "Checkout." Follow the prompts to enter your shipping details and payment
                  information.
                </p>

                <h3 className="collapsible-head">Tracking Your Order:</h3>
                <p className="collapsible-text">
                  After placing an order, you’ll receive an email with tracking information. You can also track your order
                  by logging into your account and navigating to the "My Orders" section.
                </p>

                <h3 className="collapsible-head">Order Issues:</h3>
                <p className="collapsible-text">
                  If you encounter any issues with your order, such as missing items or incorrect products, please
                  contact our customer service team through the "Contact Us" page.
                </p>
              </div>
            )}
          </div>

          <div className="collapsible">
            <label className="collapsible-label" onClick={() => toggleSection(3)}>Payment and Billing</label>
            {openSection === 3 && (
              <div className='collapsible-box'>
                <h3 className="collapsible-head">Payment Methods:</h3>
                <p className="collapsible-text">
                  We accept various payment methods, including credit/debit cards, PayPal, and others. Choose the most
                  convenient method during checkout.
                </p>

                <h3 className="collapsible-head">Billing Issues:</h3>
                <p className="collapsible-text">
                  If you notice any discrepancies on your billing statement, please reach out to our billing support
                  through the "Contact Us" page for assistance.
                </p>
              </div>
            )}
          </div>

          <div className="collapsible">
            <label className="collapsible-label" onClick={() => toggleSection(4)}>Shipping and Delivery</label>
            {openSection === 4 && (
              <div className='collapsible-box'>
                <h3 className="collapsible-head">Shipping Options:</h3>
                <p className="collapsible-text">
                  We offer several shipping options depending on your location. Standard, express, and overnight
                  shipping are available. You can select your preferred option at checkout.
                </p>

                <h3 className="collapsible-head">Delivery Times:</h3>
                <p className="collapsible-text">
                  Delivery times vary based on your chosen shipping method and location. Estimated delivery dates will
                  be provided during checkout.
                </p>

                <h3 className="collapsible-head">Missing or Delayed Orders:</h3>
                <p className="collapsible-text">
                  If your order hasn’t arrived within the expected timeframe, check your tracking information first.
                  If you need further assistance, contact our support team.
                </p>
              </div>
            )}
          </div>

          <div className="collapsible">
            <label className="collapsible-label" onClick={() => toggleSection(5)}>Returns and Exchanges</label>
            {openSection === 5 && (
              <div className='collapsible-box'>
                <h3 className="collapsible-head">Return Policy:</h3>
                <p className="collapsible-text">
                  We offer a 30-day return policy for most items. To initiate a return, visit the "My Orders" section
                  in your account, select the order, and click "Return Item."
                </p>

                <h3 className="collapsible-head">Exchange Process:</h3>
                <p className="collapsible-text">
                  To exchange an item, return the original product following our return policy, and place a new order
                  for the desired item.
                </p>

                <h3 className="collapsible-head">Refunds:</h3>
                <p className="collapsible-text">
                  Refunds will be processed within 5-7 business days after we receive the returned item. The refund will
                  be credited to your original payment method.
                </p>
              </div>
            )}
          </div>

          <div className="collapsible">
            <label className="collapsible-label" onClick={() => toggleSection(6)}>Technical Support</label>
            {openSection === 6 && (
              <div className='collapsible-box'>
                <h3 className="collapsible-head">Website Issues:</h3>
                <p className="collapsible-text">
                  If you experience any technical difficulties while browsing our site, try clearing your browser cache
                  or switching to a different browser. If the issue persists, contact our technical support team.
                </p>

                <h3 className="collapsible-head">Mobile App Support:</h3>
                <p className="collapsible-text">
                  For issues with our mobile app, please check for any available updates. If problems continue, you
                  can reach out to our app support team through the "Help" section in the app.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Help;
