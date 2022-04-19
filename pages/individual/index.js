import { useContext, useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import { userService } from '../../services/user.service';
import SatisfactionCardSlider from "./satisfaction-card-slider";
import PeopleFaq from "./people-faq";

export default function IndividualPage() {

        const type = 'individual.php';
        //const [datas, setDatas] = useState(null);
        const [individualpanel, setIndividualpanel] = useState([]);
        
        useEffect(()=>{
            document.querySelector("body");
            let body_ele = document.querySelector("body");
            body_ele.className='';
            body_ele.classList.add("inner-page");
    
            userService.getAllItems(type).then((res) => { 
                setIndividualpanel([1,2,3])
                setIndividualpanel(res.json_data);
            }) 
             .catch((err) => console.error(err)); 
              
        },[]) 

        useEffect(()=>{

            if(individualpanel && individualpanel.length > 0){
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
        },[individualpanel])

    return (
        <div id="wrapper">
            <div className="overlay">
                {console.log(individualpanel)}
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <Header/>
                <div className="site-bannersection">
                    <div className="banner-view smallsize-banner">
                        <img src={individualpanel.banner_section && individualpanel.banner_section.banner_image} className="banner-img"/>
                    </div>
                    <div className="banner-cover-overlay">
                        <div className="banner-cover individual-banner-content">
                            <div className="container container-1140 reset-padding banner-title-blog">
                                <h2 className="banner-title">{individualpanel.banner_section && individualpanel.banner_section.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                

                <section className="site-body-container">
                    <div className="registeration-box">
                        <div className="container container-60 reset-padding text-center register-box-top">
                            <p className="reg-intro-content">
                            {individualpanel.banner_section && individualpanel.banner_section.desc}
                            </p>
                            <button type="button" className="btn gsm-bg-individual btn-gsm-lg">{individualpanel.banner_section && individualpanel.banner_section.button_name}</button>
                        </div>
                        <div className="container container-70 reset-padding text-center register-box-bottom">
                            <h2 className="section-title individual-text">{individualpanel.banner_section && individualpanel.banner_section.sub_title}</h2>
                            <p className="section-content individual-text">
                            {individualpanel.banner_section && individualpanel.banner_section.sud_desc}
                            </p>
                        </div>
                    </div>

                    <SatisfactionCardSlider value = {individualpanel}/>

                    <div className="faq-section company-bg">
                        <div className="container container-70 reset-padding">
                            <div className="row reset-margin">
                                <div className="col-md-5 reset-padding faq-accordian-slider">
                                    <span className="faq-label company-text">{individualpanel.faq_section && individualpanel.faq_section.title}</span>
                                        <div id="faqIndicators" className="carousel slide" data-ride="carousel" data-wrap="false" data-interval="false">
                                            <div className="carousel-inner">
                                                {individualpanel.faq_section && individualpanel.faq_section.student_details.map((items, index) => 
                                                    <div className={`carousel-item faq-item ${index == 0 &&  'active'}`}>
                                                        <div className="faqMember-thumbnail">
                                                            <span className="faqequals-quotes">=</span>
                                                                <img src={items.photo_link} className="img-fluid"/>
                                                                    <div className="triangleBox"></div>
                                                        </div>
                                                        <p className="fag-content">
                                                            {items.desc}
                                                        </p>
                                                        <h3 className="faqmemberName">{items.student_name}<span className="faqmemberDesignation">{items.qualification}</span></h3>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="faq-Nav">
                                                            <a className="carousel-control-prev faq-prev" href="#faqIndicators" role="button" data-slide="prev">
                                                            <img src="/assets/images/testimonial-arrow-left.png" />
                                                            <span className="sr-only">Previous</span>
                                                            </a>
                                                            <span className="faq_num"></span>
                                                            <a className="carousel-control-next faq-next" href="#faqIndicators" role="button" data-slide="next">
                                                            <img src="/assets/images/testimonial-arrow-right.png" />
                                                            <span className="sr-only">Next</span>
                                                            </a>
                                            </div>
                                        </div>
                                </div>
                                <div className="col-md-1 reset-padding d-none d-md-block">
                                </div>
                                <div id="main" className="col-md-6 reset-padding faq-accordian-list">
                                    <h2 className="title">{individualpanel.faq_section && individualpanel.faq_section.faq.title}</h2>

                                        <div className="accordion" id="faq">
                                            {individualpanel.faq_section && individualpanel.faq_section.faq.questions.map((items, index) => 
                                                <div className="card">
                                                    <div className="card-header" id="faqhead1">
                                                        <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                                                            aria-expanded="true" aria-controls="faq1">{items.quest}</a>
                                                    </div>

                                                    <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                                        <div className="card-body">
                                                            {items.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="pull-right mt-4">
                                            <a className="faqView_more" href="#">{individualpanel.faq_section && individualpanel.faq_section.faq.label}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    {/* <PeopleFaq value = {individualpanel}/> */}
                            
                    
                    <div className="training-initial-formSection">
                        <div className="container container-70 reset-padding">
                            <h3 className="train-title individual-text text-center">Prêt à vous former ?</h3>
                            <div className="register-section">
                                <h3 className="reg-session-title individual-text">Inscrivez-vous à la prochaine session</h3>
                                <form className="register-initial-form">
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Choisissez votre formation</label>
                                        <div className="dropdown gsmDropdown">
                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                Nom du cours
                                            </a>
                                            <ul className="dropdown-menu gsm-dropdown-menu" >
                                                <hr />
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 4</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 3</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Indicateurs de qualité</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Choisissez votre formation</label>
                                        <div className="dropdown gsmDropdown">
                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                Ville
                                            </a>
                                            <ul className="dropdown-menu gsm-dropdown-menu" >
                                                <hr />
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 4</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 3</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Indicateurs de qualité</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="form-group gsm-form-group">
                                    <label className="gsm-form-label individual-text">Choisissez votre date</label>
                                    <div className="dropdown gsmDropdown">
                                            <a className="dropdown-toggle gsm-dropdown-toggle active-choose" data-toggle="dropdown" aria-expanded="false">
                                                05 julliet 2021 to 06 Septembre 2021 - Fore Noon
                                            </a>
                                            <ul className="dropdown-menu gsm-dropdown-menu">
                                                <hr />
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 4</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Certification niveau 3</a></li>
                                                <li><a href="#" className="gsm-dropdown-link">Indicateurs de qualité</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="container container-65 reset-padding d-none d-lg-block">
                        <p className="individual-text text-center gsm-site-para">
                            Nos formations sont accessibles aux personnes en situation de handicap. 
                            Si vous avez des besoins spécifiques, n'hésitez pas à en informer notre référent handicap : 
                            Clément Berger de Nomazy sur l'adresse "relation-candidat@gsmmaster.fr"
                        </p>
                    </div>

                    <div className="container container-55 query-blog-container reset-padding d-none d-lg-block">
                        <div className="row reset-margin">
                            <div className="col query-column reset-padding">
                                <p className="query-text individual-text text-right">If you have any questions in filling this application or curriculum related questions ask us here.</p>
                            </div>
                            <div className="col query-column reset-padding text-center">
                                <button type="button" className="btn gsm-bg-individual btn-gsm-lg">Une Question?</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="training-regitration-formSection">
                        <div className="container container-70 reset-padding">
                            <div className="register-section">
                                <form className="register-registration-form">
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Prénom*</label>
                                        <input type="text" className="form-control" placeholder="Prénom" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Nom*</label>
                                        <input type="text" className="form-control" placeholder="Nom" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Email*</label>
                                        <input type="text" className="form-control" placeholder="Adresse mail" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Téléphone*</label>
                                        <input type="text" className="form-control" placeholder="01 40 05 03 43" />
                                        </div>
                                    </div>

                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Date de naissance*</label>
                                        <input type="date" className="form-control" placeholder="12/09/1985" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <div className="form-row twospaces-row reset-margin">
                                            <div className="form-group gsm-form-group col-md-6">
                                                <label className="gsm-form-label individual-text">Demandeur d’emploi*</label>
                                                <div className="dropdown gsmDropdown">
                                                    <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                        Oui / Non
                                                    </a>
                                                    <ul className="dropdown-menu gsm-dropdown-menu" >
                                                        <hr />
                                                        <li><a href="#" className="gsm-dropdown-link">Oui</a></li>
                                                        <li><a href="#" className="gsm-dropdown-link">Non</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="form-group gsm-form-group col-md-6">
                                                <label className="gsm-form-label individual-text">Si oui identifiant PE</label>
                                                <input type="text" className="form-control" placeholder="ID Pôle emploi" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="form-row singlespace-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-12">
                                        <label className="gsm-form-label individual-text">Adresse Postale*</label>
                                        <input type="text" className="form-control" placeholder="Numéro et libellé de la voie" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Code postal*</label>
                                        <input type="text" className="form-control" placeholder="Code postale" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Pays*</label>
                                        <input type="text" className="form-control" placeholder="Pays de résidence" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Etat*</label>
                                        <input type="text" className="form-control" placeholder="Etat de résidence" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Ville*</label>
                                        <input type="text" className="form-control" placeholder="Ville de résidence" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <div className="reset-padding">
                                            <label className="gsm-form-label individual-text">Avez-vous de l’expérience dans la réparation ? </label>
                                            <input type="text" className="form-control" placeholder="Etat de résidence" />
                                        </div>
                                        <div className="reset-padding mt-4">
                                            <label className="gsm-form-label individual-text">Vous nous avez connu via </label>
                                            <input type="text" className="form-control" placeholder="Etat de résidence" />
                                        </div>
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Votre demande</label>
                                        <textarea className="form-control" placeholder="Préciser votre demande" rows="5"></textarea>
                                        </div>
                                    </div>
                                    
                                    <p className="regitration-disclaimer">By submitting your info in the form above, you agree to our Terms of Use and Privacy Policy. 
                                    We may use this info to contact you and/or use data from third parties to personalize your 
                                    experience.</p>
                                    <div className="text-center">
                                    <button type="button" className="btn gsm-bg-individual btn-gsm-lg">Je m’inscris</button>
                                    </div>
                                    
                                </form>
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