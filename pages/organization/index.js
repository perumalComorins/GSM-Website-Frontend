import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function OrganizationPage() {

    const type = 'organisation.php';
    const [organpanel, setOrganpanel] = useState([]);

    useEffect(()=>{

        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("inner-page");
        userService.getAllItems(type).then((res) => {  
            setOrganpanel([1,2,3]) 
            setOrganpanel(res.json_data)
        }) 
         .catch((err) => console.error(err));  
        
    },[])
    useEffect(()=>{
        if(organpanel){
            {/* Banner jquery script Starts */}
            function BannerOverlays(){
                
                var $banner_h;
                var $banner_w;

                $(".organization-banner-content").closest("#banner-overlay").each(function(){
                    $banner_h = $('.banner-view img').height();
                    $banner_w = $('.banner-view img').width();
                    $(this).width($banner_w).height($banner_h);
                });
                $('.organization-banner-content').each(function(){
                    $banner_h = $('.banner-view img').height();
                    $(this).height($banner_h);
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
    },[organpanel])  

    return(
        <div id="wrapper">
            <div className="overlay">
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <Header/>
                <div className="oraganization-banner-section site-bannersection">
                    <div className="static-banner-organisation banner-view fullsize-banner d-none d-sm-block"  style={ {backgroundImage: `url(${organpanel.banner_section && organpanel.banner_section.bg_link})`}}>
                    </div>
                    <div className="banner-view fullsize-banner d-block d-sm-none" style={ {backgroundImage: `url('assets/images/organization-mobile-banner.png')`} }></div>
                    <div id="banner-overlay">
                        <div className="organization-banner-content">
                            <div className="banner-content">
                                <h1 className="title">{organpanel.banner_section && organpanel.banner_section.title}</h1>
                                <p className="content">
                                {organpanel.banner_section && organpanel.banner_section.desc}
                                </p>
                                <div className="btn-box-wrapper text-left mt-4">
                                    <button type="button" className="btn gsm-outline-transparent btn-gsm-statics-size">{organpanel.banner_section && organpanel.banner_section.button_name_1}</button>
                                    <button type="button" className="btn gsm-bg-white btn-gsm-statics-size mx-3">{organpanel.banner_section && organpanel.banner_section.button_name_2}</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <section class="site-body-container">
                    <div class="organization-intro-section container container-65 reset-padding">
                        <div class="intro-section text-center">
                        <h2 class="intro-title">{organpanel.banner_section && organpanel.banner_section.sub_title[0]} <span class="partner-text">{organpanel.banner_section && organpanel.banner_section.sub_title[1]}</span> {organpanel.banner_section && organpanel.banner_section.sub_title[2]}</h2>
                        <p class="intro-content">
                        {organpanel.banner_section && organpanel.banner_section.sub_desc}
                        </p>
                        </div>
                    </div> {/*What we do section */}
                    
                    <div className="satisfaction-rate d-none d-md-block" style={{backgroundImage: "url('/assets/images/map-bg.png')",}} >
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

                    <div class="training-tab-section">
                        <h2 class="individual-text text-center mt-2">{organpanel.collaborate_section && organpanel.collaborate_section.title}</h2>
                        
                        <div class="organization-tab-bar">
                            <div class="container container-65 reset-padding">
                                <ul class="nav nav-pills row reset-margin">
                                    <li class="col reset-padding"><a data-toggle="pill" href="#home" class="active align-self-center" >{organpanel.collaborate_section && organpanel.collaborate_section.training_module.title}</a></li>
                                    <li class="col reset-padding"><a data-toggle="pill" href="#menu1" class="align-self-center">{organpanel.collaborate_section && organpanel.collaborate_section.collaborate_module.title}</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="container-fluid reset-padding organization-tab-content">
                            <div class="tab-content container container-65 reset-padding">
                                <div id="home" class="tab-pane fade in active show">
                                <div class="organize-register-section">
                                    <form class="organize-registration-form">
                                        <div class="draft-continue-indicator text-right mb-5">
                                        <button type="button" class="btn gsm-bg-company">{organpanel.collaborate_section && organpanel.collaborate_section.training_module.button_name_1}</button>
                                        </div>
                                        
                                        <div class="alert alert-info alert-gsm alert-dismissible fade show">
                                        <span>{organpanel.collaborate_section && organpanel.collaborate_section.training_module.alert_box}</span>
                                        <button type="button" class="close gsm-bg-white" data-dismiss="alert">{organpanel.collaborate_section && organpanel.collaborate_section.training_module.alert_box_button}</button>
                                        </div>
                                        <div class="form-row twospaces-row reset-margin">
                                            <div class="form-group gsm-form-group col-md-6">
                                            <label class="gsm-form-label individual-text">Nom de l’organisme de formation</label>
                                            <input type="text" class="form-control" placeholder="Nom de votre structure" />
                                            </div>
                                            <div class="form-group gsm-form-group col-md-6">
                                            <label class="gsm-form-label individual-text">Nom de l’interlocuteur</label>
                                            <input type="text" class="form-control" placeholder="Prénom et NOM" />
                                            </div>
                                        </div>
                                        <div class="form-row twospaces-row reset-margin">
                                            <div class="form-group gsm-form-group col-md-6">
                                            <label class="gsm-form-label individual-text">Email*</label>
                                            <input type="text" class="form-control" placeholder="Adresse mail professionnelle" />
                                            </div>
                                            <div class="form-group gsm-form-group col-md-6">
                                            <label class="gsm-form-label individual-text">Numéro de Téléphone</label>
                                            <input type="text" class="form-control" placeholder="01 40 05 03 43" />
                                            </div>
                                        </div>
                                        <div class="form-row singlespace-row mb-4">
                                            <div class="form-group gsm-form-group col-md-12">
                                            <label class="gsm-form-label individual-text">Adresse Postale*</label>
                                            <input type="text" class="form-control" placeholder="Numéro et libellé de la voie" />
                                            </div>
                                        </div>
                                    <div class="form-row twospaces-row reset-margin">
                                            <div class="form-group gsm-form-group col-md-6">
                                            <label class="gsm-form-label individual-text">Code postal*</label>
                                            <input type="text" class="form-control" placeholder="Code postale" />
                                            </div>
                                            <div class="form-group gsm-form-group col-md-6">
                                            <label class="gsm-form-label individual-text">Pays*</label>
                                            <input type="text" class="form-control" placeholder="Pays de résidence" />
                                            </div>
                                        </div>
                                        <div class="form-row twospaces-row reset-margin">
                                            <div class="form-group gsm-form-group col-md-6">
                                            <label class="gsm-form-label individual-text">Etat*</label>
                                            <input type="text" class="form-control" placeholder="Etat de résidence" />
                                            </div>
                                            <div class="form-group gsm-form-group col-md-6">
                                            <label class="gsm-form-label individual-text">Ville*</label>
                                            <input type="text" class="form-control" placeholder="Ville de résidence" />
                                            </div>
                                        </div>
                                        
                                        <div class="form-row singlespace-row mb-4">
                                            <div class="form-group gsm-form-group col-md-12">
                                            <label class="gsm-form-label individual-text">Commentaire</label>
                                            <textarea class="form-control" placeholder="Préciser votre demande en quelqueq lignes" rows="5"></textarea>
                                            </div>
                                        </div>
                                        
                                        <div class="organize-form-submission text-center">
                                        <button type="button" class="btn gsm-bg-individual btn-gsm-lg">{organpanel.collaborate_section && organpanel.collaborate_section.training_module.button_name_2}</button>
                                        </div>
                                        
                                    </form>
                                </div>
                                </div>
                                <div id="menu1" class="tab-pane fade">
                                    <div class="organize-register-section">
                                        <form class="organize-registration-form">
                                            
                                            <div class="form-row twospaces-row reset-margin">
                                                <div class="form-group gsm-form-group col-md-6">
                                                <label class="gsm-form-label individual-text">Nom de l’organisme de formation</label>
                                                <input type="text" class="form-control" placeholder="Nom de votre structure" />
                                                </div>
                                                <div class="form-group gsm-form-group col-md-6">
                                                <label class="gsm-form-label individual-text">Nom de l’interlocuteur</label>
                                                <input type="text" class="form-control" placeholder="Prénom et NOM" />
                                                </div>
                                            </div>
                                            <div class="form-row twospaces-row reset-margin">
                                                <div class="form-group gsm-form-group col-md-6">
                                                <label class="gsm-form-label individual-text">Email*</label>
                                                <input type="text" class="form-control" placeholder="Adresse mail professionnelle" />
                                                </div>
                                                <div class="form-group gsm-form-group col-md-6">
                                                <label class="gsm-form-label individual-text">Numéro de Téléphone</label>
                                                <input type="text" class="form-control" placeholder="01 40 05 03 43" />
                                                </div>
                                            </div>
                                            <div class="form-row singlespace-row mb-4">
                                                <div class="form-group gsm-form-group col-md-12">
                                                <label class="gsm-form-label individual-text">Adresse Postale*</label>
                                                <input type="text" class="form-control" placeholder="Numéro et libellé de la voie" />
                                                </div>
                                            </div>
                                        <div class="form-row twospaces-row reset-margin">
                                                <div class="form-group gsm-form-group col-md-6">
                                                <label class="gsm-form-label individual-text">Code postal*</label>
                                                <input type="text" class="form-control" placeholder="Code postale" />
                                                </div>
                                                <div class="form-group gsm-form-group col-md-6">
                                                <label class="gsm-form-label individual-text">Pays*</label>
                                                <input type="text" class="form-control" placeholder="Pays de résidence" />
                                                </div>
                                            </div>
                                            <div class="form-row twospaces-row reset-margin">
                                                <div class="form-group gsm-form-group col-md-6">
                                                <label class="gsm-form-label individual-text">Etat*</label>
                                                <input type="text" class="form-control" placeholder="Etat de résidence" />
                                                </div>
                                                <div class="form-group gsm-form-group col-md-6">
                                                <label class="gsm-form-label individual-text">Ville*</label>
                                                <input type="text" class="form-control" placeholder="Ville de résidence" />
                                                </div>
                                            </div>
                                            
                                            <div class="form-row singlespace-row mb-4">
                                                <div class="form-group gsm-form-group col-md-12">
                                                <label class="gsm-form-label individual-text">Commentaire</label>
                                                <textarea class="form-control" placeholder="Préciser votre demande en quelqueq lignes" rows="5"></textarea>
                                                </div>
                                            </div>
                                            
                                            <div class="organize-form-submission text-center">
                                            <button type="button" class="btn gsm-bg-individual btn-gsm-lg">{organpanel.collaborate_section && organpanel.collaborate_section.button_name}</button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>

                                <p class="individual-text text-center question-text">{organpanel.collaborate_section && organpanel.collaborate_section.training_module.footer_title}</p>
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
