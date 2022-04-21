import { userService } from '../services/user.service';
import {  useEffect, useState } from 'react';
import { Link } from "./Link";

const Footer = (props) => {
    const type='footer.php';
    const [footerpanel, setFooterpanel] = useState([]);

    useEffect( async() => {
        
        userService.getAllItems(type).then((res) => {    
            setFooterpanel(res[0].json_data);
        }) 
         .catch((err) => console.error(err));         
    }, []);

    return(
        <div className="container footercontainer container-70 reset-padding">
            <div className="footer-quotes d-none d-md-block">
                <h2>{footerpanel.footer}</h2>
            </div>
            <div className="row reset-margin">
            {footerpanel.footer_items  && footerpanel.footer_items.map((items, index) => 
                <div className="col-sm-12 col-md-4 footer-widget reset-padding">
                    {items.desc &&
                        <div className="row reset-margin">
                            <div className="footerpanelSocialicons d-none d-md-block">
                                <a href="#" className="footer-socialicon-link"><img src={items.footer_social_media && items.footer_social_media.linked_link} className="icon" /></a>
                                <a href="#" className="footer-socialicon-link"><img src={items.footer_social_media && items.footer_social_media.facebook_link} className="icon" /></a>
                            </div>
                        
                            <div className="footerpanelAboutContent">                         
                                <h2 className="footer-widget-title">{items.footer_item_title}</h2>
                                <p className="about-description">{items.desc}</p>
                                <span className="footerpanelCopyright">{items.copyright}</span>
                            </div>            
                        </div> 
                    } 
                    {items.footer_sub_item &&
                        <div>
                            <h2 className="footer-widget-title">{items.footer_item_title}</h2>
                            <ul className="footer-menu">
                                {items.footer_sub_item.map((each, i) => 
                                    <li key = {i} ><Link href={each.link}>{each.title}</Link></li>
                                )}
                            </ul>
                        </div>
                    } 
                    {items.button_name &&
                        <div>
                            <h2 className="footer-widget-title">{items.footer_item_title}</h2>
                            <form name="newsletter-form" className="newsletter">
                                <div className="form-group">
                                    <input type="email" className="form-control border-0 newsletter-email" id="" aria-describedby="emailHelp" placeholder={items.input_place_holder} />
                                </div>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-sm">{items.button_name}</button>
                                <span className="footerpanelSocialicons d-block d-md-none pull-right">
                                    <a href="#" className="footer-socialicon-link"><img src="/assets/images/awesome-facebook-square-mobile.png" className="icon" /></a>
                                    <a href="#" className="footer-socialicon-link"><img src="/assets/images/linkedin-in-footer-mobile.png" className="icon" /></a>                            
                                </span>
                            </form>
                        </div> 
                    } 
                </div> 
            )}
                                                                                         
        </div>
    </div>)
}
export default Footer;