import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Sitemap(){


    const type='sitemap.php'
    const [sitemap, setSiteMap]=useState([]);
    const [sitemapBanner, setSiteMapBanner] = useState(null);
    const [loading,setLoading] = useState(true);



    useEffect( async() => {
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("inner-page");

        userService.getAllItems(type).then((res) => {
            setSiteMap(res.json_data.sitemap);
            setSiteMapBanner(res.json_data.sitemapimage);
            setLoading(false);
        }) 

    }, []);
  
    return(
        <div id="wrapper">
            <div className="overlay"></div>
            <Sidepanel />

            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <Header/>
                <div className="site-bannersection">
                    <div className="sitemap-banner" style={{backgroundImage: "url('/assets/images/sitemap-banner.png')",}}>
                            <div className="container container-75 reset-padding sitemap-container">
                                <h1>Site Map</h1>
                            </div>
                    </div>
                </div>

                <section className="site-body-container">
                    <div className="container container-75 reset-padding sitemap-container">
                        <div className="sitemap-row row">
                            <div className="col-md-8 reset-padding align-self-center">
                                <div class="sitebar-row">
                                    <ul class="parent-list reset-padding">
                                        {sitemap && sitemap.map((items, index) => 
                                        <li class="sitebar-box">
                                            <h2>{items.title}</h2>
                                            <ul>
                                                {items.menu && items.menu.map((each_item, i) => 
                                                <li><a href={each_item.link}>{each_item.list}</a></li>)}
                                            </ul>
                                        </li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 reset-padding">
                                <img src={sitemapBanner} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="site-footer">
                   <Footer />
                </footer>
            </div>
            
        </div>
        
        
    )
} 
