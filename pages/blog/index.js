import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Blog(){

    const type='blog.php'
    //const pageName = "about_us";
    const [blog, setBlog]=useState([]);
    const [loading,setLoading] = useState(true)


    useEffect( async() => {
        userService.getAllItems(type).then((res) => {
            setBlog(res[0].json_data);
            setLoading(false);
        }) 
    }, []);

    return(
        <div id="wrapper">
            <div className="overlay">
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header className="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                {loading ?
                    //<div className="col-lg-6 col-md-6 col-sm-12">
                    <div>
                        <img src="images/preLoader.gif" style={{width:'25px',height:'25px',position:'relative',left:'50%',transform:'translateX(-50%)'}} />  
                    </div> :
                    <div>
                <div className="site-bannersection">
                    <div className="row reset-margin reverse-row-mobile">
                        <div className="col-md-6 blog-title-col reset-padding align-self-center">
                            <h1 className="individual-text title d-none d-md-block">{blog.title}</h1>
                            <h1 className="individual-text title d-block d-md-none">Read what future holds for you</h1>
                        </div>
                        <div className="col-md-6 banner-pic-col reset-padding">
                            <img src="/assets/images/blog-pic.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <section className="site-body-container">
                    <div className="gsm-blog-lists container container-70 reset-padding">
                        {blog.blog_items && blog.blog_items.map((items, index) => 
                            <div key = {index} className="gsm-blog-row row">
                                <div className="blogImage col-4">
                                    <img src={items.blog_pic} className="img-fluid"/>
                                </div>
                                <div className="blogContent col-8 reset-padding">
                                    <h2 className="individual-text">{items.blog_title}</h2>
                                    <p className="individual-text d-none d-lg-block">{items.blog_desc}</p>
                                    <span className="author_designation">{items.author}</span>
                                </div>
                            </div>
                        )}
                        <div className="strike">
                            <a className="blog-view-more" href="#">{blog.button_name}</a>
                        </div>
                    </div>
                </section>
            
                <footer className="site-footer">
                    <Footer/>
                </footer> 
                </div>
                }
            </div>
        </div>
    )
} 
