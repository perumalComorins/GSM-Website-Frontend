import { useContext, useEffect, useState } from 'react';
import { Link } from "./Link";
const Sidepanel = (props) => {
    const [datas, setDatas] = useState(null);
    useEffect(()=>{
        setDatas([1,2,3])
        
    },[])
    useEffect(()=>{
        if(datas && datas.length>0){
            $(document).ready(function () {
                var trigger = $('.hamburger'),
                    overlay = $('.overlay'),
                    isClosed = false;
              
                    trigger.click(function () {
                        hamburger_cross();      
                    });
                
                    function hamburger_cross() {
                
                        if (isClosed == true) {          
                        //overlay.hide();
                        trigger.removeClass('is-open');
                        trigger.addClass('is-closed');
                        isClosed = false;
                        } else {   
                        //overlay.show();
                        trigger.removeClass('is-closed');
                        trigger.addClass('is-open');
                        isClosed = true;
                        }
                }
                
                $('[data-toggle="offcanvas"]').click(function () {
                      $('#wrapper').toggleClass('toggled');
                });
            });
        }
    },[datas]) 


    return (
        <>
            <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                <div className="sidebar-wrapper-container">
                    <button type="button" className="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                            <span className="hamb-top"></span>
                            <span className="hamb-bottom"></span>
                    </button>
                    <div className="row reset-margin">
                        <div className="navbarTitle-col reset-padding">
                        <h1 className="pannel-title">Together, let's be the future</h1>
                        </div>
                        <div className="navbarMenu-col reset-padding">
                            <img src="/assets/images/site-logo-color.png" style={{width: '180px'}}/>
                            <nav className="sidenav-Menu">
                            <ul>
                                <li><Link href="/">Accueil</Link></li>
                                <li><Link href="/who-we-are">Qui sommes-nous ?</Link></li>
                                <li><Link href="/blog"> Blog</Link></li>
                                <li className="btn-group dropright">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    Certification <i className="fa fa-angle-right right-arrow"></i>
                                </a>
                                <ul className="dropdown-menu" >
                                    <li><a href="#">Certification niveau 4</a></li>
                                    <li><a href="#">Certification niveau 3</a></li>
                                    <li><Link href="/quality-indicators">Indicateurs de qualité</Link></li>
                                </ul>
                                </li>
                                <li><Link href="/quote-request">Demande de devis</Link></li>
                                <li><Link href="/job">GSM Recrute</Link></li>
                                <li><Link href="/contact-faq">Contact & FAQ</Link></li>
                            </ul>
                            </nav>

                            <div className="course_Section mt-5 d-none d-lg-block">
                                <a href="#" className="applyTag individualColor"><img src="/assets/images/cornershadow.png" />Individual</a>
                                <a href="#" className="applyTag companyColor"><img src="/assets/images/companyshadow.png" />Company</a>
                                <a href="#" className="applyTag organisationColor"><img src="/assets/images/organizationshadow.png" />Organization</a>
                            </div>

                            <div className="sidepanelCopyright">
                            <span>&copy; 2020 GSM Master. All rights reserved</span>
                            </div>
                            <div className="sidepanelSocialicons">
                                <a href="#"><img src="/assets/images/linkedin-in.png" className="icon" /></a>
                                <a href="#"><img src="/assets/images/facebook-square.png" className="icon" /></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Sidepanel;