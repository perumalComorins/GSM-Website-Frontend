import { userService } from '../services/user.service';
import {  useEffect, useState } from 'react';
import { Link } from "./Link";
//import useSWR from 'swr'
const Header = (props) => {

    const type='top-panel.php';
    const [section_1, setSection_1] = useState([]);
    const [section_2, setSection_2] = useState([]);
    const [section_3, setSection_3] = useState([]);


    const [submenu_2, setSubmenu_2] = useState([]);
    const [submenu_3, setSubmenu_3] = useState([]);


    useEffect( async() => {
        
        userService.getAllItems(type).then((res) => {
            
            setSection_1(res[0].json_data[0]);
            setSection_2(res[0].json_data[1]);
            setSection_3(res[0].json_data[2]);


            console.log(res[0].json_data[0])
            console.log(res[0].json_data[0].sub_menu)

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
                                {section_1.sub_menu !== undefined && section_1.sub_menu.map((each, index) => 
                                <li key = {index}>
                                    <a href="#" className="drop-link">{each.menu_name}</a>
                                        <ul className="drop-desc">
                                        {each.inner_sub.map((one, i) => 
                                            <li key = {i} className = "list-unstyled">
                                                {one.inner_sub_name}
                                            </li>
                                        )}
                                        </ul> 
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
                                {section_2.sub_menu !== undefined && section_2.sub_menu.map((each, index) => 
                                    <li key = {index}>
                                        <a href="#" className="drop-link">{each.menu_name}</a>
                                            <ul className="drop-desc">
                                            {each.inner_sub.map((one, i) => 
                                                <li key = {i} className = "list-unstyled">
                                                    {one.inner_sub_name}
                                                </li>
                                            )}
                                            </ul> 
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
                                {section_3.sub_menu !== undefined && section_3.sub_menu.map((each, index) => 
                                    <li key = {index}>
                                        <a href="#" className="drop-link">{each.menu_name}</a>
                                             <ul className="drop-desc">
                                                { index == 0 &&  <hr className="drop-option-seperator" /> }
                                                {each.inner_sub !== undefined && each.inner_sub.map((one, i) => 
                                                    <li key = {i} className = "list-unstyled">
                                                        {one.inner_sub_name}
                                                    </li>
                                                )}
                                            </ul> 
                                            {index !== 0 && <img src="/assets/images/careers-circle-pic-2.png" className="drop-desc-img" />}
                                    </li> 
                                )}
{/*                                 <img src="/assets/images/careers-circle-pic-2.png" className="drop-desc-img" />
 */}                                


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