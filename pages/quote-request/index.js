import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import { userService } from '../../services/user.service';
export default function QuoteRequestPage(){
    const type = 'quote-request.php';
    const [quoterequestpanel, setQuoterequestPanel] = useState([]);
    
    useEffect(()=>{
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("inner-page");

        userService.getAllItems(type).then((res) => { 
            setQuoterequestPanel(res.json_data);
        }) 
         .catch((err) => console.error(err)); 
          
    },[])


    useEffect(()=>{

        if(quoterequestpanel){
            {/* Banner jquery script Starts */}
            function BannerOverlays(){
                var $banner_h;
                var $banner_w;

                $('.individual-banner-content.banner-cover').each(function(){
                    $banner_h = $('.banner-view.smallsize-banner').height();
                    $banner_w = $('.banner-view.smallsize-banner').width();
                    $(this).width($banner_w).height($banner_h);
                });
            }

            $(window).resize(function(){ 
                BannerOverlays();
            }); {/* Banner jquery script End */}
            $(document).ready(function () {
                BannerOverlays();

                var totalfaqItems = $('.qualified-faq-item').length;
                var currentfaqIndex = $('div.qualified-faq-item.active').index() + 1;
                var currentfaqIndex_active;
                var downfaq_index;
                var autofaqIndex_active;
                var autodownfaq_index;
                
                // $('.testimonial_num').html(''+currentIndex+'/'+totalItems+'');
                $('.faq_qulified_num').html(''+currentfaqIndex+'');

                $(".qualified-faq-next").click(function(){
                    currentfaqIndex_active = $('div.qualified-faq-item.active').index() + 2;
                    if (totalfaqItems >= currentfaqIndex_active)
                    {
                        downfaq_index= $('div.qualified-faq-item.active').index() + 2;
                        //$('.testimonial_num').html(''+currentIndex_active+'/'+totalItems+'');
                        $('.faq_qulified_num').html(''+currentfaqIndex_active+'');
                    }
                });

                $(".qualified-faq-prev").click(function(){
                    
                    downfaq_index=downfaq_index-1;
                    if (downfaq_index >= 1 ){
                        //$('.testimonial_num').html(''+downfaq_index+'/'+totalItems+'');
                        $('.faq_qulified_num').html(''+downfaq_index+'');
                    }
                });

               
                $("#faqqualified_Indicators").on('slide.bs.carousel', function (e) {
                    autofaqIndex_active = $('div.qualified-faq-item.active').index() + 2;
                    $(".qualified-faq-next").click(function(e){
                            e.preventDefault();
                    });
                    $(".qualified-faq-prev").click(function(e){
                            e.preventDefault();
                    })
                      if (totalfaqItems >= autofaqIndex_active){
                        autodownfaq_index= $('div.qualified-faq-item.active').index() + 2;
                        $('.faq_qulified_num').html(''+autodownfaq_index+'');
                      }
                      
                      else{
                        $('.faq_qulified_num').html(''+currentfaqIndex+''); 
                      }
                      
                });
                
                
            });
        }

        
    },[quoterequestpanel])

    
    return(
        <div id="wrapper">
            <div className="overlay"></div>

            <Sidepanel/>

            <div id="page-content-wrapper" className="container-fluid reset-padding">
                    <Header/>
                <div className="site-bannersection">
                    <div className="banner-view smallsize-banner d-none d-sm-block" style={ {backgroundImage: `url(${quoterequestpanel.banner_section && quoterequestpanel.banner_section.photo_url})`}}>
                    </div>
                    <div className="banner-view smallsize-banner d-block d-sm-none" style={ {backgroundImage: `url('/assets/images/quote-request-mobile.png')`}}>
                    </div>
                    
                    <div className="banner-cover-overlay">
                        <div className="banner-cover individual-banner-content">
                            <div className="container container-1140 reset-padding banner-title-blog">
                                <h2 className="banner-title">{quoterequestpanel.banner_section && quoterequestpanel.banner_section.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section className="site-body-container">
                    <div className="qualified-staff-box">
                        <div className="container container-60 reset-padding text-center register-box-top">
                            <p className="reg-intro-content">
                                {quoterequestpanel.banner_section && quoterequestpanel.banner_section.desc}
                            </p>
                        </div>
                    </div>

                    <div className="faq-section qualified-staff-section">
                        <div className="container container-70 reset-padding">
                            <div className="row reset-margin">

                                <div className="col-md-5 reset-padding faq-accordian-slider">
                                    <div id="faqqualified_Indicators" className="carousel slide" data-ride="carousel" data-wrap="false" data-interval="3000">
                                            <div className="carousel-inner">
                                                {quoterequestpanel.student_details && quoterequestpanel.student_details.map((items, index) => 
                                                    <div className={`carousel-item  qualified-faq-item ${index == 0 && 'active'}`}>
                                                        <div className="faqMember-thumbnail">
                                                                <span className="faqequals-quotes individual-text">=</span>
                                                                <img src={items.photo_link} className="img-fluid"/>
                                                                <div className="triangleBox individual-bg"></div>
                                                        </div>
                                                        <p className="fag-content individual-text">
                                                            {items.desc}
                                                        </p>
                                                        <h3 className="faqmemberName individual-text">{items.student_name}<span className="faqmemberDesignation">{items.qualification}</span></h3>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="faq-Nav">
                                                <a className="carousel-control-prev qualified-faq-prev" href="#faqqualified_Indicators" role="button" data-slide="prev">
                                                <img src="/assets/images/qulified-test-arrow-left.png" />
                                                <span className="sr-only">Previous</span>
                                                </a>
                                                <span className="faq_qulified_num individual-text"></span>
                                                <a className="carousel-control-next qualified-faq-next" href="#faqqualified_Indicators" role="button" data-slide="next">
                                                <img src="/assets/images/qulified-test-arrow-right.png" />
                                                <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                    </div>
                                </div>

                                <div className="col-md-1 reset-padding d-none d-md-block">
                                </div>

                                <div className="col-md-6 reset-padding">
                                    <div className="company-register-section">
                                        <form className="company-registration-form">
                                            <h2>Enregistrez votre demande</h2>
                                            <p>Demandez l’accès aux CV de nos apprenants ou publier votre offre sur notre site internet.</p>
                                            <div className="form-row reset-margin">
                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Prénom*</label>
                                                <input type="text" className="form-control" placeholder="Prénom" />
                                                </div>

                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Nom*</label>
                                                <input type="text" className="form-control" placeholder="Nom" />
                                                </div>

                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Votre demande</label>
                                                <textarea className="form-control" placeholder="Préciser votre demande" rows="5"></textarea>
                                                </div>

                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Email*</label>
                                                <input type="text" className="form-control" placeholder="Adresse mail" />
                                                </div>

                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Téléphone*</label>
                                                <input type="text" className="form-control" placeholder="01 40 05 03 43" />
                                                </div>

                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Email*</label>
                                                <input type="text" className="form-control" placeholder="Adresse mail" />
                                                </div>
                                                
                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Téléphone*</label>
                                                <input type="text" className="form-control" placeholder="01 40 05 03 43" />
                                                </div>

                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Email*</label>
                                                <input type="text" className="form-control" placeholder="Adresse mail" />
                                                </div>
                                                
                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Téléphone*</label>
                                                <input type="text" className="form-control" placeholder="01 40 05 03 43" />
                                                </div>

                                                <div className="form-group gsm-form-group col-md-12">
                                                <label className="gsm-form-label individual-text">Email*</label>
                                                <input type="text" className="form-control" placeholder="Adresse mail" />
                                                </div>
                                                
                                            </div>
                                            
                                            <p className="regitration-disclaimer">
                                            GSM Master s’engage à protéger et à respecter votre vie privée. 
                                            Nous utiliserons vos données personnelles pour administrer votre 
                                            compte et vous fournir les produits et services demandés.
                                            </p>
                                            <div class="form-check emailform-check">
                                                <input type="checkbox" class="form-check-input emailform-check-input" id="emailform-check-label" />
                                                <label class="text-left form-check-label emailform-label" for="emailform-check-label">
                                                    En cochant cette case je reconnais avoir pris connaissance 
                                                    des <strong>conditions générales d’utilisation</strong> et de la <strong>politique de confidentialité</strong>
                                                </label>
                                            </div>
                                            <div className="text-center">
                                            <button type="button" className="btn gsm-bg-individual btn-block">Soumettre</button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <p className="individual-text text-center question-text">{quoterequestpanel.question_text && quoterequestpanel.question_text}</p>
                        </div>
                    </div>
                    </section>
                    <footer className="site-footer">
                        <Footer/>
                    </footer>  
            </div>
        </div>
    );
}