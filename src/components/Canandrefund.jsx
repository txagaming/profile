import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTypography } from "mdb-react-ui-kit";

function Canandrefund() {
    const containerStyle = {
        minHeight: "100vh",
        backgroundImage: 'url("https://media.discordapp.net/attachments/881450895466983445/1308865993887715380/Grand_Theft_Auto_V_11_20_2024_10_00_14_PM.png?ex=674028b2&is=673ed732&hm=9cd6988edd12b797356e8c0dc00959ec8b8c8ab453535cd8bd62908061afef54&=&format=webp&quality=lossless&width=1189&height=668")', // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "10px", // Left padding
        paddingRight: "10px", // Right padding
    };

    const cardStyle = {
        background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
        borderRadius: "10px",
        maxWidth: "900px",
        width: "100%", // Full width but restricted by maxWidth
        margin: "0 auto",
        padding: "20px", // Add padding inside the card
    };

    return (
        <div style={containerStyle}>
            <MDBContainer>
                <MDBCard className="shadow" style={cardStyle}>
                    <MDBCardBody>
                        <MDBTypography tag="h1" className="text-center mb-4">
                            Cancellation and Refund Policy
                        </MDBTypography>
                        <MDBTypography tag="p" className="text-muted mb-3 text-center">
                            <strong>Last Updated: Nov 21, 2024</strong>
                        </MDBTypography>

                        <MDBRow className="g-4">
                            {/* Left Column with Content */}
                            <MDBCol md="6">
                                <MDBTypography tag="h5" className="mb-3">1. General Policy</MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    <strong> No Cancellations or Refunds</strong><br />
                                    All donations and transactions are final. We do not entertain any cancellation or refund requests under any circumstances.
                                </MDBTypography>
                            </MDBCol>

                            {/* Right Column with Content */}
                            <MDBCol md="6">
                                

                                <MDBTypography tag="h5" className="mb-3">2. Contact Information</MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    If you have any questions or concerns regarding this Cancellation and Refund Policy, please contact us at:  
                                    <strong>Email:</strong> <a href="mailto:collabwithtxa@gmail.com">collabwithtxa@gmail.com</a>
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default Canandrefund;
