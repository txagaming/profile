import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";  // Importing Bootstrap modal and button
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = (props) => {
  const [showModal, setShowModal] = useState(false);  // State to manage modal visibility for Terms and Conditions
  const [showPolicyModal, setShowPolicyModal] = useState(false);  // State to manage modal visibility for Terms and Policy
  const [showRefundModal, setShowRefundModal] = useState(false);

  // Function to show the Terms and Conditions modal
  const handleShow = () => setShowModal(true);

  // Function to hide the Terms and Conditions modal
  const handleClose = () => setShowModal(false);

  // Function to show the Terms and Policy modal
  const handleShowPolicy = () => setShowPolicyModal(true);

  // Function to hide the Terms and Policy modal
  const handleClosePolicy = () => setShowPolicyModal(false);


  const handleShowRefund = () => setShowRefundModal(true);

  // Function to hide the Cancellation and Refund Policy modal
  const handleCloseRefund = () => setShowRefundModal(false);

  return (
    <div id="about" className="about-section">
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div className="col-xs-12 col-md-6 text-center">
            <div className="about-text">
              <div className="contact-details">
                <h3>Contact Us</h3>
                <p><strong>TXA Gaming</strong></p>
                <p>Vellayani, Trivandrum, Kerala, India</p>
                <p>PIN: 695020</p>
                <p>Phone: +918089149712</p>
              </div>
              {/* Button to trigger Terms and Conditions modal */}
              <Button variant="primary" onClick={handleShow} style={{ marginLeft: "10px" }} className="btn-lg" > 
                Terms and Conditions
              </Button>
              {/* Button to trigger Terms and Policy modal */}
              <Button variant="primary" onClick={handleShowPolicy} style={{ marginLeft: "10px" }} className="btn-lg">
                Terms and Policy
              </Button>
              <Button variant="primary" onClick={handleShowRefund} style={{ marginLeft: "10px" }} className="btn-lg" >
                Cancellation and Refund Policy
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Terms and Conditions */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header style={{ backgroundColor: '#343a40', color: 'white' }} closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
          <p>
            For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean MOHAMMED AJMAL KHAN M, whose
            registered/operational office is VELLAYANI JN, NEMOM, TRIVANDRUM
            Thiruvananthapuram KERALA 695020. "you", “your”, "user", “visitor”
            shall mean any natural or legal person who is visiting our website
            and/or agreed to purchase from us.
          </p>
          <p>
            Your use of the website and/or purchase from us are governed by
            following Terms and Conditions:
          </p>
          <p>
            The content of the pages of this website is subject to change without
            notice.
          </p>
          <p>
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on this
            website for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law.
          </p>
          <p>
            Your use of any information or materials on our website and/or
            product pages is entirely at your own risk, for which we shall not be
            liable. It shall be your own responsibility to ensure that any
            products, services or information available through our website and/or
            product pages meet your specific requirements.
          </p>
          <p>
            Our website contains material which is owned by or licensed to us.
            This material includes, but are not limited to, the design, layout,
            look, appearance and graphics. Reproduction is prohibited other than
            in accordance with the copyright notice, which forms part of these
            terms and conditions.
          </p>
          <p>
            All trademarks reproduced in our website which are not the property of,
            or licensed to, the operator are acknowledged on the website.
          </p>
          <p>
            Unauthorized use of information provided by us shall give rise to a
            claim for damages and/or be a criminal offense.
          </p>
          <p>
            From time to time our website may also include links to other
            websites. These links are provided for your convenience to provide
            further information.
          </p>
          <p>
            You may not create a link to our website from another website or
            document without MOHAMMED AJMAL KHAN M’s prior written consent.
          </p>
          <p>
            Any dispute arising out of use of our website and/or purchase with us
            and/or any engagement with us is subject to the laws of India.
          </p>
          <p>
            We, shall be under no liability whatsoever in respect of any loss or
            damage arising directly or indirectly out of the decline of
            authorization for any Transaction, on Account of the Cardholder
            having exceeded the preset limit mutually agreed by us with our
            acquiring bank from time to time.
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#343a40', color: 'white' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Terms and Policy */}
      <Modal show={showPolicyModal} onHide={handleClosePolicy} size="lg" centered>
  <Modal.Header style={{ backgroundColor: '#343a40', color: 'white' }} closeButton>
    <Modal.Title>Terms and Conditions</Modal.Title>
  </Modal.Header>
  <Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
    <p><strong>Last Updated: Nov 21, 2024</strong></p>
    
    <h5>1. Donation Terms</h5>
    <p><strong>1.1 Donations</strong><br />
    By submitting a donation through this website, you acknowledge that you are doing so voluntarily and in compliance with these terms. All donations are processed through a secure payment gateway and are non-refundable unless explicitly stated by the streamer.</p>
    
    <p><strong>1.2 Purpose of Donations</strong><br />
    Donations made through this website are intended to support the content creation and activities of the streamer. Donations are not to be exchanged for specific services, content, or actions, unless expressly agreed upon by the streamer.</p>
    
    <p><strong>1.3 Processing Fees</strong><br />
    Donations are subject to processing fees, which may vary depending on the payment method used. The total donation amount shown is the amount you will contribute, and processing fees will be deducted before the streamer receives the funds.</p>
    
    <p><strong>1.4 Non-Refundability</strong><br />
    Donations are final and non-refundable. You agree that, under no circumstances, will donations be refunded, including in cases where the streamer ceases streaming or content creation.</p>
    
    <p><strong>1.5 Chargebacks and Disputes</strong><br />
    Any chargebacks or disputes related to donations will result in a permanent ban from the website. The streamer reserves the right to pursue legal action where necessary.</p>

    <h5>2. Content Ownership and Usage</h5>
    <p><strong>2.1 Ownership of Content</strong><br />
    All content available on this website, including but not limited to videos, images, logos, and text, is owned by the streamer or licensed to them. Unauthorized copying, distribution, or reproduction of any content is prohibited unless written permission is granted by the streamer.</p>
    
    <p><strong>2.2 Prohibited Conduct</strong><br />
    You agree not to engage in any activity that could be considered unlawful, harmful, or fraudulent. This includes, but is not limited to, the following:
    <ul>
      <li>Harassment, abuse, or bullying of others</li>
      <li>Uploading malicious software or viruses</li>
      <li>Infringing upon intellectual property rights</li>
    </ul></p>
    
    <p><strong>2.3 User Conduct</strong><br />
    We expect all users to engage respectfully with the streamer and fellow viewers. Any form of harassment, discrimination, hate speech, or inappropriate conduct may result in suspension or permanent ban from the site.</p>

    <h5>3. Privacy Policy</h5>
    <p><strong>3.1 Information Collection</strong><br />
    We collect personal information such as your name, email address, and payment details when you interact with this website. All personal data will be processed in accordance with our Privacy Policy.</p>

    <p><strong>3.2 Third-Party Payment Processors</strong><br />
    Payments for donations are processed through third-party services. Please review the privacy policies of these third-party payment providers before making a donation to ensure you are comfortable with their terms.</p>

    <h5>4. Disclaimer of Liability</h5>
    <p><strong>4.1 Use at Your Own Risk</strong><br />
    By accessing and using this website, you do so at your own risk. We make no warranties regarding the availability, functionality, or content of the website and are not responsible for any errors, interruptions, or damages that may arise.</p>

    <p><strong>4.2 Limitation of Liability</strong><br />
    In no event shall the streamer, or any affiliates, be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website, including but not limited to donations made through the site.</p>

    <h5>5. Modifications to the Terms</h5>
    <p>The streamer reserves the right to modify or update these Terms and Conditions at any time. You will be notified of any significant changes, and the updated Terms will be posted on this page with the revised date. By continuing to use the website after any changes, you agree to the new Terms and Conditions.</p>

    <h5>6. Governing Law</h5>
    <p>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/Region]. Any disputes arising in connection with these Terms will be subject to the exclusive jurisdiction of the courts in [Location].</p>

    <h5>7. Contact Information</h5>
    <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:  
    <strong>Email:</strong> <a href="mailto:collabwithtxa@gmail.com">collabwithtxa@gmail.com</a></p>
  </Modal.Body>
  <Modal.Footer style={{ backgroundColor: '#343a40', color: 'white' }}>
    <Button variant="secondary" onClick={handleClosePolicy}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
{/* Modal for Cancellation and Refund Policy */}
<Modal show={showRefundModal} onHide={handleCloseRefund} size="lg" centered>
        <Modal.Header style={{ backgroundColor: '#343a40', color: 'white' }} closeButton>
          <Modal.Title>Cancellation and Refund Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
          <p><strong>Last Updated: Nov 21, 2024</strong></p>

          <h5>1. General Policy</h5>
          <p><strong>1.1 Non-Refundable Donations</strong><br />
            All donations made through this website are final and non-refundable. By donating, you acknowledge that you are doing so voluntarily and without the expectation of receiving any specific service or goods in return.</p>

          <p><strong>1.2 No Cancellations or Modifications</strong><br />
            Once a donation has been made, it cannot be canceled, modified, or refunded. We do not entertain any requests for cancellation, modification, or refunds for donations under any circumstances.</p>

          <h5>2. Exceptions</h5>
          <p><strong>2.1 Error or Duplicate Transactions</strong><br />
            In the event of a system error or a duplicate transaction, we may, at our discretion, review and consider processing a refund. Such refunds will only be issued if we confirm that a technical issue occurred or if a transaction was unintentionally duplicated.</p>

          <p><strong>2.2 Refund Requests for Unfulfilled Promises</strong><br />
            If the streamer fails to fulfill promises directly tied to a donation, such as specific content or services promised by the streamer, a refund request may be considered. However, this is at the sole discretion of the streamer and must be supported by valid reasons.</p>

          <h5>3. Chargebacks and Disputes</h5>
          <p><strong>3.1 Chargebacks</strong><br />
            If you initiate a chargeback or dispute a transaction, you may be permanently banned from the website. Chargebacks undermine our ability to offer services, and as such, we do not accept them under any circumstances.</p>

          <p><strong>3.2 Disputes</strong><br />
            In the event of any dispute regarding a donation, you must first contact us at the email address provided below. We will work with you to resolve the issue amicably, but any dispute not resolved in a timely manner may result in the permanent suspension of your access to the website.</p>

          <h5>4. Refund Process</h5>
          <p><strong>4.1 Review Process</strong><br />
            All refund requests will be reviewed by our team. Refunds are only issued under the exceptions mentioned above.</p>

          <p><strong>4.2 Timing</strong><br />
            If a refund is issued, it may take several business days to reflect in your account depending on the payment provider.</p>

          <h5>5. Contact Information</h5>
          <p>If you have any questions or concerns regarding this Cancellation and Refund Policy, please contact us at:  
          <strong>Email:</strong> <a href="mailto:collabwithtxa@gmail.com">collabwithtxa@gmail.com</a></p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#343a40', color: 'white' }}>
          <Button variant="secondary" onClick={handleCloseRefund}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};
