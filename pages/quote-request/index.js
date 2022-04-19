import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function QuoteRequestPage(){
        const [datas, setDatas] = useState(null);
        useEffect(()=>{
            document.querySelector("body");
            let body_ele = document.querySelector("body");
            body_ele.className='';
            body_ele.classList.add("inner-page");
            setDatas([1,2,3])
            
        },[])
        useEffect(()=>{
            if(datas && datas.length>0){
                {/* Banner jquery script Starts */}
                function BannerOverlays(){
                    var $banner_h;
                    var $banner_w;

                    $('.banner-cover').each(function(){
                        $banner_h = $('.banner-view.smallsize-banner img').height();
                        $banner_w = $('.banner-view.smallsize-banner img').width();
                        $(this).width($banner_w).height($banner_h);
                    });
                }

                $(window).resize(function(){ 
                    BannerOverlays();
                }); {/* Banner jquery script End */}
                $(document).ready(function () {
                    BannerOverlays();
                });
            }
        },[datas]);

    return(
        <div id="wrapper">
            <div className="overlay"></div>
            <Sidepanel/>

            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header className="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                <div className="site-bannersection">
                    <div className="banner-view smallsize-banner">
                        <img src="/assets/images/individual-banner-v1.png" className="banner-img"/>
                    </div>
                    <div className="banner-cover-overlay">
                        <div className="banner-cover individual-banner-content">
                            <div className="container container-1140 reset-padding banner-title-blog">
                                <h2 className="banner-title">Recrutez votre équipe pour des métiers durables</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="site-body-container">
                    <div className="qualified-staff-box">
                        <div className="container container-60 reset-padding text-center register-box-top">
                            <p className="reg-intro-content">
                            Découvrez les profils de nos apprenants de la certification 
                            « Réparateur/trice de produits nomades" afin de renforcer vos équipes.
                            </p>
                        </div>
                    </div>

                    <div className="faq-section qualified-staff-section">
                        <div className="container container-70 reset-padding">
                            <div className="row reset-margin">

                                <div className="col-md-5 reset-padding faq-accordian-slider">
                                    <div id="faqqualified_Indicators" className="carousel slide" data-ride="carousel" data-wrap="false" data-interval="false">
                                            <div className="carousel-inner">
                                                <div className="carousel-item qualified-faq-item active">
                                                    <div className="faqMember-thumbnail">
                                                        <span className="faqequals-quotes individual-text">=</span>
                                                        <img src="/assets/images/faq-thumb-1.png" className="img-fluid"/>
                                                        <div className="triangleBox individual-bg"></div>
                                                    </div>
                                                    <p className="fag-content individual-text">
                                                    Present in the mobile telephony market since 1999, 
                                                    GSM Master founded its training center at the end of 2014 with the aim of 
                                                    contributing to the standardization of the mobile product repair sector by 
                                                    offering complete and certifying training, allowing everyone to exercise 
                                                    the profession of repairer in full compliance and safety.
                                                    </p>
                                                    <h3 className="faqmemberName individual-text">Kim Joe <span className="faqmemberDesignation">Highschool</span></h3>
                                                </div>
                                                <div className="carousel-item qualified-faq-item">
                                                    <div className="faqMember-thumbnail">
                                                        <span className="faqequals-quotes individual-text">=</span>
                                                        <img src="/assets/images/faq-thumb-1.png" className="img-fluid"/>
                                                        <div className="triangleBox individual-bg"></div>
                                                    </div>
                                                    <p className="fag-content individual-text">
                                                    Present in the mobile telephony market since 1999, 
                                                    GSM Master founded its training center at the end of 2014 with the aim of 
                                                    contributing to the standardization of the mobile product repair sector by 
                                                    offering complete and certifying training, allowing everyone to exercise 
                                                    the profession of repairer in full compliance and safety.
                                                    </p>
                                                    <h3 className="faqmemberName individual-text">Kim Joe <span className="faqmemberDesignation">Highschool</span></h3>
                                                </div>
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
                                            <div className="text-center">
                                            <button type="button" className="btn gsm-bg-individual btn-block">Soumettre</button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <p className="individual-text text-center question-text">Une question ?</p>
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