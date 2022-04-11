import { userService } from '../services/user.service';
import {  useEffect, useState } from 'react';
import { Link } from "./Link";

const Sidepanel = (props) => {
    const type='sidepanel.php';
    const [sidepanel, setSidepanel] = useState([]);

    useEffect( async() => {
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

        userService.getAllItems(type).then((res) => {    
            setSidepanel(res[0].json_data);
        }) 
         .catch((err) => console.error(err));         
    }, []);

    useEffect(()=>{
        if(sidepanel && sidepanel.length > 0){
            $(".sidenav-Menu .drop").hover(
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
                            <img src="/assets/images/site-logo-color.png" style={{width: '180px'}}/>
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