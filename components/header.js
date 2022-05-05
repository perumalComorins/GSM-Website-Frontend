import { userService } from '../services/user.service';
import {  useEffect, useState } from 'react';
import { Link } from "./Link";
//import useSWR from 'swr'
const Header = (props) => {

    const type='top-panel.php';
    const [toppanel, setToppanel] = useState([]);

    useEffect( async() => {
        
        userService.getAllItems(type).then((res) => {    
            setToppanel(res[0].json_data);
        }) 
         .catch((err) => console.error(err));         
    }, []);

    useEffect(()=>{
        if(toppanel && toppanel.length > 0){
            var isClosed = false;
            $(document).ready(function(){
                $(".site-navigation .dropdown").hover(
                    function () {
                        $(this).addClass("show");
                        $(this).find(".dropdown-menu").addClass("show");
                    },
                    function () {
                        $(this).removeClass("show");
                        $(this).find(".dropdown-menu").removeClass("show");
                    }
                );
                
                $(".searchBar-mb [data-toggle=search-form]").click(function(event) {
                    event.preventDefault();
                    $(".togglesearch").addClass("open");
                    $("input[type='text']").focus();
                });
                $(".search-close").click(function() {
                    $(".togglesearch").removeClass("open");
                    
                });
                

                var trigger = $('.hamburger'),
                    bodyTrigger = $('.humburger-body-open'),
                    overlay = $('.overlay'),
                    body = $('body,#page-content-wrapper');
                    
                    trigger.click(function () {
                        hamburger_cross();
                    });
                    
                    function hamburger_cross() {
                        
                        if (isClosed == true) {          
                            trigger.removeClass('is-open');
                            $('#wrapper').removeClass('toggled');
                            trigger.addClass('is-closed');
                            body.removeClass('humburger-body-open')
                            isClosed = false;
                        } 
                        else {   
                            trigger.removeClass('is-closed');
                            trigger.addClass('is-open');
                            $('#wrapper').addClass('toggled');
                            body.addClass('humburger-body-open');
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
        }
    },[toppanel]) 

    return (
        <header class="site-header site-navbar site-navbar-target">
                <div className="container site-header-container reset-padding">
                    <nav className="site-navigation navbar navbar-expand-lg navbar-light">
                        <Link href="/" className="navbar-brand" ><img src="/assets/images/site-logo-white.png" className="site-logo"/></Link>
                        <div className="searchBar-mb d-block d-lg-none">  
                            {/* <a href="#" className="search-form-trigger" data-toggle="search-form" >
                                <i className="fa fa-search" aria-hidden="true" ></i>
                            </a> */}
                            <a className="search-form-trigger collapsed" data-toggle="collapse"  href="#collapseSearchbox" role="button" aria-expanded="false" aria-controls="collapseExample"  >
                                <i className="fa" aria-hidden="true" ></i>
                            </a>
                            
                        </div>
                        <div className="main-nav collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                {toppanel && toppanel.map((module, increment) => 
                                    <li className="nav-item dropdown" key = {increment}>
                                        <Link href={module.link} className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-hover="dropdown" aria-expanded="false">
                                            {module.top_title}
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            {module.sub_menu && module.sub_menu.map((each_module, index) => 
                                                <li key = {index}>
                                                    <a href="#" className="drop-link">{each_module.menu_name}</a>
                                                        <ul className="drop-desc-list">
                                                            {each_module.inner_sub && each_module.inner_sub.map((each_module_inner, i) => 
                                                                <li key = {i} >
                                                                    <Link href="#">{each_module_inner.inner_sub_name}</Link>
                                                                </li>
                                                            )}
                                                        </ul> 
                                                        {index !== module.sub_menu.length - 1 && <hr className="drop-option-seperator" />}
                                                </li> 
                                            )} 
                                            {module.photo_link && <img src="/assets/images/careers-circle-pic-2.png" className="drop-desc-img" />}
                                        </ul>
                                    </li>
                                )}
                            </ul>
                            <form name="searchForm" className="search-form form-inline my-2 my-lg-0">
                                <input name="search-for" className="search-for form-control mr-sm-0 rounded-0 border-right-0 gsm-border-individual" type="search" placeholder="What do you want to learn" aria-label="Search" />
                                <button className="btn btn-search-gsm gsm-bg-individual border-0 rounded-0 my-sm-0" type="subuttonbmit"><img src="/assets/images/icon-feather-search.png" style={{width: '16px',height:'16px'}} /></button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div id="collapseSearchbox" className="collapse">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 offset-lg-2">
                                <div className="site-search-form">
                                    <form action="/search" className="mb-0">
                                        <div className="input-group flex-nowrap">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text collapseSearch-icon">
                                                    <i className="fa" aria-hidden="true" ></i>
                                                </span>
                                            </div>
                                            <input type="search" className="form-control site-search-text" placeholder="What do you want to learn" aria-label="Username" aria-describedby="addon-wrapping" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
        
    );
}
export default Header;