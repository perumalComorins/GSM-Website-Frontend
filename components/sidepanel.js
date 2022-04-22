import { userService } from '../services/user.service';
import {  useEffect, useState } from 'react';
import { Link } from "./Link";

const Sidepanel = (props) => {
    const type='sidepanel.php';
    const [sidepanel, setSidepanel] = useState([]);

    useEffect( async() => {
        var isClosed = false;
        $(document).ready(function(){
            var trigger = $('.hamburger'),
                bodyTrigger = $('.humburger-body-open'),
                overlay = $('.overlay'),
                body = $('body,#page-content-wrapper');
          
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

                $(document).mouseup(function(e) {
            
                    var container = $("#sidebar-wrapper");
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        
                        if ( $('body').hasClass('humburger-body-open') ) {
                                    $('body').removeClass('humburger-body-open');
                                    $('#wrapper').removeClass('toggled');
                                    $('.hamburger').removeClass('is-open');
                                    $('.hamburger').addClass('is-closed');
                                    isClosed = false;
                        }
                    }
        
                    
                });
        });

        userService.getAllItems(type).then((res) => {    
            setSidepanel(res[0].json_data);
        }) 
         .catch((err) => console.error(err));         
    }, []);

    useEffect(()=>{
        if(sidepanel && sidepanel.length > 0){
            $(".sidenav-Menu .dropright").hover(
                function () {
                    $(this).addClass("show");
                    $(this).find(".dropdown-menu").addClass("show");
                },
                function () {
                    $(this).removeClass("show");
                    $(this).find(".dropdown-menu").removeClass("show");
                }
            );

            $(".mobiletopNav .dropright").hover(
                function () {
                    $(this).addClass("show");
                    $(this).find(".dropdown-menu").addClass("show");
                },
                function () {
                    $(this).removeClass("show");
                    $(this).find(".dropdown-menu").removeClass("show");
                }
            );
        }
    },[sidepanel]) 

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
                            <img src="/assets/images/site-logo-color.png" style={{width: '180px'}} className="sidepanel-site-logo"/>
                            <nav className="sidenav-Menu">
                            <ul>
                                {sidepanel && sidepanel.map((list, index) => 
                                    <li key ={index}>
                                        
                                        {list.side_drop_down ?
                                            <li className="btn-group dropright">
                                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    {list.heading_text} <i className="fa fa-angle-right right-arrow"></i>
                                                </a>
                                                <ul className="dropdown-menu" >
                                                    {list.side_drop_down && list.side_drop_down.map((drop_down, i)=>
                                                        <li key = {i}><a href={drop_down.link}>{drop_down.drop_name}</a></li>
                                                    )}
                                                </ul>
                                            </li> :
                                            <Link href={list.link}>{list.heading_text}</Link>
                                        }
                                    </li>
                                )}
                            </ul>
                            </nav>

                            <div className="course_Section mt-5 d-none d-lg-block">
                                <a href="#" className="applyTag individualColor"><img src="/assets/images/cornershadow.png" />Individual</a>
                                <a href="#" className="applyTag companyColor"><img src="/assets/images/companyshadow.png" />Company</a>
                                <a href="#" className="applyTag organisationColor"><img src="/assets/images/organizationshadow.png" />Organization</a>
                            </div>
                            
                            <nav class="sidenav-Menu mobiletopNav mt-5 d-block d-lg-none">
                                <ul>
                                    <li class="btn-group dropright">
                                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                            Individual <i class="fa fa-angle-right right-arrow"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                        <li><a href="certificate.php">Certification niveau 4</a></li>
                                        <li><a href="certificate.php">Certification niveau 3</a></li>
                                        <li><a href="qulity_indicators.php">Indicateurs de qualité</a></li>
                                        </ul>
                                    </li>
                                    <li class="btn-group dropright">
                                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                            Company <i class="fa fa-angle-right right-arrow"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                        <li><a href="certificate.php">Certification niveau 4</a></li>
                                        <li><a href="certificate.php">Certification niveau 3</a></li>
                                        <li><a href="qulity_indicators.php">Indicateurs de qualité</a></li>
                                        </ul>
                                    </li>
                                    <li class="btn-group dropright">
                                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                            Organization <i class="fa fa-angle-right right-arrow"></i>
                                        </a>
                                        <ul class="dropdown-menu" >
                                        <li><a href="certificate.php">Certification niveau 4</a></li>
                                        <li><a href="certificate.php">Certification niveau 3</a></li>
                                        <li><a href="qulity_indicators.php">Indicateurs de qualité</a></li>
                                        </ul>
                                    </li>
                                
                                </ul>
                            </nav>
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