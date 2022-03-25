import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function Job(){
        const [datas, setDatas] = useState(null);
        useEffect(()=>{
            setDatas([1,2,3])
            
        },[])
        useEffect(()=>{
            if(datas && datas.length>0){
                {/* Banner jquery script Starts */}
                function BannerOverlays(){
                    var $banner_h;
                    var $banner_w;

                    $(".requirement-bannersection .threebyfour-banner-cover-overlay").each(function(){
                        $banner_w = $('.requirement-bannersection .banner-view img').width();
                        $banner_h = $('.requirement-bannersection .banner-view img').height();
                        $(this).width($banner_w).height($banner_h);
                    });

                    $('.threebyfour-banner-cover.requirement-banner-content').each(function(){
                        $banner_w = $('.requirement-bannersection .banner-view img').width();
                        $banner_h = $('.requirement-bannersection .banner-view img').height();
                        $(this).width($banner_w).height($banner_h);
                    });
                }

                $(window).resize(function(){ 
                    BannerOverlays();
                }); {/* Banner jquery script End */}
                $(document).ready(function () {
                    BannerOverlays();

                    $('#contactfaq-nav li a').on('click', function(event) {
                        $("#contactfaq-nav li").removeclassName("list-active");
                        $(this).parent('').addclassName("list-active");
                        event.preventDefault();
                    });
                    $('#contactfaq-nav-mobile .carousel-inner li a').on('click', function(event) {
                            $("#contactfaq-nav-mobile .carousel-inner li").removeclassName("list-active");
                            $(this).parents('').addclassName("list-active");
                            event.preventDefault();
                    });
                });
            }
        },[datas])
    return(
        <div id="wrapper">
            <div className="overlay">
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header className="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                <div className="site-bannersection requirement-bannersection">
                    <div className="banner-view threebyfourth-size-banner">
                        <img src="/assets/images/recuritment-banner.png" className="banner-img"/>
                    </div>
                    <div className="threebyfour-banner-cover-overlay">
                        <div className="threebyfour-banner-cover requirement-banner-content threebyfourth-banner">
                                <div className="banner-content text-center">
                                    <h1 className="title">Nous sommes un puzzleaux multiples solutions</h1>
                                </div>
                                <div className="training-tab-section requirement-tab-section">
                                    <div className="organization-tab-bar">
                                        <div className="container container-60 reset-padding">
                                            <ul className="nav nav-pills row reset-margin">
                                                <li className="col reset-padding">
                                                    <span className="needs_span">Nos besoins</span>
                                                    <a data-toggle="pill" href="#particulier" className="active" >
                                                        Les offres d'emploichez GSM Master
                                                    </a>
                                                </li>
                                                <li className="col reset-padding align-self-end">
                                                    <a data-toggle="pill" href="#entreprise">
                                                        Les offres d'emploi chez nos partenaires
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                        
                    </div>
                </div>

                <section className="site-body-container">
                    <div className="training-tab requirement-tab">
                        <div className="container-fluid reset-padding organization-tab-content">
                            <div className="tab-content reset-padding">
                                <div id="particulier" className="tab-pane fade in active show">
                                    <div className="tab-pane-titleblog reset-padding">
                                        <h2 className="individual-text">Les offres d'emploi chez GSM Master</h2>
                                        <p className="individual-text">
                                            Vous voulez rejoindre une entreprise établie dans la réparation avec 
                                            une qualité de service reconnue ? Vous êtes passionné/e et dynamique et 
                                            vous cherchez de nouvelles opportunités. Si vous souhaitez contribuer à 
                                            la structuration de la filière, rejoignez notre équipe !
                                        </p>
                                    </div>
                                    <div className="tab-pane-banner">
                                        <img src="/assets/images/taba-banner-requirement.png" className="img-fluid"/>
                                    </div>

                                    
                                    <div className="tab-pane-filterform">
                                        <form name="job-filterform" className="job-filterform row reset-margin">
                                            <div className="col job-filterform-col">
                                                <div className="form-group row mb-4 mx-0">
                                                    <label for="inputPassword" className="col-sm-4 col-form-label align-self-center reset-padding">Rechercher</label>
                                                    <div className="col-sm-8 align-self-center reset-padding">
                                                        <div className="form-group gsmform-search-group has-search">
                                                            <input type="text" className="form-control" placeholder="Search" />
                                                            <span className="fa fa-search form-control-feedback filter-search-icon"></span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="form-group row reset-margin">
                                                    <label for="inputPassword" className="col-sm-4 col-form-label align-self-center reset-padding">Ville</label>
                                                    <div className="col-sm-8 align-self-center reset-padding">
                                                        <div className="dropdown gsmDropdown">
                                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                                Location
                                                            </a>
                                                            <ul className="dropdown-menu gsm-dropdown-menu">
                                                                <hr />
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Paris
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Italy
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Germany
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-1 job-filterform-col"></div>
                                            <div className="col job-filterform-col">
                                                <div className="form-group row mb-4 mx-0">
                                                    <label for="inputPassword" className="col-sm-4 col-form-label align-self-center reset-padding">Nom du poste</label>
                                                    <div className="col-sm-8 align-self-center reset-padding">
                                                        <div className="dropdown gsmDropdown">
                                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                                Designation
                                                            </a>
                                                            <ul className="dropdown-menu gsm-dropdown-menu" >
                                                                <hr />
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Designer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Developer
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row reset-margin">
                                                    <label for="inputPassword" className="col-sm-4 col-form-label align-self-center reset-padding">Type de contrat</label>
                                                    <div className="col-sm-8 align-self-center reset-padding">
                                                        <div className="dropdown gsmDropdown">
                                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                                Part time / Full time
                                                            </a>
                                                            <ul className="dropdown-menu gsm-dropdown-menu">
                                                                <hr />
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Part time
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Full time
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </form>

                                    </div>

                                    <div id="jobs-accordian" className="col-md-12 reset-padding job-accordian-list">
                                    <div className="accordion" id="job">
                                        <div className="card">
                                            <div className="card-header" id="jobhead1">
                                                <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#job1"
                                                aria-expanded="true" aria-controls="job1">
                                                        <div className="col-md-3 job-company-icon reset-padding">
                                                            <img src="/assets/images/gsmmaster_logo.png" className="img-fluid"/>
                                                        </div>
                                                        <div className="col-md-9 job-title align-self-center">
                                                            <h2>Trainer Business Expert</h2>
                                                            <span className="company-name">Company name: GSM Master</span>
                                                            <span className="company-location">Location: Paris</span>
                                                        </div>
                                                </a>
                                            </div>

                                            <div id="job1" className="collapse" aria-labelledby="jobhead1" data-parent="#job">
                                                <div className="card-body">
                                                    <ul className="job-info-list">
                                                        <li>Location: Paris</li>
                                                        <li>Experience: 1+ Year</li>
                                                        <li>Department: Marketing</li>
                                                        <li>Salary: 5,000Euro</li>
                                                    </ul>
                                                    <div className="job_editors">
                                                        <p>
                                                            We are looking for o Ul/UX designer with a special place in his heart 
                                                            for designing and the ability to work in a fast-paced entrepreneurial 
                                                            environment. You should get excited about creating beautiful-looking 
                                                            consumer products (Apps/ Websites/Graphics) that are simple to use, 
                                                            intuitive and responsive.
                                                        </p>
                                                        <h4>Responsibilities</h4>
                                                        <ul>
                                                            <li>
                                                                Execute all visual design stages from concept to final hand over 
                                                                to the technology team 
                                                            </li>
                                                            <li>
                                                                Collaborate with product managers and tech team throughout the design 
                                                                life cycle such as product wireframes, user flows, information architecture. mockups, and visual design. 
                                                            </li>
                                                            <li>
                                                                Design new products, user interfaces. and user experiences from scratch 
                                                                across multiple platforms mobile, desktop, applications. 
                                                            </li>
                                                        </ul>
                                                        <h4>Requirements</h4>
                                                        <ul>
                                                            <li>
                                                                3+ years of experience in Graphics, Illustration & UI/UX design, Formal education in UX/Ul Design, 
                                                                Interaction Design, Motion, Graphic Design, or related field of study is a plus. 
                                                            </li>
                                                            <li>Good aesthetic sense especially in the domains of typography and color theory. </li>
                                                            <li>Strong online portfolio showcasing your best work.</li>
                                                            <li>You must have proven skills with Adobe Suite (Photoshop. 
                                                                Illustrator, After Effects, XD), Sketch, Marvel, Jiro, 
                                                                Trello, Zeplin etc.</li>
                                                        </ul>
                                                    </div>
                                                    <h4>Skills</h4>
                                                    <ul className="job-skill-lists">
                                                        <li>Management</li>
                                                        <li>Motor skillst</li>
                                                        <li>French</li>
                                                    </ul>
                                                    
                                                    <div className="row reset-margin">
                                                        <div className="col-md-4 reset-padding job-curd-operation">
                                                            <h3 className="individual-text">Job Creation Date</h3>
                                                            <label>December 27, 2021</label>
                                                        </div>
                                                        <div className="col-md-4 reset-padding job-curd-operation">
                                                            <h3 className="individual-text">Recruitment Period</h3>
                                                            <label>March 15, 2022 to May 2, 2022</label>
                                                        </div>
                                                        <div className="col-md-4 reset-padding">

                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn gsm-bg-individual btn-applynow"  style={ {marginTop: "110px",} } >Apply now</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                                <div className="card-header" id="jobhead2">
                                                <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#job2"
                                                aria-expanded="true" aria-controls="job2">
                                                        <div className="col-md-3 job-company-icon reset-padding">
                                                            <img src="/assets/images/gsmmaster_logo.png" className="img-fluid"/>
                                                        </div>
                                                        <div className="col-md-9 job-title align-self-center">
                                                            <h2>Trainer Business Expert</h2>
                                                            <span className="company-name">Company name: GSM Master</span>
                                                            <span className="company-location">Location: Paris</span>
                                                        </div>
                                                </a>
                                                </div>

                                                <div id="job2" className="collapse" aria-labelledby="jobhead2" data-parent="#job">
                                                    <div className="card-body">
                                                        <ul className="job-info-list">
                                                            <li>Location: Paris</li>
                                                            <li>Experience: 1+ Year</li>
                                                            <li>Department: Marketing</li>
                                                            <li>Salary: 5,000Euro</li>
                                                        </ul>
                                                        <div className="job_editors">
                                                            <p>
                                                                We are looking for o Ul/UX designer with a special place in his heart 
                                                                for designing and the ability to work in a fast-paced entrepreneurial 
                                                                environment. You should get excited about creating beautiful-looking 
                                                                consumer products (Apps/ Websites/Graphics) that are simple to use, 
                                                                intuitive and responsive.
                                                            </p>
                                                            <h4>Responsibilities</h4>
                                                            <ul>
                                                                <li>
                                                                    Execute all visual design stages from concept to final hand over 
                                                                    to the technology team 
                                                                </li>
                                                                <li>
                                                                    Collaborate with product managers and tech team throughout the design 
                                                                    life cycle such as product wireframes, user flows, information architecture. mockups, and visual design. 
                                                                </li>
                                                                <li>
                                                                    Design new products, user interfaces. and user experiences from scratch 
                                                                    across multiple platforms mobile, desktop, applications. 
                                                                </li>
                                                            </ul>
                                                            <h4>Requirements</h4>
                                                            <ul>
                                                                <li>
                                                                    3+ years of experience in Graphics, Illustration & UI/UX design, Formal education in UX/Ul Design, 
                                                                    Interaction Design, Motion, Graphic Design, or related field of study is a plus. 
                                                                </li>
                                                                <li>Good aesthetic sense especially in the domains of typography and color theory. </li>
                                                                <li>Strong online portfolio showcasing your best work.</li>
                                                                <li>You must have proven skills with Adobe Suite (Photoshop. 
                                                                    Illustrator, After Effects, XD), Sketch, Marvel, Jiro, 
                                                                    Trello, Zeplin etc.</li>
                                                            </ul>
                                                        </div>
                                                        <h4>Skills</h4>
                                                        <ul className="job-skill-lists">
                                                            <li>Management</li>
                                                            <li>Motor skillst</li>
                                                            <li>French</li>
                                                        </ul>
                                                        
                                                        <div className="row reset-margin">
                                                            <div className="col-md-4 reset-padding job-curd-operation">
                                                                <h3 className="individual-text">Job Creation Date</h3>
                                                                <label>December 27, 2021</label>
                                                            </div>
                                                            <div className="col-md-4 reset-padding job-curd-operation">
                                                                <h3 className="individual-text">Recruitment Period</h3>
                                                                <label>March 15, 2022 to May 2, 2022</label>
                                                            </div>
                                                            <div className="col-md-4 reset-padding">

                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn gsm-bg-individual btn-applynow" style={ {marginTop: "110px",} }>Apply now</button>
                                                    </div>
                                                </div>
                                        </div>

                                        <div className="card">
                                                <div className="card-header" id="jobhead3">
                                                <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#job3"
                                                aria-expanded="true" aria-controls="job3">
                                                        <div className="col-md-3 job-company-icon reset-padding">
                                                            <img src="/assets/images/gsmmaster_logo.png" className="img-fluid"/>
                                                        </div>
                                                        <div className="col-md-9 job-title align-self-center">
                                                            <h2>Trainer Business Expert</h2>
                                                            <span className="company-name">Company name: GSM Master</span>
                                                            <span className="company-location">Location: Paris</span>
                                                        </div>
                                                </a>
                                                </div>

                                                <div id="job3" className="collapse" aria-labelledby="jobhead3" data-parent="#job">
                                                    <div className="card-body">
                                                        <ul className="job-info-list">
                                                            <li>Location: Paris</li>
                                                            <li>Experience: 1+ Year</li>
                                                            <li>Department: Marketing</li>
                                                            <li>Salary: 5,000Euro</li>
                                                        </ul>
                                                        <div className="job_editors">
                                                            <p>
                                                                We are looking for o Ul/UX designer with a special place in his heart 
                                                                for designing and the ability to work in a fast-paced entrepreneurial 
                                                                environment. You should get excited about creating beautiful-looking 
                                                                consumer products (Apps/ Websites/Graphics) that are simple to use, 
                                                                intuitive and responsive.
                                                            </p>
                                                            <h4>Responsibilities</h4>
                                                            <ul>
                                                                <li>
                                                                    Execute all visual design stages from concept to final hand over 
                                                                    to the technology team 
                                                                </li>
                                                                <li>
                                                                    Collaborate with product managers and tech team throughout the design 
                                                                    life cycle such as product wireframes, user flows, information architecture. mockups, and visual design. 
                                                                </li>
                                                                <li>
                                                                    Design new products, user interfaces. and user experiences from scratch 
                                                                    across multiple platforms mobile, desktop, applications. 
                                                                </li>
                                                            </ul>
                                                            <h4>Requirements</h4>
                                                            <ul>
                                                                <li>
                                                                    3+ years of experience in Graphics, Illustration & UI/UX design, Formal education in UX/Ul Design, 
                                                                    Interaction Design, Motion, Graphic Design, or related field of study is a plus. 
                                                                </li>
                                                                <li>Good aesthetic sense especially in the domains of typography and color theory. </li>
                                                                <li>Strong online portfolio showcasing your best work.</li>
                                                                <li>You must have proven skills with Adobe Suite (Photoshop. 
                                                                    Illustrator, After Effects, XD), Sketch, Marvel, Jiro, 
                                                                    Trello, Zeplin etc.</li>
                                                            </ul>
                                                        </div>
                                                        <h4>Skills</h4>
                                                        <ul className="job-skill-lists">
                                                            <li>Management</li>
                                                            <li>Motor skillst</li>
                                                            <li>French</li>
                                                        </ul>
                                                        
                                                        <div className="row reset-margin">
                                                            <div className="col-md-4 reset-padding job-curd-operation">
                                                                <h3 className="individual-text">Job Creation Date</h3>
                                                                <label>December 27, 2021</label>
                                                            </div>
                                                            <div className="col-md-4 reset-padding job-curd-operation">
                                                                <h3 className="individual-text">Recruitment Period</h3>
                                                                <label>March 15, 2022 to May 2, 2022</label>
                                                            </div>
                                                            <div className="col-md-4 reset-padding">

                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn gsm-bg-individual btn-applynow" style={ {marginTop: "110px",} }>Apply now</button>
                                                    </div>
                                                </div>
                                        </div>

                                        <nav className="text-right page-navigation-list">
                                                <ul className="page-navigation">
                                                    <span className="page-nav-icon page-left-icon">
                                                        <img src="/assets/images/next-page-icon.png" />
                                                    </span>
                                                    <li className="page-link"><a href="#">1</a></li>
                                                    <li className="page-link active"><a href="#">2</a></li>
                                                    <li className="page-link"><a href="#">3</a></li>
                                                    <span className="page-nav-icon page-right-icon">
                                                        <img src="/assets/images/prev-page-icon.png" />
                                                    </span>
                                                </ul>
                                        </nav>
                                        
                                        
                                    </div>
                                </div>
                                </div>

                                <div id="entreprise" className="tab-pane fade">
                                    <div className="tab-pane-titleblog reset-padding">
                                        <h2 className="individual-text">Les offres d'emploi chez nos partenaires</h2>
                                        <p className="individual-text">
                                            Vous voulez rejoindre une équipe établie dans la réparation avec une qualité de service reconnue ? 
                                            Vous êtes passionné/e et dynamique et vous cherchez de nouvelles opportunités. 
                                            Si vous souhaitez contribuer à la normalisation de la filière, 
                                            rejoignez une entreprise de notre écosystème !
                                        </p>
                                    </div>
                                    <div className="tab-pane-banner">
                                        <img src="/assets/images/taba-banner-requirement_2.png" className="img-fluid"/>
                                    </div>

                                    <div className="tab-pane-filterform">
                                        <form name="job-filterform" className="job-filterform row reset-margin">
                                            <div className="col job-filterform-col">
                                                <div className="form-group row mb-4 mx-0">
                                                    <label for="inputPassword" className="col-sm-4 col-form-label align-self-center reset-padding">Rechercher</label>
                                                    <div className="col-sm-8 align-self-center reset-padding">
                                                        <div className="form-group gsmform-search-group has-search">
                                                            <input type="text" className="form-control" placeholder="Search" />
                                                            <span className="fa fa-search form-control-feedback filter-search-icon"></span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="form-group row reset-margin">
                                                    <label for="inputPassword" className="col-sm-4 col-form-label align-self-center reset-padding">Ville</label>
                                                    <div className="col-sm-8 align-self-center reset-padding">
                                                        <div className="dropdown gsmDropdown">
                                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                                Location
                                                            </a>
                                                            <ul className="dropdown-menu gsm-dropdown-menu">
                                                                <hr />
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Paris
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Italy
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Germany
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-1 job-filterform-col"></div>
                                            <div className="col job-filterform-col">
                                                <div className="form-group row mb-4 mx-0">
                                                    <label for="inputPassword" className="col-sm-4 col-form-label align-self-center reset-padding">Nom du poste</label>
                                                    <div className="col-sm-8 align-self-center reset-padding">
                                                        <div className="dropdown gsmDropdown">
                                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                                Designation
                                                            </a>
                                                            <ul className="dropdown-menu gsm-dropdown-menu" >
                                                                <hr />
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Designer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Developer
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row reset-margin">
                                                    <label for="inputPassword" className="col-sm-4 col-form-label align-self-center reset-padding">Type de contrat</label>
                                                    <div className="col-sm-8 align-self-center reset-padding">
                                                        <div className="dropdown gsmDropdown">
                                                            <a className="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                                Part time / Full time
                                                            </a>
                                                            <ul className="dropdown-menu gsm-dropdown-menu" >
                                                                <hr />
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Part time
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="gsm-dropdown-link">
                                                                        Full time
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </form>

                                    </div>

                                    <div id="jobs-accordian" className="col-md-12 reset-padding job-accordian-list">
                                    <div className="accordion" id="job">
                                        <div className="card">
                                            <div className="card-header" id="jobhead1">
                                                <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#job1"
                                                aria-expanded="true" aria-controls="job1">
                                                        <div className="col-md-3 job-company-icon reset-padding">
                                                            <img src="/assets/images/gsmmaster_logo_2.png" className="img-fluid"/>
                                                        </div>
                                                        <div className="col-md-9 job-title align-self-center">
                                                            <h2>Trainer Business Expert</h2>
                                                            <span className="company-name">Company name: GSM Master</span>
                                                            <span className="company-location">Location: Paris</span>
                                                        </div>
                                                </a>
                                            </div>

                                            <div id="job1" className="collapse" aria-labelledby="jobhead1" data-parent="#job">
                                                <div className="card-body">
                                                    <ul className="job-info-list">
                                                        <li>Location: Paris</li>
                                                        <li>Experience: 1+ Year</li>
                                                        <li>Department: Marketing</li>
                                                        <li>Salary: 5,000Euro</li>
                                                    </ul>
                                                    <div className="job_editors">
                                                        <p>
                                                            We are looking for o Ul/UX designer with a special place in his heart 
                                                            for designing and the ability to work in a fast-paced entrepreneurial 
                                                            environment. You should get excited about creating beautiful-looking 
                                                            consumer products (Apps/ Websites/Graphics) that are simple to use, 
                                                            intuitive and responsive.
                                                        </p>
                                                        <h4>Responsibilities</h4>
                                                        <ul>
                                                            <li>
                                                                Execute all visual design stages from concept to final hand over 
                                                                to the technology team 
                                                            </li>
                                                            <li>
                                                                Collaborate with product managers and tech team throughout the design 
                                                                life cycle such as product wireframes, user flows, information architecture. mockups, and visual design. 
                                                            </li>
                                                            <li>
                                                                Design new products, user interfaces. and user experiences from scratch 
                                                                across multiple platforms mobile, desktop, applications. 
                                                            </li>
                                                        </ul>
                                                        <h4>Requirements</h4>
                                                        <ul>
                                                            <li>
                                                                3+ years of experience in Graphics, Illustration & UI/UX design, Formal education in UX/Ul Design, 
                                                                Interaction Design, Motion, Graphic Design, or related field of study is a plus. 
                                                            </li>
                                                            <li>Good aesthetic sense especially in the domains of typography and color theory. </li>
                                                            <li>Strong online portfolio showcasing your best work.</li>
                                                            <li>You must have proven skills with Adobe Suite (Photoshop. 
                                                                Illustrator, After Effects, XD), Sketch, Marvel, Jiro, 
                                                                Trello, Zeplin etc.</li>
                                                        </ul>
                                                    </div>
                                                    <h4>Skills</h4>
                                                    <ul className="job-skill-lists">
                                                        <li>Management</li>
                                                        <li>Motor skillst</li>
                                                        <li>French</li>
                                                    </ul>
                                                    
                                                    <div className="row reset-margin">
                                                        <div className="col-md-4 reset-padding job-curd-operation">
                                                            <h3 className="individual-text">Job Creation Date</h3>
                                                            <label>December 27, 2021</label>
                                                        </div>
                                                        <div className="col-md-4 reset-padding job-curd-operation">
                                                            <h3 className="individual-text">Recruitment Period</h3>
                                                            <label>March 15, 2022 to May 2, 2022</label>
                                                        </div>
                                                        <div className="col-md-4 reset-padding">

                                                        </div>
                                                    </div>
                                                    <button type="button" className="btn gsm-bg-individual btn-applynow" style={ {marginTop: "110px",} }>Apply now</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                                <div className="card-header" id="jobhead2">
                                                <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#job2"
                                                aria-expanded="true" aria-controls="job2">
                                                        <div className="col-md-3 job-company-icon reset-padding">
                                                            <img src="/assets/images/gsmmaster_logo_2.png" className="img-fluid"/>
                                                        </div>
                                                        <div className="col-md-9 job-title align-self-center">
                                                            <h2>Trainer Business Expert</h2>
                                                            <span className="company-name">Company name: GSM Master</span>
                                                            <span className="company-location">Location: Paris</span>
                                                        </div>
                                                </a>
                                                </div>

                                                <div id="job2" className="collapse" aria-labelledby="jobhead2" data-parent="#job">
                                                    <div className="card-body">
                                                        <ul className="job-info-list">
                                                            <li>Location: Paris</li>
                                                            <li>Experience: 1+ Year</li>
                                                            <li>Department: Marketing</li>
                                                            <li>Salary: 5,000Euro</li>
                                                        </ul>
                                                        <div className="job_editors">
                                                            <p>
                                                                We are looking for o Ul/UX designer with a special place in his heart 
                                                                for designing and the ability to work in a fast-paced entrepreneurial 
                                                                environment. You should get excited about creating beautiful-looking 
                                                                consumer products (Apps/ Websites/Graphics) that are simple to use, 
                                                                intuitive and responsive.
                                                            </p>
                                                            <h4>Responsibilities</h4>
                                                            <ul>
                                                                <li>
                                                                    Execute all visual design stages from concept to final hand over 
                                                                    to the technology team 
                                                                </li>
                                                                <li>
                                                                    Collaborate with product managers and tech team throughout the design 
                                                                    life cycle such as product wireframes, user flows, information architecture. mockups, and visual design. 
                                                                </li>
                                                                <li>
                                                                    Design new products, user interfaces. and user experiences from scratch 
                                                                    across multiple platforms mobile, desktop, applications. 
                                                                </li>
                                                            </ul>
                                                            <h4>Requirements</h4>
                                                            <ul>
                                                                <li>
                                                                    3+ years of experience in Graphics, Illustration & UI/UX design, Formal education in UX/Ul Design, 
                                                                    Interaction Design, Motion, Graphic Design, or related field of study is a plus. 
                                                                </li>
                                                                <li>Good aesthetic sense especially in the domains of typography and color theory. </li>
                                                                <li>Strong online portfolio showcasing your best work.</li>
                                                                <li>You must have proven skills with Adobe Suite (Photoshop. 
                                                                    Illustrator, After Effects, XD), Sketch, Marvel, Jiro, 
                                                                    Trello, Zeplin etc.</li>
                                                            </ul>
                                                        </div>
                                                        <h4>Skills</h4>
                                                        <ul className="job-skill-lists">
                                                            <li>Management</li>
                                                            <li>Motor skillst</li>
                                                            <li>French</li>
                                                        </ul>
                                                        
                                                        <div className="row reset-margin">
                                                            <div className="col-md-4 reset-padding job-curd-operation">
                                                                <h3 className="individual-text">Job Creation Date</h3>
                                                                <label>December 27, 2021</label>
                                                            </div>
                                                            <div className="col-md-4 reset-padding job-curd-operation">
                                                                <h3 className="individual-text">Recruitment Period</h3>
                                                                <label>March 15, 2022 to May 2, 2022</label>
                                                            </div>
                                                            <div className="col-md-4 reset-padding">

                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn gsm-bg-individual btn-applynow" style={ {marginTop: "110px",} }>Apply now</button>
                                                    </div>
                                                </div>
                                        </div>

                                        <div className="card">
                                                <div className="card-header" id="jobhead3">
                                                <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#job3"
                                                aria-expanded="true" aria-controls="job3">
                                                        <div className="col-md-3 job-company-icon reset-padding">
                                                            <img src="/assets/images/gsmmaster_logo_2.png" className="img-fluid"/>
                                                        </div>
                                                        <div className="col-md-9 job-title align-self-center">
                                                            <h2>Trainer Business Expert</h2>
                                                            <span className="company-name">Company name: GSM Master</span>
                                                            <span className="company-location">Location: Paris</span>
                                                        </div>
                                                </a>
                                                </div>

                                                <div id="job3" className="collapse" aria-labelledby="jobhead3" data-parent="#job">
                                                    <div className="card-body">
                                                        <ul className="job-info-list">
                                                            <li>Location: Paris</li>
                                                            <li>Experience: 1+ Year</li>
                                                            <li>Department: Marketing</li>
                                                            <li>Salary: 5,000Euro</li>
                                                        </ul>
                                                        <div className="job_editors">
                                                            <p>
                                                                We are looking for o Ul/UX designer with a special place in his heart 
                                                                for designing and the ability to work in a fast-paced entrepreneurial 
                                                                environment. You should get excited about creating beautiful-looking 
                                                                consumer products (Apps/ Websites/Graphics) that are simple to use, 
                                                                intuitive and responsive.
                                                            </p>
                                                            <h4>Responsibilities</h4>
                                                            <ul>
                                                                <li>
                                                                    Execute all visual design stages from concept to final hand over 
                                                                    to the technology team 
                                                                </li>
                                                                <li>
                                                                    Collaborate with product managers and tech team throughout the design 
                                                                    life cycle such as product wireframes, user flows, information architecture. mockups, and visual design. 
                                                                </li>
                                                                <li>
                                                                    Design new products, user interfaces. and user experiences from scratch 
                                                                    across multiple platforms mobile, desktop, applications. 
                                                                </li>
                                                            </ul>
                                                            <h4>Requirements</h4>
                                                            <ul>
                                                                <li>
                                                                    3+ years of experience in Graphics, Illustration & UI/UX design, Formal education in UX/Ul Design, 
                                                                    Interaction Design, Motion, Graphic Design, or related field of study is a plus. 
                                                                </li>
                                                                <li>Good aesthetic sense especially in the domains of typography and color theory. </li>
                                                                <li>Strong online portfolio showcasing your best work.</li>
                                                                <li>You must have proven skills with Adobe Suite (Photoshop. 
                                                                    Illustrator, After Effects, XD), Sketch, Marvel, Jiro, 
                                                                    Trello, Zeplin etc.</li>
                                                            </ul>
                                                        </div>
                                                        <h4>Skills</h4>
                                                        <ul className="job-skill-lists">
                                                            <li>Management</li>
                                                            <li>Motor skillst</li>
                                                            <li>French</li>
                                                        </ul>
                                                        
                                                        <div className="row reset-margin">
                                                            <div className="col-md-4 reset-padding job-curd-operation">
                                                                <h3 className="individual-text">Job Creation Date</h3>
                                                                <label>December 27, 2021</label>
                                                            </div>
                                                            <div className="col-md-4 reset-padding job-curd-operation">
                                                                <h3 className="individual-text">Recruitment Period</h3>
                                                                <label>March 15, 2022 to May 2, 2022</label>
                                                            </div>
                                                            <div className="col-md-4 reset-padding">

                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn gsm-bg-individual btn-applynow" style={ {marginTop: "110px",} }>Apply now</button>
                                                    </div>
                                                </div>
                                        </div>
                                        <nav className="text-right page-navigation-list">
                                                <ul className="page-navigation">
                                                    <span className="page-nav-icon page-left-icon">
                                                        <img src="/assets/images/next-page-icon.png" />
                                                    </span>
                                                    <li className="page-link"><a href="#">1</a></li>
                                                    <li className="page-link active"><a href="#">2</a></li>
                                                    <li className="page-link"><a href="#">3</a></li>
                                                    <span className="page-nav-icon page-right-icon">
                                                        <img src="/assets/images/prev-page-icon.png" />
                                                    </span>
                                                </ul>
                                        </nav>
                                        
                                    </div>
                                </div>
                                </div>
                        
                                
                            </div>
                        </div>
                    </div>   
                    
                    <div className="carrer-application-formSection">
                        <div className="container container-70 reset-padding">
                            <div className="application-section">
                                <p className="individual-text application-form-intro">
                                    Si aucun poste ci-dessus ne te correspond, tu peux nous transmettre ta candidature 
                                    spontanée ci-dessous. Nous sommes toujours en recherche des perles rares
                                </p>
                                <form>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Prénom <span style={{color:"#EC0040",}}>*</span></label>
                                        <input type="text" className="form-control" placeholder="Enter your full name" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Nom <span style={{color:"#EC0040",}}>*</span></label>
                                        <input type="text" className="form-control" placeholder="Enter your full name" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Numéro de téléphone <span style={{color:"#EC0040",}}>*</span></label>
                                        <input type="text" className="form-control" placeholder="Enter your Phone Number" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Adresse e-mail <span style={{color:"#EC0040",}}>*</span></label>
                                        <input type="text" className="form-control" placeholder="Veuillez saisir" />
                                        </div>
                                    </div>
                                    <div className="form-row twospaces-row reset-margin">
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Post Applied for <span style={{color:"#EC0040",}}>*</span></label>
                                        <input type="text" className="form-control" placeholder="Enter your Phone Number" />
                                        </div>
                                        <div className="form-group gsm-form-group col-md-6">
                                        <label className="gsm-form-label individual-text">Chargez votre CV <span style={{color:"#EC0040",}}>*</span></label>
                                        <div className="file-upload-wrapper col-lg-12 col-md-12 col-sm-12" data-text="File name will appear here ">
                                            <input name="file-upload-field" type="file" className="file-upload-field" value="" />
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-center mt-4">
                                        <button type="button" className="btn gsm-bg-individual btn-gsm-lg">Soumettre</button>
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