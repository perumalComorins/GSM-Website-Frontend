import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ContactFaqPage(){
        const type = 'contactfaq.php';
        
        const [contactfaq, setContactFaq] = useState([]);
        const [banner, setBanner] = useState();
        useEffect(()=>{
            document.querySelector("body");
            let body_ele = document.querySelector("body");
            body_ele.className='';
            body_ele.classList.add("inner-page");
            
            userService.getAllItems(type).then((res) => { 
                setContactFaq(res.json_data);
                setBanner(res.json_data.banner_section);
            }) 
             .catch((err) => console.error(err));     
            
        },[])
        
        useEffect(()=>{
            if(contactfaq){
                {/* Banner jquery script Starts */}
                function BannerOverlays(){
                    var $banner_h;
                    var $banner_w;

                    $(".contactFaq-banner-resizer .threebyfour-banner-cover-overlay").each(function(){
                        $banner_w = $('.contactFaq-banner-resizer .banner-view img').width();
                        $banner_h = $('.contactFaq-banner-resizer .banner-view img').height();
                        $(this).width($banner_w).height($banner_h);
                    });

                    $('.threebyfour-banner-cover.contactfaq-banner-content').each(function(){
                        $banner_w = $('.contactFaq-banner-resizer .banner-view img').width();
                        $banner_h = $('.contactFaq-banner-resizer .banner-view img').height();
                        $(this).width($banner_w).height($banner_h);
                    });
                }

                $(window).resize(function(){ 
                    BannerOverlays();
                }); {/* Banner jquery script End */}
                $(document).ready(function () {
                    BannerOverlays();

                    $('#contactfaq-nav li a').on('click', function(event) {
                        $("#contactfaq-nav li").removeClass("list-active");
                        $(this).parent('').addClass("list-active");
                        event.preventDefault();
                    });
                    $('#contactfaq-nav-mobile .carousel-inner li a').on('click', function(event) {
                            $("#contactfaq-nav-mobile .carousel-inner li").removeClass("list-active");
                            $(this).parents('').addClass("list-active");
                            event.preventDefault();
                    });

                    // $('.news').each(function(){
                    //     var t,
                    //         $self = $(this),
                    //         $contentBox = $self.find('.content'),
                    //         newHeight = $contentBox.innerHeight()*3
                        
                    //     $self.hover(function(){
                    //         clearTimeout(t);
                    //         $contentBox.stop().animate({
                    //         'height' : newHeight
                    //       }, {
                    //         step: function() {
                    //           $contentBox.css("overflow-y", "auto");
                    //         }
                    //       });
                    //     }, function(){
                    //       clearTimeout(t);
                    //       t=setTimeout(function(){
                    //         $contentBox.stop().animate({
                    //           'height' : 100
                    //         }, {
                    //           step: function() {
                    //             $contentBox.css("overflow-y", "auto");
                    //           }
                    //         });
                    //       }, 300)
                    //     });
                    // });

                    var t,
                    $contentBox = $("#contactfaq-nav li"),
                    newHeight = $contentBox.innerHeight()+80;

                    $contentBox.hover(function(){
                        clearTimeout(t);
                        $(this).stop().animate({
                            'height' : newHeight
                            }, {
                            step: function() {
                                $(this).css("overflow-y", "auto");
                            }
                        });
                    }, function(){
                      clearTimeout(t);
                      t=setTimeout(function(){
                        $(this).stop().animate({
                          'height' : 300
                        }, {
                          step: function() {
                            $(this).css("overflow-y", "auto");
                          }
                        });
                      }, 300)
                    });
                    
                    
                });
            }
        },[contactfaq])
        console.log(contactfaq.banner_section)
    return(
        <div id="wrapper">
            <div className="overlay"></div>
            <Sidepanel/>

            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <Header/>
                 <div className="site-bannersection contactFaq-banner-resizer">
                    <div className="banner-view threebyfourth-size-banner d-none d-sm-block" style={ {backgroundImage: `url(${contactfaq.banner_section && contactfaq.banner_section.bg_image_url})`}}>
                        {/* <img src={contactfaq.banner_section && contactfaq.banner_section.bg_image_url} className="banner-img"/> */}
                    </div>
                    <div className="banner-view threebyfourth-size-banner d-block d-sm-none" style={ {backgroundImage: `url('/assets/images/contact-mobile-banner.png')`}}>
                        {/* <img src={contactfaq.banner_section && contactfaq.banner_section.bg_image_url} className="banner-img"/> */}
                    </div>
                    <div className="threebyfour-banner-cover-overlay">
                        <div className="threebyfour-banner-cover contactfaq-banner-content threebyfourth-banner">
                            <div className="banner-content text-center">
                                <h1 className="title">{contactfaq.banner_section && contactfaq.banner_section.title}</h1>
                                <form name="contactfaq-searchForm" className="container container-45 contactfaq-searchForm search-form my-2">
                                    <input name="search-for-contactfaq" className="search-for-contactfaq form-control mr-sm-0 rounded-0 border-right-0" type="search" placeholder={contactfaq.banner_section && contactfaq.banner_section.placeholder} aria-label="Search" />
                                    <button className="btn btn-search-gsm gsm-bg-individual border-0 rounded-0 my-sm-0 waves-effect waves-light" type="subuttonbmit"><img src={contactfaq.banner_section && contactfaq.banner_section.search_icon_url} style={ {width:"16px",height:"16px"} } /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  

                <section className="site-body-container">
                    <div className="contactfaq-tab-section">
                        <div className="contactfaq-tab-bar">
                            <div className="container container-55 reset-padding">
                                <ul id="contactfaq-nav" className="nav nav-pills row reset-margin">
                                    {contactfaq.button_module  && contactfaq.button_module.map((items, index) => 
                                    //<li className={`col text-center ${index==0 ? 'list-active' :  ''}`}></li>
                                    <li className={`col text-center`}>
                                        <a data-toggle="pill" href={`#${items.slug}`} className={``} >
                                        {/* <a data-toggle="pill" href={`#${items.slug}`} className={`${index==0 ? 'active' :  ''}`} > */}
                                            <img class="non-active-icon" src={items.photo_url} />
                                            <img class="active-icon" src={items.photo_hover_url} />
                                            <h2>{items.title}</h2>
                                            <p>{items.desc}</p>
                                        </a>
                                    </li>
                                    )}
                                </ul>

                                <div id="contactfaq-nav-mobile" className="contactfaq-nav-slider carousel slide d-block d-lg-none" data-ride="carousel" data-interval="false" data-pause="hover">
                                    <ul className="carousel-inner nav nav-pills row reset-margin">
                                        {contactfaq.button_module  && contactfaq.button_module.map((items, index) => 
                                        // <li className={`carousel-item col-sm-12 text-center ${index==0 ? 'active list-active' :  ''}`}>
                                        <li className={`carousel-item col-sm-12 text-center ${index==0 ? 'active' :  ''}`}>
                                            {/* <a data-toggle="pill" href={`#${items.slug}`} className={`${index==0 ? 'active' :  ''}`} > */}
                                            <a data-toggle="pill" href={`#${items.slug}`} className={``} >
                                                    <img class="non-active-icon" src={items.photo_url} />
                                                    <img class="active-icon" src={items.photo_hover_url} />
                                                    <h2>{items.title}</h2>
                                                    <p>{items.desc}</p>
                                            </a>
                                        </li>
                                        )}
                                    </ul>
                                    <ul className="carousel-indicators">
                                        {contactfaq.button_module  && contactfaq.button_module.map((items, index) => 
                                        <li data-target="#contactfaq-nav-mobile" data-slide-to={index} className={`${index==0 ? 'active' :  ''}`}></li>
                                        )}
                                        
                                    </ul>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        <div className="container-fluid reset-padding organization-tab-content">
                            <div className="tab-content container container-55 reset-padding">
                                {contactfaq.button_module  && contactfaq.button_module.map((items, index) => 
                                // <div id={items.slug} class={`tab-pane fade ${index==0 ? 'in active show': ''}`}>
                                <div id={items.slug} class={`tab-pane fade`}>    
                                    <div id="contact-faq-accordian" class="col-md-12 reset-padding faq-accordian-list">
                                        <h2 class="title">{items.sub_title}</h2>
                                        <div class="accordion" id={`${items.slug}-faq`}>
                                            {items.bury_questions && items.bury_questions.map((each_module_inner, i) => 
                                            <div class="card">
                                                <div class="card-header" id={`${items.slug}-faqhead${i}`}>
                                                    <a href="#" class={`btn btn-header-link ${i>0 ? 'collapsed': ''}`} data-toggle="collapse" data-target={`#${items.slug}-faq${i}`}
                                                    aria-expanded={`${i==0 ? 'true' :  'false'}`} aria-controls={`${items.slug}-faq${i}`}>{each_module_inner.question}</a>
                                                </div>

                                                <div id={`${items.slug}-faq${i}`} class={`collapse ${i==0 ? 'show': ''}`} aria-labelledby={`${items.slug}-faqhead${i}`} data-parent={`#${items.slug}-faq`}>
                                                    <div class="card-body">
                                                        {each_module_inner.answer}
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                    </div>
                                </div>)}
                            </div>

                            {/* <div className="appointment-result-box container container-55 reset-padding">
                                <div className="contactfaq-result text-center">
                                        <h2 className="individual-text result-title text-center">
                                            Oops !! we couldn't find any results
                                        </h2>
                                        <img src="/assets/images/opps-object.png" className="img-fluid"/>
                                        <button type="button" className="btn btn-gsm-md gsm-bg-individual">Être contacté</button>
                                </div>
                            </div> */}

                            <div className="appointment-content container container-45 reset-padding">
                                <div className="contactfaq-appointment">
                                        <h2 className="individual-text appointment-title text-center">
                                            Vous ne trouvez pas votre solution ? Prenez rendez vous avec notre équipe
                                        </h2>
                                        <div className="appointment-card card mx-auto" style={{backgroundImage: "url('/assets/images/faq-appoint-bg.png')",}}>
                                            <div className="card-body">
                                            <div className="row">
                                                <div className="col-4 col-lg-3">
                                                    <img src="/assets/images/noun_Appointment-icon.png" className="img-fluid"/>
                                                </div>
                                                <div className="col-8 col-lg-9">
                                                    <h3 className="card-title">Prenez rendez-vous</h3>
                                                    <p className="card-text d-none d-lg-block">
                                                    Vous ne trouvez pas la réponse à votre question ou vous avez besoin de plus de détails. 
                                                    Notre équipe est à votre disposition pour vous répondre. Pensez à interroger la FAQ ci-dessus.
                                                    </p>
                                                    <button className="btn gsm-bg-white btn-gsm-md my-2 d-none d-lg-block">Réservez votre créneau</button>
                                                </div>
                                                <div className="col-sm-12 d-block d-lg-none reset-padding ml-5">
                                                    <p className="card-text ">
                                                    Vous ne trouvez pas la réponse à votre question ou vous avez besoin de plus de détails. 
                                                    Notre équipe est à votre disposition pour vous répondre. Pensez à interroger la FAQ ci-dessus.
                                                    </p>
                                                    <button className="btn gsm-bg-white btn-gsm-md my-2">Réservez votre créneau</button>
                                                </div>
                                            </div>
                                            
                                            </div>
                                        </div>
                                </div>
                            </div>


                            
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