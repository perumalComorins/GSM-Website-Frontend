import { useContext, useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import { userService } from '../../services/user.service';

export default function IndividualPage() {

        const type = 'individual.php';
        //const [datas, setDatas] = useState(null);
        const [individualpanel, setIndividualpanel] = useState([]);
        const [satisfyCard, setSatisfyCard] = useState([]);
        var perChunk = 2;
        
        useEffect(()=>{
            document.querySelector("body");
            let body_ele = document.querySelector("body");
            body_ele.className='';
            body_ele.classList.add("inner-page");
    
            userService.getAllItems(type).then((res) => { 
                setIndividualpanel(res.json_data);
                setSatisfyCard(res.json_data.satisfication_section);
            }) 
             .catch((err) => console.error(err)); 
              
        },[]) 

        useEffect(()=>{

            if(individualpanel){
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

                    var totalfaqItems = $('.faq-item').length;
                    var currentfaqIndex = $('div.faq-item.active').index() + 1;
                    var currentfaqIndex_active;
                    var downfaq_index;
                    var autofaqIndex_active;
                    var autodownfaq_index;
                    
                    // $('.testimonial_num').html(''+currentIndex+'/'+totalItems+'');
                    $('.faq_num').html(''+currentfaqIndex+'');

                    $(".faq-next").click(function(){
                        currentfaqIndex_active = $('div.faq-item.active').index() + 2;
                        if (totalfaqItems >= currentfaqIndex_active)
                        {
                            downfaq_index= $('div.faq-item.active').index() + 2;
                            //$('.testimonial_num').html(''+currentIndex_active+'/'+totalItems+'');
                            $('.faq_num').html(''+currentfaqIndex_active+'');
                        }
                    });

                    $(".faq-prev").click(function(){
                        
                        downfaq_index=downfaq_index-1;
                        if (downfaq_index >= 1 ){
                            //$('.testimonial_num').html(''+downfaq_index+'/'+totalItems+'');
                            $('.faq_num').html(''+downfaq_index+'');
                        }
                    });

                    $('#faqIndicators').carousel({
                        interval: 2000
                    });
                    
                    $("#faqIndicators").on('slide.bs.carousel', function (e) {
                        autofaqIndex_active = $('div.faq-item.active').index() + 2;
                        $(".faq-next").click(function(e){
                                e.preventDefault();
                        });
                        $(".faq-prev").click(function(e){
                                e.preventDefault();
                        })
                          if (totalfaqItems >= autofaqIndex_active){
                            autodownfaq_index= $('div.faq-item.active').index() + 2;
                            $('.faq_num').html(''+autodownfaq_index+'');
                          }
                          
                          else{
                            $('.faq_num').html(''+currentfaqIndex+''); 
                          }
                          
                    });
                    
                    
                });
            }

            
        },[individualpanel])

        
        var result = satisfyCard.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/perChunk)
          
            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [] // start a new chunk
            }
          
            resultArray[chunkIndex].push(item)
          
            return resultArray
        }, [])
        

    return (
        <div id="wrapper">
            <div className="overlay">             
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <Header/>
                <div className="site-bannersection">
                    <div className="banner-view smallsize-banner d-none d-sm-block" style={ {backgroundImage: `url(${individualpanel.banner_section && individualpanel.banner_section.image_url})`}}>
                    </div>
                    <div className="banner-view smallsize-banner d-block d-sm-none" style={ {backgroundImage: `url('/assets/images/quote-request-mobile.png')`}}>
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

                    {/* <SatisfactionCardSlider value = {result}/> */}
                    {/*satisfication_section*/}


                    <div className="container container-85 reset-padding">
                        <div id="satisfaction-slider-web" class="satisfaction-slider carousel slide d-none d-lg-block" data-ride="carousel" data-interval="false" data-pause="hover">
                            <div class="carousel-inner">
                                {result && result.map((items, index) => 
                                <div className={`carousel-item ${index==0 ? 'active':''}`}>
                                    <div class="row mx-0">
                                            {items && items.map((list,i)=>
                                            <div class="card satisfaction-card col-sm-6">
                                                <figure>
                                                        <label class="satisfaction-label">{list.rating}</label>
                                                        <div class="card-body froentside-panel row reset-margin">
                                                            <div class="col content-block">
                                                            <h5 class="card-title">{list.title}</h5>
                                                            <p class="card-text">{list.desc}</p> 
                                                            </div>
                                                            <div class="col picture-block">
                                                            <img src={list.photo_url} class="img-fluid"/>
                                                            </div> 
                                                        </div>
                                                        <figcaption>
                                                            <span class="backdrop-border"></span>
                                                            <div class="card-header row">
                                                                <div class="col-9 students-satisfaction">
                                                                    <div class="row reset-margin">
                                                                        <div class="col-6 students-satisfaction-percentage">
                                                                        <div class="row reset-margin">
                                                                            <div class="col-5 satifaction-percentage">{list.percentage}</div>
                                                                            <div class="col-7 satifaction-text reset-padding">{list.label}</div>
                                                                        </div>
                                                                        </div>
                                                                        <div class="col-6 students-number-count reset-padding">
                                                                        <div class="row reset-margin">
                                                                            <div class="col-2 students-count">{list.count}</div>
                                                                            <div class="col-10 students-text reset-padding">{list.count_title}</div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3 text-center brand-logos reset-padding">
                                                                    {/* <div id="demo" class="carousel slide" data-ride="carousel">
                                                                        <div class="row reset-margin carousel-inner">
                                                                            <img src="images/brand-logo-1.png" class="carousel-item active"/>
                                                                            <img src="images/brand-logo-1.png" class="carousel-item"/>
                                                                        </div>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                            <div class="card-body reset-padding">
                                                                <ul class="backdrop-list">
                                                                    <li class="backdrop-item">
                                                                        <span className="item-heighlight">{list.obj_title}</span>
                                                                        {list.objective}
                                                                    </li>
                                                                    <li className="backdrop-item">
                                                                        <span className="item-heighlight">{list.edu_title}</span>
                                                                        {list.educational_terms}
                                                                    </li>
                                                                    <li className="backdrop-item">
                                                                        <span className="item-heighlight">{list.prereq_title}</span>
                                                                        {list.prerequisite}
                                                                    </li>
                                                                    <li className="backdrop-item">
                                                                        <span className="item-heighlight">{list.dur_title}</span>
                                                                        {list.duration} 
                                                                    </li>
                                                                    <li className="backdrop-item">
                                                                        <span className="item-heighlight">{list.loc_title}</span>
                                                                        {list.location}
                                                                    </li>
                                                                    <li className="backdrop-item">
                                                                        <span className="item-heighlight">{list.ind_title}</span>
                                                                        {list.individual}
                                                                    </li>
                                                                </ul>
                                                            </div> 
                                                            <div class="card-footer">
                                                                <button className="btn gsm-outline-individual  btn-gsm-statics-size pull-left">{list.button_name}</button>
                                                                <button className="btn gsm-bg-individual btn-gsm-statics-size pull-right">{list.button_name_2}</button>
                                                            </div>
                                                        </figcaption>
                                                </figure>
                                            </div>)}

                                            
                                        </div>
                                </div> )}

                                
                            </div>

                            {/* <!-- Indicators --> */}
                            <ul class="carousel-indicators">
                                {result && result.map((items, index) => 
                                <li data-target="#satisfaction-slider-web" data-slide-to={index} class={index==0 ? 'active':''}></li>)}
                            </ul>
                            
                        </div>

                        
                        <div id="satisfaction-slider-mobile" class="satisfaction-slider carousel slide d-block d-lg-none" data-ride="carousel" data-interval="false" data-pause="hover">
                            <div class="carousel-inner">
                                {satisfyCard && satisfyCard.map((items, index) => 
                                <div class={`carousel-item ${index==0 ? 'active':''}`}>
                                    <div class="row mx-0">
                                            <div class="card satisfaction-card col-sm-12">
                                            <figure>
                                                    <label class="satisfaction-label">{items.rating}</label>
                                                    <div class="card-body froentside-panel row reset-margin">
                                                        <div class="col content-block">
                                                        <h5 class="card-title">{items.title}</h5>
                                                        <p class="card-text">{items.desc}</p> 
                                                        </div>
                                                        <div class="col picture-block">
                                                        <img src={items.photo_url} class="img-fluid"/>
                                                        </div> 
                                                    </div>
                                                    <figcaption>
                                                        <span class="backdrop-border"></span>
                                                        <div class="card-header row">
                                                            <div class="col-10 students-satisfaction">
                                                                <div class="row reset-margin">
                                                                    <div class="col-6 students-satisfaction-percentage">
                                                                    <div class="row reset-margin">
                                                                        <div class="col-4 satifaction-percentage">{items.percentage}</div>
                                                                        <div class="col-8 satifaction-text reset-padding">{items.label}</div>
                                                                    </div>
                                                                    </div>
                                                                    <div class="col-6 students-number-count reset-padding">
                                                                    <div class="row reset-margin">
                                                                        <div class="col-2 students-count">{items.count}</div>
                                                                        <div class="col-10 students-text reset-padding">{items.count_title}</div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-2 text-center brand-logos reset-padding">
                                                                {/* <div id="demo" class="carousel slide" data-ride="carousel">
                                                                    <div class="row reset-margin carousel-inner">
                                                                        <img src="images/brand-logo-1.png" class="carousel-item active"/>
                                                                        <img src="images/brand-logo-1.png" class="carousel-item"/>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                        <div class="card-body reset-padding">
                                                            <ul class="backdrop-list">
                                                                <li class="backdrop-item">
                                                                    <span class="item-heighlight">{items.obj_title}</span>
                                                                    {items.objective}
                                                                </li>
                                                                <li class="backdrop-item">
                                                                    <span class="item-heighlight">{items.edu_title}</span>
                                                                    {items.educational_terms}
                                                                </li>
                                                                <li class="backdrop-item">
                                                                    <span class="item-heighlight">{items.prereq_title}</span>
                                                                    {items.prerequisite}
                                                                </li>
                                                                <li class="backdrop-item">
                                                                    <span class="item-heighlight">{items.dur_title}</span>
                                                                    {items.duration} 
                                                                </li>
                                                                <li class="backdrop-item">
                                                                    <span class="item-heighlight">{items.loc_title}</span>
                                                                    {items.location}
                                                                </li>
                                                                <li class="backdrop-item">
                                                                    <span class="item-heighlight">{items.ind_title}</span>
                                                                    {items.individual}
                                                                </li>
                                                            </ul>
                                                        </div> 
                                                        <div class="card-footer">
                                                            <button class="btn gsm-outline-individual pull-left">{items.button_name}</button>
                                                            <button class="btn gsm-bg-individual pull-right">{items.button_name_2}</button>
                                                        </div>
                                                    </figcaption>
                                            </figure>
                                            </div>

                                            
                                        </div>
                                </div>)}

                                
                            </div>
                                
                                
                                <ul class="carousel-indicators">
                                    {satisfyCard && satisfyCard.map((items, index) => 
                                    <li data-target="#satisfaction-slider-mobile" data-slide-to={index} className={index==0 ? 'active':''}></li>
                                    )}
                                </ul>
                                
                            </div>


                        
                    </div>
                    {/*End Satisfication_section*/}

                    {/*PeopleFaq*/}                    
                    <div className="faq-section company-bg">
                        <div className="container container-70 reset-padding">
                            <div className="row reset-margin">
                                <div className="col-md-5 reset-padding faq-accordian-slider">
                                    <div class="faq-label company-text">{individualpanel.faq_section && individualpanel.faq_section.title}</div>
                                        <div id="faqIndicators" className="carousel slide" data-ride="carousel" data-wrap="false" data-interval="false">
                                            <div className="carousel-inner">
                                                {individualpanel.faq_section && individualpanel.faq_section.student_details.map((items, index) => 
                                                    <div className={`carousel-item faq-item ${index == 0 && 'active'}`}>
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
                                                <div className="card-header" id={`faqhead${index + 1}`}>
                                                    <a href="#" className={`btn btn-header-link ${index > 0 ? 'collapsed': ''}`} data-toggle="collapse" data-target={`#faq${index + 1}`}
                                                        aria-expanded={index == 0 ? 'true' : 'false'} aria-controls={`faq${index + 1}`}>{items.quest}</a>
                                                </div>

                                                <div id={`faq${index + 1}`} className={`collapse ${index == 0 ? 'show' : ''}`} aria-labelledby={`faqhead${index + 1}`} data-parent="#faq">
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
                    {/*End PeopleFaq*/}                    
                            
                    
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
                <section class="heightlight-footer-box">
                        <div class="container container-1160">
                            <div class="row reset-margin">
                            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 box-content">
                                <p class="box-para">
                                    {individualpanel.heighligted_box && individualpanel.heighligted_box.content_area}
                                </p>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 box-link align-self-center">
                                <a href="#" class="box-btn">{individualpanel.heighligted_box && individualpanel.heighligted_box.button_text}</a>
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