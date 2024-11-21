import React from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBTypography } from "mdb-react-ui-kit";

function Termsandco() {
    const containerStyle = {
        minHeight: "100vh",
        backgroundImage: 'url("https://media.discordapp.net/attachments/881450895466983445/1308865993887715380/Grand_Theft_Auto_V_11_20_2024_10_00_14_PM.png?ex=674028b2&is=673ed732&hm=9cd6988edd12b797356e8c0dc00959ec8b8c8ab453535cd8bd62908061afef54&=&format=webp&quality=lossless&width=1189&height=668")', // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    
      const cardStyle = {
        background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
        borderRadius: "10px",
        maxWidth: "600px",
        width: "90%", // Responsive width for mobile
        margin: "0 auto",
      };
    
  return (
    <div>
      <div style={containerStyle}>
      <MDBContainer>
        <MDBCard className="shadow" style={cardStyle}>
          <MDBCardBody>
            <MDBTypography tag="h1" className="text-center mb-4">
            Privacy Policy
            </MDBTypography>
            <MDBTypography tag="p" className="text-muted mb-3 text-center">
              Welcome to our Terms and Conditions page. These terms govern your use of our
              website and services. By accessing our site, you agree to comply with these terms.
            </MDBTypography>
            <MDBTypography tag="h5" className="mb-3 text-center">1. General Use</MDBTypography>
            <MDBTypography tag="p" className="text-muted text-center">
              You agree to use the site responsibly and for lawful purposes only. Any unauthorized
              use or attempts to disrupt the site may result in termination of access.
            </MDBTypography>
            <MDBTypography tag="h5" className="mb-3 text-center">2. Intellectual Property</MDBTypography>
            <MDBTypography tag="p" className="text-muted text-center">
              All content on this website, including text, images, and code, is owned by us and
              protected by copyright laws. You may not reproduce or distribute any material
              without prior permission.
            </MDBTypography>
            <MDBTypography tag="h5" className="mb-3 text-center">3. Privacy Policy</MDBTypography>
            <MDBTypography tag="p" className="text-muted text-center">
              Your privacy is important to us. Please refer to our Privacy Policy for detailed
              information about how we handle your data.
            </MDBTypography>
            <MDBTypography tag="h5" className="mb-3 text-center">4. Limitation of Liability</MDBTypography>
            <MDBTypography tag="p" className="text-muted text-center">
              We are not responsible for any damages or losses resulting from the use or
              inability to use our services. Use the site at your own risk.
            </MDBTypography>
            <MDBTypography tag="h5" className="mb-3 text-center">5. Amendments</MDBTypography>
            <MDBTypography tag="p" className="text-muted text-center">
              We reserve the right to update these terms at any time. Please check back
              periodically for updates.
            </MDBTypography>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
    </div>
  )
}

export default Termsandco
