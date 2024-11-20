import React, { useEffect } from "react";

export const Header = (props) => {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");
    
    if (!rzpPaymentForm.hasChildNodes()) {

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_PNYbFFjRCWzWGF";
      rzpPaymentForm.appendChild(script);

    }

  });
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <form id="rzp_payment_form"></form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
