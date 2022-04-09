import { userService } from '../services/user.service';
import {  useEffect, useState } from 'react';
import { Link } from "./Link";
//import useSWR from 'swr'
const Header = (props) => {

    const type='top-panel.php';
    const [section_1, setSection_1] = useState([]);
    const [submenu_1, setSubmenu_1] = useState([]);
    const [section_2, setSection_2] = useState([]);
    const [submenu_2, setSubmenu_2] = useState([]);
    const [section_3, setSection_3] = useState([]);
    const [submenu_3, setSubmenu_3] = useState([]);
    const [submenu_4, setSubmenu_4] = useState([]);

    useEffect( async() => {
        
        userService.getAllItems(type).then((res) => {

          setSection_1(res[0].json_data.section_1[0]);
          setSubmenu_1(res[0].json_data.section_1[1].sub_menu);
          setSection_2(res[0].json_data.section_2[0]);
          setSubmenu_2(res[0].json_data.section_2[1].sub_menu);
          setSection_3(res[0].json_data.section_3[0]);
          setSubmenu_3(res[0].json_data.section_3[1].sub_menu[0]);
          setSubmenu_4(res[0].json_data.section_3[1].sub_menu[1]);

        }) 
         .catch((err) => console.error(err));         
    }, []);

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
                        <li className="nav-item dropdown">
                            <Link href="/individual" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                  {section_1.top_title}
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {submenu_1.map((each, index) =>
                                <li key={index}>
                                    <a href="#" className="drop-link">{each.menu_name}</a>
                                    <p className="drop-desc">{each.menu_desc}</p>
                                    <hr className="drop-option-seperator" />
                                </li>
                            )}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="/company" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    {section_2.top_title}
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {submenu_2.map((each, index) =>
                                <li key = {index}>
                                    <a href="#" className="drop-link">{each.menu_name}</a>
                                    <p className="drop-desc">{each.menu_desc}</p>
                                    <hr className="drop-option-seperator" />
                                </li>
                            )}     
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="/organization" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    {section_3.top_title}
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li >
                                    <a href="#" className="drop-link">{submenu_3.menu_name}</a>
                                    <hr className="drop-option-seperator" />
                                </li>
                                <li>
                                    <a href="#" className="drop-link">{submenu_4.menu_name}</a>
                                    <ul className="drop-desc-list">
                                        <li>{submenu_4.menu_desc_1}</li>
                                        <li>{submenu_4.menu_desc_2}</li>
                                    </ul>
                                </li>
                                <img src="/assets/images/careers-circle-pic-2.png" className="drop-desc-img" />
                
                            </ul>
                        </li>
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