import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import { redirect } from 'next/dist/server/api-utils';

export default function HomePage() {
    const type = 'home.php'
    const [datas, setDatas] = useState(null);
    const [homepanel, setHomepanel] = useState([]);

    useEffect(()=>{
        setDatas([1,2,3])
        userService.getAllItems(type).then((res) => {    
            setHomepanel(res[0].json_data);
        }) 
    },[])

    useEffect(()=>{
        if(datas && datas.length>0){
            {/* Banner jquery script Starts */}

            $(window).resize(function(){ 
                HomeBannerOverlays();
            }); {/* Banner jquery script End */}

            {/* Testimonial jquery script Starts */}
            $(document).ready(function () {
                
                {/* Testimonial jquery script Starts */}
                let totalItems = $('.testimonial-item').length;
                let currentIndex = $('div.testimonial-item.active').index() + 1;
                let down_index;

                // $('.testimonial_num').html(''+currentIndex+'/'+totalItems+'');
                $('.testimonial_num').html(''+currentIndex+'');

                $(".next").click(function(){
                    let currentIndex_active = $('div.testimonial-item.active').index() + 2;
                    if (totalItems >= currentIndex_active)
                    {
                        down_index= $('div.testimonial-item.active').index() + 2;
                        //$('.testimonial_num').html(''+currentIndex_active+'/'+totalItems+'');
                        $('.testimonial_num').html(''+currentIndex_active+'');
                    }
                });

                $(".prev").click(function(){
                    down_index=down_index-1;
                    if (down_index >= 1 )
                    {
                        //$('.testimonial_num').html(''+down_index+'/'+totalItems+'');
                        $('.testimonial_num').html(''+down_index+'');
                    }
                }); {/* Testimonial jquery script End */}

                HomeBannerOverlays();

            });
        }
    },[datas])  


    function HomeBannerOverlays(){

        $('.home-banner-resizer #banner-overlay').each(function(){
            let $banner_h = $('.home-banner-resizer .banner-view').height();
            let $banner_w = $('.home-banner-resizer .banner-view').width();
            $(this).width($banner_w).height($banner_h);
        });
        $('.home-banner-content').each(function(){
            let $banner_inner_h = $('.home-banner-resizer .banner-view').height();
            $(this).height($banner_inner_h);
        });
    }


    return (
        <div id="wrapper">
            <div classNameName="overlay">
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header class="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                <div className="site-bannersection home-banner-resizer">
                        <div className="banner-view fullsize-banner">
                            <img src={homepanel.banner_section && homepanel.banner_section.banner_image} className="banner-img d-none d-md-block"/>
                            <img src="assets/images/home-mobile-banner.png" className="banner-img d-block d-md-none img-fluid"/>
                        </div>
                        <div id="banner-overlay" >
                            <div className="home-banner-content">
                                <div className="banner-content">
                                    <h1 className="title">{homepanel.banner_section && homepanel.banner_section.title[0]}
                                        <span className="text-uppercase company-text">{homepanel.banner_section && homepanel.banner_section.title[1]}</span>
                                        {homepanel.banner_section && homepanel.banner_section.title[2]}<span className="text-uppercase partner-text">{homepanel.banner_section && homepanel.banner_section.title[3]}</span> 
                                        {homepanel.banner_section && homepanel.banner_section.title[4]}<span className="text-uppercase company-text">{homepanel.banner_section && homepanel.banner_section.title[5]}</span>
                                    </h1>
                                    <p className="content">{homepanel.banner_section && homepanel.banner_section.desc}</p>
                                    <div className="text-left mt-4">
                                        {homepanel.banner_section && homepanel.banner_section.buttons.map((each, i) =>          
                                            //<button type="button" className="btn gsm-bg-individual btn-gsm-statics-size">{each.button_name}</button>
                                            <button type="button" className="btn gsm-bg-individual btn-gsm-statics-size mx-3" style ={{backgroundColor: `${each.color_code}`}} >{each.button_name}</button>  
                                            /*<button type="button" className="btn gsm-bg-partner btn-gsm-statics-size">{each.button_name}</button>*/
                                        )}
                                    </div>
                                </div>
                                <div id="client-logo-slider" className="client-logo-section d-none d-lg-block" data-ride="carousel" data-interval="3000" data-pause="hover">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row mx-0">
                                                {homepanel.banner_section && homepanel.banner_section.logo.map((logo, index) =>
                                                    <div className="col-3">
                                                        <img src={logo.logo_url}/>
                                                    </div>  
                                                )}
                                                
                                            </div>
                                        </div>                                        
                                        <ul className="carousel-indicators">
                                            <li data-target="#client-logo-slider" data-slide-to="0" className="active"></li>
                                            <li data-target="#client-logo-slider" data-slide-to="1"></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                </div>

                <div id="client-logo-slider" class="d-block d-lg-none" data-ride="carousel" data-interval="3000" data-pause="hover">
                          <div class="carousel-inner">
                            <div class="carousel-item">
                              <div class="row mx-0">
                                  <div class="col-3 align-self-center">
                                    <img src="/assets/images/LogoQualiopi.png" class="img-fluid" />
                                  </div>  
                                  <div class="col-3 align-self-center">
                                    <img src="/assets/images/Group750.png" class="img-fluid" />
                                  </div>
                                  <div class="col-3 align-self-center">
                                    <img src="/assets/images/Group749.png" class="img-fluid" />
                                  </div>
                                  <div class="col-3 align-self-center">
                                    <img src="/assets/images/mon_compte_formation.png" class="img-fluid" />
                                  </div>
                              </div>
                            </div>
                            <div class="carousel-item active">
                              <div class="row mx-0">
                                  <div class="col-3 align-self-center">
                                    <img src="/assets/images/LogoQualiopi.png" class="img-fluid" />
                                  </div>  
                                  <div class="col-3 align-self-center">
                                    <img src="/assets/images/Group750.png" class="img-fluid" />
                                  </div>
                                  <div class="col-3 align-self-center">
                                    <img src="/assets/images/Group749.png" class="img-fluid" />
                                  </div>
                                  <div class="col-3 align-self-center">
                                    <img src="/assets/images/mon_compte_formation.png" class="img-fluid" />
                                  </div>
                              </div>
                            </div>

                                                      
                            {/* <ul class="carousel-indicators">
                              <li data-target="#client-logo-slider" data-slide-to="0" class="active"></li>
                              <li data-target="#client-logo-slider" data-slide-to="1"></li>
                            </ul>  */}
                          </div>
                </div>

                <section className="site-body-container">
                    <div className="what-wedo-section container container-70 reset-padding">
                                <div className="intro-section text-center">
                                    <h2 className="intro-title">{homepanel.gsm_master && homepanel.gsm_master.title[0]}<span className="partner-text">{homepanel.gsm_master && homepanel.gsm_master.title[1]}</span></h2>
                                    <p className="intro-content">{homepanel.gsm_master && homepanel.gsm_master.desc}</p>
                                </div>
                            
                                <div className="whatwedo-icon-texts-section">
                                    <div className="row reset-margin">
                                        {homepanel.gsm_master && homepanel.gsm_master.modules.map((module, increment) =>
                                        <div className="col-md-5 icontexts-box reset-padding">
                                            <div className="icontexts-row row">
                                                <img src={module.photo_link} className="icon"/>
                                                <div className="col whatwedo-texts reset-padding">
                                                    <p className="icontexts text-center">
                                                    <mark>{module.title_1}</mark>
                                                    <mark>{module.title_2}</mark>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="icontexts-para">{module.desc}</p>
                                        </div> 
                                              
                                        )}

                                        
                                        {/* <div className="col-md-2 d-none d-md-block icontexts-box reset-padding"></div>
                                        <div className="col-md-5 icontexts-box reset-padding">
                                            <div className="icontexts-row row">
                                                <img src="/assets/images/noun_skills.png" className="icon"/>
                                                <div className="col whatwedo-texts reset-padding">
                                                    <p className="icontexts text-center">
                                                    <mark>Des compétences</mark>
                                                    <mark>développées pour accéder</mark>
                                                    <mark>à un secteur sous tension</mark>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="icontexts-para">Le marché de la réparation des produits nomades est en pleine expansion. 
                                                Devenez acteur de ce secteur à votre compte ou comme salarié. Faites monter en compétence vos équipes et 
                                                réduisez votre taux de retour tout en augmentant le nombre de produits pris en charge.</p>
                                        </div>  */}
                                       
                                        {/* <div className="col-md-5 icontexts-box reset-padding">
                                            <div className="icontexts-row row">
                                                <img src="/assets/images/noun_quality.png" className="icon"/>
                                                <div className="col whatwedo-texts reset-padding">
                                                    <p className="icontexts text-center">
                                                    <mark>Des Formateurs</mark>
                                                    <mark>qualifiés</mark>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="icontexts-para">Une formation dispensée par de véritables professionnels du métier exerçant 
                                                depuis plus de 15 ans dans la réparation et la maintenance de produits nomades.
                                                Nos formateurs gardent toujours un pied sur le terrain pour être informé de l’actualité</p>
                                        </div>
                                        <div className="col-md-2 d-none d-md-block icontexts-box reset-padding"></div>
                                        <div className="col-md-5 icontexts-box reset-padding">
                                            <div className="icontexts-row row">
                                                <img src="/assets/images/noun_certified.png" className="icon"/>
                                                <div className="col whatwedo-texts reset-padding">
                                                    <p className="icontexts text-center">
                                                    <mark>Des Formations à la carte,</mark>
                                                    <mark>adaptées à votre entreprise</mark>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="icontexts-para">Les formations dispensées par GSM Master s’adressent aussi 
                                            à des professionnels du métier souhaitant consolider, approfondir ou accroître les compétences 
                                            et les performances de leurs équipes</p>
                                        </div> */}
                                    </div>
                                </div>
                        </div> {/*What we do section */}

                        <div className="partnerLogos-section container-fluid reset-padding">
                            <h2 className="text-center">{homepanel.partners && homepanel.partners.title[0]}<span className="partner-text text-uppercase">{homepanel.partners && homepanel.partners.title[1]}</span></h2>
                            <div id="partnerpanel-slider" className="partnerpanel carousel slide" data-ride="carousel" data-interval="false" data-pause="hover">
                                <div className="carousel-inner d-none d-lg-block">
                                    <div className="carousel-item active">
                                            <div className="container container-70 reset-padding">
                                                <div className="row mx-0">
                                                    {homepanel.partners && homepanel.partners.partner_logo.map((partner) =>
                                                        <div className="col-3 reset-padding">
                                                            <img src={partner.link} className="img-fluid"/>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                            <div className="container container-70 reset-padding">
                                                <div className="row mx-0">
                                                    <div className="col-3"><img src="/assets/images/partner-group-5.png" /></div>
                                                </div>
                                            </div>
                                    </div>
                                    
                                    {/* <ul className="carousel-indicators">
                                        <li data-target="#partnerpanel-slider" data-slide-to="0" className="active"></li>
                                        <li data-target="#partnerpanel-slider" data-slide-to="1"></li>
                                    </ul> */}

                                </div> {/*first carousel inner end  */}

                                <div className="carousel-inner d-block d-lg-none">
                                    <div className="carousel-item active">
                                            <div className="container container-70 reset-padding">
                                                <div className="row mx-0">
                                                    <div className="col-6 reset-padding"><img src="/assets/images/partner-group-1.png" className="img-fluid"/></div>
                                                    <div className="col-6 reset-padding"><img src="/assets/images/partner-group-2.png" className="img-fluid"/></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                            <div className="container container-70 reset-padding">
                                                <div className="row mx-0">
                                                    <div className="col-6 reset-padding"><img src="/assets/images/partner-group-3.png" className="img-fluid"/></div>
                                                    <div className="col-6 reset-padding"><img src="/assets/images/partner-group-4.png" className="img-fluid"/></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                            <div className="container container-70 reset-padding">
                                                <div className="row mx-0">
                                                    <div className="col-6"><img src="/assets/images/partner-group-5.png" className="img-fluid"/></div>
                                                </div>
                                            </div>
                                    </div>
                                </div>{ /*second carousel inner end*/ } 
                            </div>
                        </div>

                        <div className="satisfaction-rate" style={{backgroundImage: "url('/assets/images/map-bg.png')",}} >
                            <div className="satisfaction-rate-innersection container container-60 reset-padding" >
                                <div className="title-bar text-center">
                                    <h2>Nos <span className="partner-text text-uppercase">PARTENAIRES</span></h2>
                                    <p className="intro-content individual-text">Nos taux de réussite de la certification pour "Réparateur(trice) produits nomades" de 2016 à aujourd'hui </p>
                                </div>
                                <div className="satisfaction-rate-section">
                                    <h4>Satisfaction rate</h4>
                                    <canvas id="horizontalBar" className="satisfactionBar"></canvas>
                                </div>
                                
                            </div>
                        </div>

                        <div className="organisation-section" style={{backgroundImage: "url('/assets/images/businessman-and-businesswoman.png')",}} >
                            <div className="organisation-inner-box row">
                                <div className="col-md-8 organisation-content">
                                    <div className="row reset-margin">
                                        <div className="col-md-5 d-none d-md-block"></div>
                                        <div className="col-md-7">
                                            <h2 className="main-title individual-text">
                                            {homepanel.gsm_organization && homepanel.gsm_organization.title[0]}<span className="partner-text text-uppercase">{homepanel.gsm_organization && homepanel.gsm_organization.title[1]}</span> 
                                            </h2>
                                            <h3 className="sub-title individual-text">{homepanel.gsm_organization && homepanel.gsm_organization.sub_title}</h3>
                                            <p className="organization-para individual-text">
                                            {homepanel.gsm_organization && homepanel.gsm_organization.desc}
                                            </p>
                                            <button className="btn d-block d-md-none gsm-bg-individual organisation-viewmore" type="button">Register Now</button>
                                            <button className="btn btn-gsm-sm gsm-outline-individual organisation-viewmore" type="button">{homepanel.gsm_organization && homepanel.gsm_organization.button_name}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 organize-picture">
                                    <img src="/assets/images/organisation-inner-img.png" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div className="testimonial">
                            <div className="testimonial_box">
                            </div>
                            <div className="testimonials_overlay">
                            <div className="container container-1160">
                                <div className="row reset-margin">
                                    <div id="testimonialIndicators" className="carousel slide" data-ride="carousel" data-wrap="false" data-interval="false">
                                    <div className="carousel-inner">
                                        {homepanel.testimonial && homepanel.testimonial.map((feedback, index) => 
                                        <div className="carousel-item testimonial-item active">
                                            <div className="row reset-margin gsm-teamMember-row">
                                                <div className="col-5 gsm-teamMember--thumbnail">
                                                    <img src={feedback.photo_link} className="teamMember--img img-fluid" />
                                                </div>
                                            
                                                <div className="col-7 gsm-teamMember--name-designation">
                                                    <h3 className="memberName d-block d-md-none">Testimonial from a company</h3>
                                                    <p className="membersQuote d-block d-md-none">
                                                    Present in the mobile telephony market since 1999, 
                                                    GSM Master founded its training center at the 
                                                    </p>
                                                
                                                    <h3 className="memberName">{feedback.feedbacker_name}<span className="memberDesignation">{feedback.designation}</span></h3>
                                                    <p className="membersQuote d-none d-md-block">
                                                    {feedback.feedback}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                        
                                        <div className="testimonial-Nav">
                                            <a className="carousel-control-prev prev" href="#testimonialIndicators" role="button" data-slide="prev">
                                            <img src="/assets/images/testimonial-arrow-left.png" />
                                            <span className="sr-only">Previous</span>
                                            </a>
                                            <span className="testimonial_num"></span>
                                            <a className="carousel-control-next next" href="#testimonialIndicators" role="button" data-slide="next">
                                            <img src="/assets/images/testimonial-arrow-right.png" />
                                            <span className="sr-only">Next</span>
                                            </a>
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