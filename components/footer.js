import { useContext, useEffect, useState } from 'react';
import { Link } from "./Link";

const Footer = (props) => {
    return(
        <div className="container footercontainer container-70 reset-padding">
            <div className="footer-quotes d-none d-md-block">
                <h2>Nos formations sont accessibles aux personnes en situation de handicap. 
            Si vous avez des besoins spécifiques, n'hésitez pas à en informer notre référent handicap : Clément Berger de Nomazy sur l'adresse "relation-candidat@gsmmaster.fr"</h2>
            </div>
            <div className="row reset-margin">
                <div className="col-sm-12 col-md-4 footer-widget reset-padding">
                    <div className="row reset-margin">
                        <div className="footerpanelSocialicons d-none d-md-block">
                            <a href="#" className="footer-socialicon-link"><img src="/assets/images/linkedin-in-footer.png" className="icon" /></a>
                            <a href="#" className="footer-socialicon-link"><img src="/assets/images/facebook-square-footer.png" className="icon" /></a>
                        </div>
                        <div className="footerpanelAboutContent">
                            <h2 className="footer-widget-title">GSM Master</h2>
                            <p className="about-description">Present in the mobile telephony market since 1999, GSM Master founded its training center at the end of 2014
                                with the aim of contributing to the standardization of the mobile product repair sector.</p>
                            <span className="footerpanelCopyright">&copy; 2020 GSM Master. All rights reserved</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 footer-widget reset-padding">
                    <h2 className="footer-widget-title">Further Information</h2>
                    <ul className="footer-menu">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Credits</a></li>
                        <li><a href="#">CGU</a></li>
                        <li><a href="#">Information légale</a></li>
                        <li><a href="#">Plan du site</a></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-4 footer-widget reset-padding">
                    <h2 className="footer-widget-title">Subscribe to Newsletter</h2>
                    <form name="newsletter-form" className="newsletter">
                        <div className="form-group">
                            <input type="email" className="form-control border-0 newsletter-email" id="" aria-describedby="emailHelp" placeholder="Enter your email address here" />
                        </div>
                        <button type="button" className="btn gsm-bg-individual btn-gsm-sm">Subscribe</button>
                        <span className="footerpanelSocialicons d-block d-md-none pull-right">
                            <a href="#" className="footer-socialicon-link"><img src="/assets/images/awesome-facebook-square-mobile.png" className="icon" /></a>
                            <a href="#" className="footer-socialicon-link"><img src="/assets/images/linkedin-in-footer-mobile.png" className="icon" /></a>
                            
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Footer;