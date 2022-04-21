import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import { userService } from '../../services/user.service';
import { each } from 'jquery';


export default function Job(){

        const type = 'job.php';
        const [jobpanel, setJobpanel] = useState([]);

        useEffect(()=>{

            document.querySelector("body");
            let body_ele = document.querySelector("body");
            body_ele.className='';
            body_ele.classList.add("inner-page");

            userService.getAllItems(type).then((res) => { 
                setJobpanel([1,2,3]);
                setJobpanel(res.json_data);
                console.log(jobpanel)
            }) 
             .catch((err) => console.error(err));         
        },[])

        useEffect(()=>{

            if(jobpanel && jobpanel.length > 0){
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
        },[jobpanel])


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
                                    <h1 className="title">{jobpanel.banner_section && jobpanel.banner_section.title}</h1>
                                </div>
                                <div className="training-tab-section requirement-tab-section">
                                    <div className="organization-tab-bar">
                                        <div className="container container-60 reset-padding">
                                            <ul className="nav nav-pills row reset-margin">
                                                <li className="col reset-padding">
                                                    <span className="needs_span">{jobpanel.job_section && jobpanel.job_section.title}</span>
                                                    <a data-toggle="pill" href="#particulier" className="active" >
                                                        {jobpanel.job_section && jobpanel.job_section.gsm_job_module.title}
                                                    </a>
                                                </li>
                                                <li className="col reset-padding align-self-end">
                                                    <a data-toggle="pill" href="#entreprise">
                                                        {jobpanel.job_section && jobpanel.job_section.partner_job_module.title}
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
                                            <h2 className="individual-text">
                                                {jobpanel.job_section && jobpanel.job_section.gsm_job_module.title}
                                            </h2>
                                            <p className="individual-text">
                                                {jobpanel.job_section && jobpanel.job_section.gsm_job_module.desc}
                                            </p>
                                        </div>
                                        <div className="tab-pane-banner">
                                            <img src={jobpanel.job_section && jobpanel.job_section.gsm_job_module.photo_link} className="img-fluid"/>
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
                                                                <ul className="dropdown-menu gsm-dropdown-menu" >
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
                                        <div className="accordion" id="particulier-job">
                                            {jobpanel.job_section && jobpanel.job_section.gsm_job_module.gsm_business_expert.map((items, index) =>
                                                <div className="card">
                                                    <div className="card-header" id={`particulier-jobhead${index + 1}`}>
                                                        <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target={`#particulier-job${index + 1}`}
                                                        aria-expanded="true" aria-controls={`particulier-job${index + 1}`}>
                                                                <div className="col-md-3 job-company-icon reset-padding">
                                                                    <img src={items.logo_link} className="img-fluid"/>
                                                                </div>
                                                                <div className="col-md-9 job-title align-self-center">
                                                                    <h2>{items.title}</h2>
                                                                    <span className="company-name">{items.sub_title_1}</span>
                                                                    <span className="company-location">{items.sub_title_2}</span>
                                                                </div>
                                                        </a>
                                                    </div>

                                                    <div id={`particulier-job${index + 1}`} className="collapse" aria-labelledby={`particulier-jobhead${index + 1}`} data-parent={`#particulier-job`}>
                                                        <div className="card-body">
                                                            <ul className="job-info-list">
                                                                <li>{items.toggle.toggle_title_1}</li>
                                                                <li>{items.toggle.toggle_title_2}</li>
                                                                <li>{items.toggle.toggle_title_3}</li>
                                                                <li>{items.toggle.toggle_title_4}</li>
                                                            </ul>
                                                            <div className="job_editors">
                                                                <p>
                                                                    {items.toggle.desc}
                                                                </p>
                                                                <h4>{items.toggle.toggle_sub_title_1}</h4>
                                                                <ul>
                                                                    {items.toggle && items.toggle.responsibility.map((each, i) =>
                                                                        <li>
                                                                            {each.list}
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                                <h4>{items.toggle.toggle_sub_title_2}</h4>
                                                                <ul>
                                                                    {items.toggle && items.toggle.requirements.map((each, i) =>
                                                                        <li>
                                                                            {each.list}
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                            </div>
                                                            <h4>Skills</h4>
                                                            <ul className="job-skill-lists">
                                                                {items.toggle && items.toggle.skills.map((each, i) =>
                                                                    <li>{each.list}</li>
                                                                )}
                                                            </ul>
                                                            
                                                            <div className="row reset-margin">
                                                                <div className="col-md-4 reset-padding job-curd-operation">
                                                                    <h3 className="individual-text">{items.toggle.head_1}</h3>
                                                                    <label>{items.toggle.label_1}</label>
                                                                </div>
                                                                <div className="col-md-4 reset-padding job-curd-operation">
                                                                    <h3 className="individual-text">{items.toggle.head_2}</h3>
                                                                    <label>{items.toggle.label_2}</label>
                                                                </div>
                                                                <div className="col-md-4 reset-padding">

                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn gsm-bg-individual btn-applynow" style={{marginTop:'110px'}}>Apply now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            
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
                                            <h2 className="individual-text">{jobpanel.job_section && jobpanel.job_section.partner_job_module.title}</h2>
                                            <p className="individual-text">
                                                {jobpanel.job_section && jobpanel.job_section.partner_job_module.desc}
                                            </p>
                                        </div>
                                        <div className="tab-pane-banner">
                                            <img src={jobpanel.job_section && jobpanel.job_section.partner_job_module.photo_link} className="img-fluid"/>
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
                                                                <ul className="dropdown-menu gsm-dropdown-menu">
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
                                        <div className="accordion" id="entreprise-job">
                                            {jobpanel.job_section && jobpanel.job_section.partner_job_module.partner_business_expert.map((items, index) =>
                                                <div className="card">
                                                    <div className="card-header" id={`entreprise-jobhead${index + 1 }`}>
                                                        <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target={`#entreprise-job${index + 1}`}
                                                        aria-expanded="true" aria-controls={`entreprise-job${index + 1}`}>
                                                                <div className="col-md-3 job-company-icon reset-padding">
                                                                    <img src={items.logo_link} className="img-fluid"/>
                                                                </div>
                                                                <div className="col-md-9 job-title align-self-center">
                                                                    <h2>{items.title}</h2>
                                                                    <span className="company-name">{items.sub_title_1}</span>
                                                                    <span className="company-location">{items.sub_title_2}</span>
                                                                </div>
                                                        </a>
                                                    </div>

                                                    <div id={`entreprise-job${index + 1}`} className="collapse" aria-labelledby={`entreprise-jobhead${index + 1 }`} data-parent={`#entreprise-job`}>
                                                        <div className="card-body">
                                                            <ul className="job-info-list">
                                                                <li>{items.toggle.toggle_title_1}</li>
                                                                <li>{items.toggle.toggle_title_2}</li>
                                                                <li>{items.toggle.toggle_title_3}</li>
                                                                <li>{items.toggle.toggle_title_4}</li>
                                                            </ul>
                                                            <div className="job_editors">
                                                                <p>
                                                                    {items.toggle.desc}
                                                                </p>
                                                                <h4>{items.toggle.toggle_sub_title_1}</h4>
                                                                <ul>
                                                                    {items.toggle && items.toggle.responsibility.map((each, i)=>
                                                                        <li>
                                                                            {each.list}
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                                <h4>{items.toggle.toggle_sub_title_2}</h4>
                                                                <ul>
                                                                    {items.toggle && items.toggle.requirements.map((each, i)=>
                                                                        <li>
                                                                            {each.list} 
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                            </div>
                                                            <h4>Skills</h4>
                                                            <ul className="job-skill-lists">
                                                                {items.toggle && items.toggle.skills.map((each, i)=>
                                                                    <li>{each.list}</li>        
                                                                )}
                                                            </ul>
                                                            
                                                            <div className="row reset-margin">
                                                                <div className="col-md-4 reset-padding job-curd-operation">
                                                                    <h3 className="individual-text">{items.toggle && items.toggle.head_1}</h3>
                                                                    <label>{items.toggle && items.toggle.label_1}</label>
                                                                </div>
                                                                <div className="col-md-4 reset-padding job-curd-operation">
                                                                    <h3 className="individual-text">{items.toggle && items.toggle.head_2}</h3>
                                                                    <label>{items.toggle && items.toggle.label_2}</label>
                                                                </div>
                                                                <div className="col-md-4 reset-padding">

                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn gsm-bg-individual btn-applynow" style={{marginTop:'110px'}}>Apply now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            
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
                                            <label className="gsm-form-label individual-text">Prénom <span style={{color:'#EC0040'}}>*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter your full name" />
                                            </div>
                                            <div className="form-group gsm-form-group col-md-6">
                                            <label className="gsm-form-label individual-text">Nom <span style={{color:'#EC0040'}}>*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter your full name" />
                                            </div>
                                        </div>
                                        <div className="form-row twospaces-row reset-margin">
                                            <div className="form-group gsm-form-group col-md-6">
                                            <label className="gsm-form-label individual-text">Numéro de téléphone <span style={{color:'#EC0040'}}>*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter your Phone Number" />
                                            </div>
                                            <div className="form-group gsm-form-group col-md-6">
                                            <label className="gsm-form-label individual-text">Adresse e-mail <span style={{color:'#EC0040'}}>*</span></label>
                                            <input type="text" className="form-control" placeholder="Veuillez saisir" /> 
                                            </div>
                                        </div>
                                        <div className="form-row twospaces-row reset-margin">
                                            <div className="form-group gsm-form-group col-md-6">
                                            <label className="gsm-form-label individual-text">Post Applied for <span style={{color:'#EC0040'}}>*</span></label>
                                            <input type="text" className="form-control" placeholder="Enter your Phone Number" />
                                            </div>
                                            <div className="form-group gsm-form-group col-md-6">
                                            <label className="gsm-form-label individual-text">Chargez votre CV <span style={{color:'#EC0040'}}>*</span></label>
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