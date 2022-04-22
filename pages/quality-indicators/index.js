import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import { userService } from '../../services/user.service';

export default function QualityIndicatorPage(){
    const type = 'quality-indicators.php';
    const [qualityindicatorpanel, setQualityindicatorPanel] = useState([]);
    
    useEffect(()=>{
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("inner-page");

        userService.getAllItems(type).then((res) => { 
            setQualityindicatorPanel(res.json_data);
        }) 
         .catch((err) => console.error(err));
        
    },[])
    useEffect(()=>{
        if(qualityindicatorpanel){

            function bootstrapTabControl(){
        
                var i, items = $('.tab-nav-link'), pane = $('.tab-pane');
                // next
                $('.nexttab').on('click', function(){
                    $('#qualityTab-Content.tab-content .tab-pane').removeClass('active');
    
                    for(i = 0; i < items.length; i++){
                        if($(items[i]).hasClass('active') == true){
                            break;
                        }
                    }
                    if(i < items.length - 1){
                        // for tab
                        $(items[i]).removeClass('active');
                        $(items[i+1]).addClass('active');
                        // for pane
                        $(pane[i]).addClass('left')
                        
                        setTimeout(function() {
                            $(pane[i]).removeClass('left');
                            $(pane[i]).removeClass('active');
                            $(pane[i+1]).addClass('active');
                        }, 500);
                        
                    }
    
                });
                // Prev
                $('.prevtab').on('click', function(){
                    $('#qualityTab-Content.tab-content .tab-pane').removeClass('active');
                    
                    for(i = 0; i < items.length; i++){
                        if($(items[i]).hasClass('active') == true){
                            break;
                        }
                    }
                    
                    if(i != 0){
                        // for tab
                        $(items[i]).removeClass('active');
                        $(items[i-1]).addClass('active');
                        // for pane
                        $(pane[i]).addClass('left');
                        setTimeout(function() {
                            $(pane[i]).removeClass('left');
                            $(pane[i]).removeClass('active');
                            $(pane[i-1]).addClass('active');
                        }, 500);
                    }
                });
            }
            bootstrapTabControl();
        }
    },[qualityindicatorpanel])
    console.log(qualityindicatorpanel);
    return(
        <div id="wrapper">
            <div className="overlay">
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header className="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                <div className="site-bannersection">
                    <div className="indicator-view fullsize-banner" style={ {backgroundImage: `url(${qualityindicatorpanel.banner_section && qualityindicatorpanel.banner_section.backdrop_img})`}} >
                            <div className="container container-70 indicator-content reset-padding">
                                <div className="row content-row">
                                    <div className="col-md-7 title-banner text-left align-self-center">
                                        <h2>{qualityindicatorpanel.banner_section && qualityindicatorpanel.banner_section.title}</h2>
                                        <p>{qualityindicatorpanel.banner_section && qualityindicatorpanel.banner_section.desc}</p>
                                        <button type="button" className="btn gsm-bg-white btn-gsm-md">{qualityindicatorpanel.banner_section && qualityindicatorpanel.banner_section.button_name}</button>
                                    </div>
                                    <div className="col-md-5 picture-banner">
                                        <img src={qualityindicatorpanel.banner_section && qualityindicatorpanel.banner_section.banner_img} className="img-fluid rounded-circle"/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <section className="site-body-container">
                    <div className="container container-70 reset-padding indicator-container">
                        <h2 className="individual-text title">{qualityindicatorpanel.label_title && qualityindicatorpanel.label_title}</h2>
                        <ul id="qualityTab" className="nav nav-tabs"  role="tablist">
                            {qualityindicatorpanel.details && qualityindicatorpanel.details.map((items, index) => 
                            <li>
                                <a className={`tab-nav-link ${index==0 ? 'active' :  ''}`} id={`${items.tab_slug}-tab`} data-toggle="tab" href={`#${items.tab_slug}`} role="tab" aria-controls={items.tab_slug} aria-selected={`${index==0 ? 'true' :  'false'}`}>
                                    <img src={items.tab_logo_url} />
                                </a>
                            </li>)}
                        </ul>
                        <div id="qualityTab-Content" className="tab-content" >
                            {qualityindicatorpanel.details && qualityindicatorpanel.details.map((items, index) => 
                            <div className={`tab-pane ${index==0 ? 'active' :  ''}`} id={items.tab_slug} role="tabpanel" aria-labelledby={`${items.tab_slug}-tab`}>
                                <img src={items.box_logo_url} className="indicator-icon" />
                                <h1>{items.title}</h1>
                                <p>
                                    {items.desc}
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">{qualityindicatorpanel.button_text && qualityindicatorpanel.button_text}</button>
                            </div>)}
                            
                            <a className="prevtab"><i><img src="/assets/images/prev-i.png" /></i> {qualityindicatorpanel.label_prev_text && qualityindicatorpanel.label_prev_text}</a>
                            <a className="nexttab">{qualityindicatorpanel.label_next_text && qualityindicatorpanel.label_next_text} <i><img src="/assets/images/next-i.png" /></i></a>
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