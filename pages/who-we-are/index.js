import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import { userService } from '../../services/user.service';


export default function WhowearePage(){

    const type = 'who-we-are.php';
    const [whowepanel, setWhowepanel] = useState([]);

    useEffect(()=>{

        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("inner-page");
        userService.getAllItems(type).then((res) => {  
            setWhowepanel(res.json_data)
        }) 
         .catch((err) => console.error(err));  
        
    },[])
    useEffect(()=>{
        if(whowepanel && whowepanel.length > 0){
            {/* Banner jquery script Starts */}
            function BannerOverlays(){
                
                var $banner_h;
                var $banner_w;

                $(".twobyfour-banner-cover-overlay").each(function(){
                    $banner_h = $('.twofourth-size-banner img').height();
                    $banner_w = $('.twofourth-size-banner img').width();
                    $(this).width($banner_w).height($banner_h);
                });
            }

            $(window).resize(function(){ 
                BannerOverlays();
            }); {/* Banner jquery script End */}

            {/* Testimonial jquery script Starts */}
            $(document).ready(function () {
                BannerOverlays();
            });
        }
    },[whowepanel])  

    return(
        <div id="wrapper">
        <div class="overlay"></div>
        <Sidepanel />        
        <div id="page-content-wrapper" class="container-fluid reset-padding">
            <header class="site-header site-navbar site-navbar-target">
                <Header />
            </header>
            <div class="site-bannersection certificateur-bannersection">
                <div class="banner-view twofourth-size-banner">
                    <img src={whowepanel.banner_section && whowepanel.banner_section.banner_img} className="banner-img"/>
                    <img src="images/who-wer-mobile-banner.png" class="banner-img d-block d-md-none"/>
                </div>
                <div class="twobyfour-banner-cover-overlay">
                </div>
  
                <div class="container container-70 reset-padding certificateur-container">
                    <div class="row reset-margin">
                        <div class="col-md-6 content-section">
                            <h1>{whowepanel.banner_section && whowepanel.banner_section.title}</h1>
                            <p>{whowepanel.banner_section && whowepanel.banner_section.desc}</p>    
                        </div>
                        <div class="col-md-6 infobar-section align-self-center">
                            <div class="infobar">
                                <ul class="inforbar-row row reset-margin">
                                    <li class="col inforbar-col">
                                        <label>{whowepanel.banner_section && whowepanel.banner_section.card_title_1}</label>
                                        <h2>{whowepanel.banner_section && whowepanel.banner_section.card_title_2}</h2>
                                        <label>{whowepanel.banner_section && whowepanel.banner_section.card_title_3}</label>
                                    </li>
                                    <li class="col inforbar-col">
                                        <label>{whowepanel.banner_section && whowepanel.banner_section.card_title_4}</label>
                                        <h2>{whowepanel.banner_section && whowepanel.banner_section.card_title_6}</h2>
                                        <label>{whowepanel.banner_section && whowepanel.banner_section.card_title_8}</label>
                                    </li>
                                    <li class="col inforbar-col">
                                        <label>{whowepanel.banner_section && whowepanel.banner_section.card_title_5}</label>
                                        <h2>{whowepanel.banner_section && whowepanel.banner_section.card_title_7}</h2>
                                        <label>{whowepanel.banner_section && whowepanel.banner_section.card_title_9}</label>
                                    </li>   
                                </ul>
                                <h2 className="infobar-title">{whowepanel.banner_section && whowepanel.banner_section.card_title_10}</h2>
                            </div>
                      </div>
                    </div>
                </div>
  
                  <div class="certificateur-content-container">
                      <div class="container container-70 reset-padding">
                          <div class="row mx-0 mb-4">
                              <div class="col-md-6 certificateur-content-section">
                                <h2>{whowepanel.we_are_section && whowepanel.we_are_section.title}</h2>
                                <p>{whowepanel.we_are_section && whowepanel.we_are_section.desc_1}</p>
                                <p>{whowepanel.we_are_section && whowepanel.we_are_section.desc_2}</p>
                              </div>
                              <div class="col-md-6 certificateur-image-section">
                                <img src={whowepanel.we_are_section && whowepanel.we_are_section.photo_link_1} className="img-fluid"/>
                              </div>
                              
                          </div>
                            <p>{whowepanel.we_are_section && whowepanel.we_are_section.desc_3}</p>
                            <p>{whowepanel.we_are_section && whowepanel.we_are_section.desc_4}</p>
                      </div>
                      
                      <div class="ml-align-box certificateur-imgbannerbox">
                        <img src={whowepanel.we_are_section && whowepanel.we_are_section.phtot_link_2} className="img-fluid"/>
                        <p>{whowepanel.we_are_section && whowepanel.we_are_section.image_desc}</p>
                      </div>
                      <div class="container container-70 reset-padding">
                          <div class="row mx-0 mb-4">    
                                <h2>{whowepanel.certification_section && whowepanel.certification_section.title}</h2>
                                <p>{whowepanel.certification_section && whowepanel.certification_section.desc_1}</p>
                                <p>{whowepanel.certification_section && whowepanel.certification_section.desc_2}</p> 
                                <p>{whowepanel.certification_section && whowepanel.certification_section.desc_3}</p>
                          </div>
                      </div>
                  </div>
            </div>
            {/* style="background-image: url('images/technician-carefully-inspect.png' */}
            <section className="Quotebutton site-body-container" style={ {backgroundImage:`url(${whowepanel.certification_section && whowepanel.certification_section.photo_link})`,} } >              <div class="Quotebutton__box reset-padding">
                <h1 className="box--title">{whowepanel.certification_section && whowepanel.certification_section.photo_title}</h1>
                <p className="box--para">{whowepanel.certification_section && whowepanel.certification_section.photo_desc}</p>              
                  <div class="link__box mt-3">
                  <a href="#" className="btn gsm-bg-white btn-gsm-md">{whowepanel.certification_section && whowepanel.certification_section.photo_button_name}</a>                    </div>
              </div>
            </section>
  
            <footer class="site-footer">
              <Footer/>
            </footer>  
        </div>
    </div>
    )
}