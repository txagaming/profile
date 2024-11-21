import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTypography } from "mdb-react-ui-kit";

function Termsandcondi() {
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
                            Terms and Conditions
                        </MDBTypography>
                        <MDBTypography tag="p" className="text-muted mb-3 text-center">
                            <strong>Last Updated: Nov 21, 2024</strong>
                        </MDBTypography>

                        <MDBRow className="g-4">
                            {/* Left Column with Content */}
                            <MDBCol md="6">
                                <MDBTypography tag="p" className="text-muted">
                                    <strong>For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean MOHAMMED AJMAL KHAN M, whose registered/operational office is VELLAYANI JN, NEMOM, TRIVANDRUM, Thiruvananthapuram, KERALA 695020. "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.</strong>
                                </MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    Your use of the website and/or purchase from us are governed by the following Terms and Conditions:
                                </MDBTypography>

                                <MDBTypography tag="p" className="text-muted">
                                    <strong>The content of the pages of this website is subject to change without notice.</strong>
                                </MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                                </MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through our website and/or product pages meet your specific requirements.
                                </MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                                </MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    All trademarks reproduced on our website which are not the property of, or licensed to, the operator are acknowledged on the website.
                                </MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
                                </MDBTypography>
                            </MDBCol>

                            {/* Right Column with Content */}
                            <MDBCol md="6">
                                <MDBTypography tag="p" className="text-muted">
                                    From time to time, our website may also include links to other websites. These links are provided for your convenience to provide further information.
                                </MDBTypography>
                                <MDBTypography tag="p" className="text-muted">
                                    You may not create a link to our website from another website or document without MOHAMMED AJMAL KHAN M’s prior written consent.
                                </MDBTypography>

                                <MDBTypography tag="p" className="text-muted">
                                    Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.
                                </MDBTypography>

                                <MDBTypography tag="p" className="text-muted">
                                    We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default Termsandcondi;
