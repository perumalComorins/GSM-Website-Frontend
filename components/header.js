import { userService } from '../services/user.service';
import {  useEffect, useState } from 'react';
import { Link } from "./Link";
//import useSWR from 'swr'
const Header = (props) => {

    const type='top-panel.php';
    const [section_1, setSection_1] = useState([]);

    useEffect( async() => {
        
        userService.getAllItems(type).then((res) => {    
            setSection_1(res[0].json_data);
        }) 
         .catch((err) => console.error(err));         
    }, []);

    useEffect(()=>{
        if(section_1 && section_1.length > 0){
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
                
                
            });
        }
    },[section_1]) 

    return (

        <div className="container site-header-container reset-padding">
            <nav className="site-navigation navbar navbar-expand-lg navbar-light">
                <Link href="/" className="navbar-brand" ><img src="/assets/images/site-logo-white.png" className="site-logo"/></Link>
                <div className="searchBar-mb d-block d-lg-none">  
                    <a href="#" className="search-form-trigger" data-toggle="search-form">
                        <i className="fa fa-search" aria-hidden="true" data-toggle="search-form"></i>
                    </a>
                    <div className="togglesearch">
                        <div className="togglesearch-wrapper mx-auto">
                            <input type="text" placeholder="What do you want" />
                            <button type="button" className="btn btn-search-gsm gsm-bg-individual border-0 rounded-1">
                                <img src="/assets/images/icon-feather-search.png" style={{width: '16px',height:'16px'}} />
                            </button>
                            <span className="input-group-addon search-close gsm-bg-white" id="basic-addon2"><i className="fa fa-window-close" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="main-nav collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {section_1 && section_1.map((module, increment) => 
                            <li className="nav-item dropdown" key = {increment}>
                                <Link href="/individual" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-hover="dropdown" aria-expanded="false">
                                    {module.top_title}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {module.sub_menu && module.sub_menu.map((each_module, index) => 
                                        <li key = {index}>
                                            <a href="#" className="drop-link">{each_module.menu_name}</a>
                                                <ul className="drop-desc">
                                                    {each_module.inner_sub && each_module.inner_sub.map((each_module_inner, i) => 
                                                        <li key = {i} className = "list-unstyled">
                                                            {each_module_inner.inner_sub_name}
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
    );
}
export default Header;