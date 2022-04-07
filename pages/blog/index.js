import {  useEffect, useState } from 'react';
import {useRouter} from 'next/router'
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Blog(){
    const router=useRouter()
    const type='top-panel.php'
    const pageName = "about_us";
    const [loading,setLoading]=useState(true)

   
    useEffect( async() => {
        
        
  
        userService.getAllItems(type).then((res) => {
           console.log(res[0].json_data);
        }) 
                  
    }, [router.query]);

    return(
        <div id="wrapper">
            <div className="overlay">
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header className="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                <div className="site-bannersection">
                    <div className="row reset-margin reverse-row-mobile">
                        <div className="col-md-6 blog-title-col reset-padding align-self-center">
                            <h1 className="individual-text title d-none d-md-block">Votre blog</h1>
                            <h1 className="individual-text title d-block d-md-none">Read what future holds for you</h1>
                        </div>
                        <div className="col-md-6 banner-pic-col reset-padding">
                            <img src="/assets/images/blog-pic.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <section className="site-body-container">
                    <div className="gsm-blog-lists container container-70 reset-padding">
                        <div className="gsm-blog-row row">
                            <div className="blogImage col-4">
                                <img src="/assets/images/blog-1.png" className="img-fluid"/>
                            </div>
                            <div className="blogContent col-8 reset-padding">
                                <h2 className="individual-text">Are you a job seeker living in Paris </h2>
                                <p className="individual-text d-none d-lg-block">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                </p>
                                <p className="individual-text d-block d-lg-none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                <span className="author_designation">Darani Srivthsan, GSM Master.</span>
                            </div>
                        </div>
                        <div className="gsm-blog-row row">
                            <div className="blogImage col-4">
                                <img src="/assets/images/blog-2.png" className="img-fluid"/>
                            </div>
                            <div className="blogContent col-8 reset-padding">
                                <h2 className="individual-text">Are you a job seeker living in Paris </h2>
                                <p className="individual-text d-none d-lg-block">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                </p>
                                <p className="individual-text d-block d-lg-none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                <span className="author_designation">Darani Srivthsan, GSM Master.</span>
                            </div>
                        </div>
                        <div className="gsm-blog-row row">
                            <div className="blogImage col-4">
                                <img src="/assets/images/blog-3.png" className="img-fluid"/>
                            </div>
                            <div className="blogContent col-8 reset-padding">
                                <h2 className="individual-text">Are you a job seeker living in Paris </h2>
                                <p className="individual-text d-none d-lg-block">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                </p>
                                <p className="individual-text d-block d-lg-none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                <span className="author_designation">Darani Srivthsan, GSM Master.</span>
                            </div>
                        </div>
                        <div className="gsm-blog-row row">
                            <div className="blogImage col-4">
                                <img src="/assets/images/blog-4.png" className="img-fluid"/>
                            </div>
                            <div className="blogContent col-8 reset-padding">
                                <h2 className="individual-text">Are you a job seeker living in Paris </h2>
                                <p className="individual-text d-none d-lg-block">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                </p>
                                <p className="individual-text d-block d-lg-none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                <span className="author_designation">Darani Srivthsan, GSM Master.</span>
                            </div>
                        </div>
                        <div className="gsm-blog-row row">
                            <div className="blogImage col-4">
                                <img src="/assets/images/blog-5.png" className="img-fluid"/>
                            </div>
                            <div className="blogContent col-8 reset-padding">
                                <h2 className="individual-text">Are you a job seeker living in Paris</h2>
                                <p className="individual-text d-none d-lg-block">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                </p>
                                <p className="individual-text d-block d-lg-none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                <span className="author_designation">Darani Srivthsan, GSM Master.</span>
                            </div>
                        </div>
                        <div className="gsm-blog-row row">
                            <div className="blogImage col-4">
                                <img src="/assets/images/blog-6.png" className="img-fluid"/>
                            </div>
                            <div className="blogContent col-8 reset-padding">
                                <h2 className="individual-text">Are you a job seeker living in Paris </h2>
                                <p className="individual-text d-none d-lg-block">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                </p>
                                <p className="individual-text d-block d-lg-none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                <span className="author_designation">Darani Srivthsan, GSM Master.</span>
                            </div>
                        </div>

                        <div className="strike">
                            <a className="blog-view-more" href="#">LOAD MORE BLOGS</a>
                        </div>
                    </div>
                </section>
                <footer className="site-footer">
                    <Footer/>
                </footer>    
            </div>
        </div>
    )
} 