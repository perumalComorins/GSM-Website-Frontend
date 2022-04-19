import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ContactFaqPage(){
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
                });
            }
        },[datas])
    return(
        <div id="wrapper">
            <div className="overlay"></div>
            <Sidepanel/>

            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header className="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>

                <div className="site-bannersection contactFaq-banner-resizer">
                    <div className="banner-view threebyfourth-size-banner">
                        <img src="/assets/images/contact-faq-bg.png" className="banner-img"/>
                    </div>
                    <div className="threebyfour-banner-cover-overlay">
                        <div className="threebyfour-banner-cover contactfaq-banner-content threebyfourth-banner">
                            <div className="banner-content text-center">
                                <h1 className="title">Une question ?</h1>
                                <form name="contactfaq-searchForm" className="container container-45 contactfaq-searchForm search-form my-2">
                                    <input name="search-for-contactfaq" className="search-for-contactfaq form-control mr-sm-0 rounded-0 border-right-0" type="search" placeholder="Comment pouvons-nous vous aider ?" aria-label="Search" />
                                    <button className="btn btn-search-gsm gsm-bg-individual border-0 rounded-0 my-sm-0 waves-effect waves-light" type="subuttonbmit"><img src="/assets/images/icon-feather-search.png" style={ {width:"16px",height:"16px"} } /></button>
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
                                    <li className="col text-center list-active">
                                    <a data-toggle="pill" href="#particulier" className="active" >
                                        <img src="/assets/images/noun_individual.png" />
                                        <h2>Particulier</h2>
                                        <p>Vous n’avez pas d’expérience dans la réparation et vous souhaitez vous former. </p>
                                    </a>
                                    </li>
                                    <li className="col text-center">
                                    <a data-toggle="pill" href="#entreprise">
                                        <img src="/assets/images/noun_user_favorite.png" />
                                        <h2>Entreprise</h2>
                                        <p>Vous êtes un professionnel du secteur et vous voulez faire monter vos équipes en compétence 
                                        ou reconnaître leur qualification.</p>
                                    </a>
                                    </li>
                                    <li className="col text-center">
                                    <a data-toggle="pill" href="#partenaire">
                                        <img src="/assets/images/noun_organization.png" />
                                        <h2>Partenaire</h2>
                                        <p>Vous êtes un organisme de formation ou une association 
                                        et vous souhaitez proposer une collaboration à GSM Master. </p>
                                    </a>
                                    </li>
                                </ul>

                                <div id="contactfaq-nav-mobile" className="contactfaq-nav-slider carousel slide d-block d-lg-none" data-ride="carousel" data-interval="false" data-pause="hover">
                                    <ul className="carousel-inner nav nav-pills row reset-margin">
                                        <li className="carousel-item col-sm-12 text-center active list-active">
                                            <a data-toggle="pill" href="#particulier" className="active" >
                                                    <img src="/assets/images/noun_individual.png" />
                                                    <h2>Particulier</h2>
                                                    <p>The mobile product repair market is booming. Become a player in this market on your own 
                                                    or as an employee. As an existing repairer or business manager, increase or certify the skills acquired.</p>
                                            </a>
                                        </li>
                                        <li className="carousel-item col-sm-12 text-center">
                                            <a data-toggle="pill" href="#entreprise">
                                                    <img src="/assets/images/noun_user_favorite.png" />
                                                    <h2>Entreprise</h2>
                                                    <p>Vous êtes un professionnel du secteur et vous voulez faire monter vos équipes en compétence 
                                                    ou reconnaître leur qualification.</p>
                                            </a>
                                        </li>
                                        <li className="carousel-item col-sm-12 text-center">
                                            <a data-toggle="pill" href="#partenaire">
                                                    <img src="/assets/images/noun_organization.png" />
                                                    <h2>Partenaire</h2>
                                                    <p>Vous êtes un organisme de formation ou une association 
                                                    et vous souhaitez proposer une collaboration à GSM Master. </p>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="carousel-indicators">
                                        <li data-target="#contactfaq-nav-mobile" data-slide-to="0" className="active"></li>
                                        <li data-target="#contactfaq-nav-mobile" data-slide-to="1"></li>
                                        <li data-target="#contactfaq-nav-mobile" data-slide-to="2"></li>
                                    </ul>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        <div className="container-fluid reset-padding organization-tab-content">
                            <div className="tab-content container container-55 reset-padding">
                                <div id="particulier" class="tab-pane fade in active show">
                                    <div id="contact-faq-accordian" class="col-md-12 reset-padding faq-accordian-list">
                                        <h2 class="title">Questions fréquentes - particulier</h2>
                                        <div class="accordion" id="particulier-faq">
                                            <div class="card">
                                                <div class="card-header" id="particulier-faqhead1">
                                                    <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#particulier-faq1"
                                                    aria-expanded="true" aria-controls="particulier-faq1">Entrer votre question ici</a>
                                                </div>

                                                <div id="particulier-faq1" class="collapse show" aria-labelledby="particulier-faqhead1" data-parent="#particulier-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="particulier-faqhead2">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#particulier-faq2"
                                                    aria-expanded="false" aria-controls="particulier-faq2">Entrer votre question ici</a>
                                                </div>

                                                <div id="particulier-faq2" class="collapse" aria-labelledby="particulier-faqhead2" data-parent="#particulier-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="particulier-faqhead3">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#particulier-faq3"
                                                    aria-expanded="false" aria-controls="particulier-faq3">Entrer votre question ici</a>
                                                </div>

                                                <div id="particulier-faq3" class="collapse" aria-labelledby="particulier-faqhead3" data-parent="#particulier-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="particulier-faqhead4">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#particulier-faq4"
                                                    aria-expanded="false" aria-controls="particulier-faq4">Entrer votre question ici</a>
                                                </div>

                                                <div id="particulier-faq4" class="collapse" aria-labelledby="particulier-faqhead4" data-parent="#particulier-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="particulier-faqhead5">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#particulier-faq5"
                                                    aria-expanded="false" aria-controls="particulier-faq5">Entrer votre question ici</a>
                                                </div>

                                                <div id="particulier-faq5" class="collapse" aria-labelledby="particulier-faqhead5" data-parent="#particulier-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="faqhead6">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#particulier-faq6"
                                                    aria-expanded="false" aria-controls="particulier-faq6">Entrer votre question ici</a>
                                                </div>

                                                <div id="particulier-faq6" class="collapse" aria-labelledby="faqhead6" data-parent="#particulier-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div id="entreprise" class="tab-pane fade">
                                    <div id="contact-faq-accordian" class="col-md-12 reset-padding faq-accordian-list">
                                        <h2 class="title">Questions fréquentes - entreprise</h2>
                                        <div class="accordion" id="entreprise-faq">
                                            <div class="card">
                                                <div class="card-header" id="entreprise-faqhead1">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#entreprise-faq1"
                                                    aria-expanded="true" aria-controls="entreprise-faq1">Entrer votre question ici</a>
                                                </div>

                                                <div id="entreprise-faq1" class="collapse" aria-labelledby="entreprise-faqhead1" data-parent="#entreprise-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="entreprise-faqhead2">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#entreprise-faq2"
                                                    aria-expanded="true" aria-controls="entreprise-faq2">Entrer votre question ici</a>
                                                </div>

                                                <div id="entreprise-faq2" class="collapse" aria-labelledby="entreprise-faqhead2" data-parent="#entreprise-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="entreprise-faqhead3">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#entreprise-faq3"
                                                    aria-expanded="true" aria-controls="entreprise-faq3">Entrer votre question ici</a>
                                                </div>

                                                <div id="entreprise-faq3" class="collapse" aria-labelledby="entreprise-faqhead3" data-parent="#entreprise-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="entreprise-faqhead4">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#entreprise-faq4"
                                                    aria-expanded="true" aria-controls="entreprise-faq4">Entrer votre question ici</a>
                                                </div>

                                                <div id="entreprise-faq4" class="collapse" aria-labelledby="entreprise-faqhead4" data-parent="#entreprise-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="entreprise-faqhead5">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#entreprise-faq5"
                                                    aria-expanded="true" aria-controls="entreprise-faq5">Entrer votre question ici</a>
                                                </div>

                                                <div id="entreprise-faq5" class="collapse" aria-labelledby="entreprise-faqhead5" data-parent="#entreprise-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="entreprise-faqhead6">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#entreprise-faq6"
                                                    aria-expanded="true" aria-controls="entreprise-faq6">Entrer votre question ici</a>
                                                </div>

                                                <div id="entreprise-faq6" class="collapse" aria-labelledby="entreprise-faqhead6" data-parent="#entreprise-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div id="partenaire" class="tab-pane fade">
                                    <div id="contact-faq-accordian" class="col-md-12 reset-padding faq-accordian-list">
                                        <h2 class="title">Questions fréquentes - partenaire</h2>
                                        <div class="accordion" id="partenaire-faq">
                                            <div class="card">
                                                <div class="card-header" id="partenaire-faqhead1">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#partenaire-faq1"
                                                    aria-expanded="true" aria-controls="partenaire-faq1">Entrer votre question ici</a>
                                                </div>

                                                <div id="partenaire-faq1" class="collapse" aria-labelledby="partenaire-faqhead1" data-parent="#partenaire-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="partenaire-faqhead2">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#partenaire-faq2"
                                                    aria-expanded="true" aria-controls="partenaire-faq2">Entrer votre question ici</a>
                                                </div>

                                                <div id="partenaire-faq2" class="collapse" aria-labelledby="partenaire-faqhead2" data-parent="#partenaire-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="partenaire-faqhead3">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#partenaire-faq3"
                                                    aria-expanded="true" aria-controls="partenaire-faq3">Entrer votre question ici</a>
                                                </div>

                                                <div id="partenaire-faq3" class="collapse" aria-labelledby="partenaire-faqhead3" data-parent="#partenaire-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="partenaire-faqhead4">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#partenaire-faq4"
                                                    aria-expanded="true" aria-controls="partenaire-faq4">Entrer votre question ici</a>
                                                </div>

                                                <div id="partenaire-faq4" class="collapse" aria-labelledby="partenaire-faqhead4" data-parent="#partenaire-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="partenaire-faqhead5">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#partenaire-faq5"
                                                    aria-expanded="true" aria-controls="partenaire-faq5">Entrer votre question ici</a>
                                                </div>

                                                <div id="partenaire-faq5" class="collapse" aria-labelledby="partenaire-faqhead5" data-parent="#partenaire-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="partenaire-faqhead6">
                                                    <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#partenaire-faq6"
                                                    aria-expanded="true" aria-controls="partenaire-faq6">Entrer votre question ici</a>
                                                </div>

                                                <div id="partenaire-faq6" class="collapse" aria-labelledby="partenaire-faqhead6" data-parent="#partenaire-faq">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="appointment-result-box container container-55 reset-padding">
                                <div className="contactfaq-result text-center">
                                        <h2 className="individual-text result-title text-center">
                                            Oops !! we couldn't find any results
                                        </h2>
                                        <img src="/assets/images/opps-object.png" className="img-fluid"/>
                                        <button type="button" className="btn btn-gsm-md gsm-bg-individual">Être contacté</button>
                                </div>
                            </div>

                            <div className="appointment-content container container-45 reset-padding">
                                <div className="contactfaq-appointment">
                                        <h2 className="individual-text appointment-title text-center">
                                            Vous ne trouvez pas votre solution ? Prenez rendez vous avec notre équipe
                                        </h2>
                                        <div className="appointment-card card mx-auto">
                                            <div className="card-body">
                                            <div className="row">
                                                <div className="col-3">
                                                    <img src="/assets/images/noun_Appointment-icon.png" className="img-fluid"/>
                                                </div>
                                                <div className="col-9">
                                                    <h3 className="card-title">Prenez rendez-vous</h3>
                                                    <p className="card-text">
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