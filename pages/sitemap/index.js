import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Sitemap(){

    
    // const [sitemap, setSiteMap]=useState([]);
    // const [loading,setLoading] = useState(true);


    useEffect( async() => {
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("inner-page");
        
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
                                        <li class="sitebar-box">
                                            <h2>Main Content</h2>
                                            <ul>
                                            <li><a href="index.php">Home</a></li>
                                            <li>The Body</li>
                                            <li><a href="contact-faq.php">Contact &amp; FAQ</a></li>
                                            <li><a href="certificate.php">Certification</a></li>
                                            <li><a href="recritment.php">Career</a></li>
                                            <li><a href="blog.php">Blog</a></li>
                                            </ul>
                                        </li>
                                        <li class="sitebar-box">
                                            <h2>Individual</h2>
                                            <ul>
                                            <li><a href="individual.php">Formations</a></li>
                                            </ul>
                                        </li>
                                        <li class="sitebar-box">
                                            <h2>Company</h2>
                                            <ul>
                                            <li><a href="qualified_staff.php">Team recruitment</a></li>
                                            <li><a href="qualified_staff.php">Upgrade Team</a></li>
                                            </ul>
                                        </li>
                                        <li class="sitebar-box">
                                            <h2>Organization</h2>
                                            <ul>
                                            <li><a href="organisation.php">Registration - Organization</a></li>
                                            </ul>
                                        </li>
                                        <li class="sitebar-box">
                                            <h2>Connections</h2>
                                            <ul>
                                            <li><a href="terms-privacy.php">CGUG</a></li>
                                            <li><a href="legal-notice.php">Credits</a></li>
                                            <li><a href="terms-privacy.php">Legal Notice</a></li>
                                            <li><a href="terms-privacy.php">DPR</a></li>
                                            <li><a href="sitemap.php">Sitemap</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 reset-padding">
                                <img src="/assets/images/information-architecture.png" className="img-fluid"/>
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
