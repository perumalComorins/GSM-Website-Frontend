import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function QualityIndicatorPage(){
        const [datas, setDatas] = useState(null);
        useEffect(()=>{
            setDatas([1,2,3])
            
        },[])
        useEffect(()=>{
            if(datas && datas.length>0){
                {/* Tab becomes slider */}
                function bootstrapTabControl(){
                    var i, items = $('.tab-nav-link'), pane = $('.tab-pane');
                    // next
                    $('.nexttab').on('click', function(){
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
                                $(pane[i]).removeClass('show active');
                                $(pane[i+1]).addClass('show active');
                            }, 500);
                            
                        }
        
                    });
                    // Prev
                    $('.prevtab').on('click', function(){
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
                                $(pane[i]).removeClass('show active');
                                $(pane[i-1]).addClass('show active');
                            }, 500);
                        }
                    });
                }
                bootstrapTabControl();
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
                <div className="site-bannersection">
                    <div className="indicator-view fullsize-banner" style={ {backgroundImage: "url('/assets/images/background_banner.png')"} }>
                            <div className="container container-70 indicator-content reset-padding">
                                <div className="row content-row">
                                    <div className="col-md-7 title-banner text-left align-self-center">
                                        <h2>Indicateurs de qualité</h2>
                                        <p>Pour toujours vous accueillir dans les meilleurs conditions, 
                                        GSM Master est dans une démarche d’amélioration continue. 
                                        Dans une démarche de transparence nous vous proposons une courte 
                                        explication de nos indicateurs de qualité (logos, certification, label....).</p>
                                        <button type="button" className="btn gsm-bg-white btn-gsm-md">En savoir plus</button>
                                    </div>
                                    <div className="col-md-5 picture-banner">
                                        <img src="/assets/images/squre.jpg" className="img-fluid rounded-circle"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <section className="site-body-container">
                    <div className="container container-70 reset-padding indicator-container">
                        <h2 className="individual-text title">Nos labels de qualité</h2>
                        <ul id="qualityTab" className="nav nav-tabs"  role="tablist">
                            <li>
                                <a className="tab-nav-link active" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">
                                    <img src="/assets/images/indicators-logo-1.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-2.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-3.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="four" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-4.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="five-tab" data-toggle="tab" href="#five" role="tab" aria-controls="five" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-3.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="six-tab" data-toggle="tab" href="#six" role="tab" aria-controls="six" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-2.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="seven-tab" data-toggle="tab" href="#seven" role="tab" aria-controls="seven" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-4.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="eight-tab" data-toggle="tab" href="#eight" role="tab" aria-controls="eight" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-2.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link active" id="nine-tab" data-toggle="tab" href="#nine" role="tab" aria-controls="nine" aria-selected="true">
                                    <img src="/assets/images/indicators-logo-1.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="ten-tab" data-toggle="tab" href="#ten" role="tab" aria-controls="ten" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-2.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="eleven-tab" data-toggle="tab" href="#eleven" role="tab" aria-controls="eleven" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-4.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="twelve-tab" data-toggle="tab" href="#twelve" role="tab" aria-controls="twelve" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-3.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="threeteen-tab" data-toggle="tab" href="#threeteen" role="tab" aria-controls="threeteen" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-1.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="fourteen-tab" data-toggle="tab" href="#fourteen" role="tab" aria-controls="fourteen" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-4.png" />
                                </a>
                            </li>
                            <li>
                                <a className="tab-nav-link" id="fifteen-tab" data-toggle="tab" href="#fifteen" role="tab" aria-controls="fifteen" aria-selected="false">
                                    <img src="/assets/images/indicators-logo-2.png" />
                                </a>
                            </li>
                            
                        </ul>
                        <div id="qualityTab-Content" className="tab-content" >
                            <div className="tab-pane  show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                                <img src="/assets/images/indicators-logo-1.png" className="indicator-icon" />
                                <h1>Qualiopi</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>


                            <div className="tab-pane " id="two" role="tabpanel" aria-labelledby="two-tab">
                                <img src="/assets/images/indicators-logo-2.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="three" role="tabpanel" aria-labelledby="three-tab">
                                <img src="/assets/images/indicators-logo-3.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="four" role="tabpanel" aria-labelledby="four-tab">
                                <img src="/assets/images/indicators-logo-4.png" className="indicator-icon" />
                                <h1>MONCOMPTE</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="five" role="tabpanel" aria-labelledby="five-tab">
                                <img src="/assets/images/indicators-logo-3.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="six" role="tabpanel" aria-labelledby="six-tab">
                                <img src="/assets/images/indicators-logo-2.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="seven" role="tabpanel" aria-labelledby="seven-tab">
                                <img src="/assets/images/indicators-logo-4.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="eight" role="tabpanel" aria-labelledby="eight-tab">
                                <img src="/assets/images/indicators-logo-2.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="nine" role="tabpanel" aria-labelledby="nine-tab">
                                <img src="/assets/images/indicators-logo-1.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="ten" role="tabpanel" aria-labelledby="ten-tab">
                                <img src="/assets/images/indicators-logo-2.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="eleven" role="tabpanel" aria-labelledby="eleven-tab">
                                <img src="/assets/images/indicators-logo-4.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="twelve" role="tabpanel" aria-labelledby="twelve-tab">
                                <img src="/assets/images/indicators-logo-3.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="threeteen" role="tabpanel" aria-labelledby="threeteen-tab">
                                <img src="/assets/images/indicators-logo-1.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="fourteen" role="tabpanel" aria-labelledby="fourteen-tab">
                                <img src="/assets/images/indicators-logo-4.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <div className="tab-pane " id="fifteen" role="tabpanel" aria-labelledby="fifteen-tab">
                                <img src="/assets/images/indicators-logo-2.png" className="indicator-icon" />
                                <h1>Paris</h1>
                                <p>
                                    Nous avons voulu donner à tous la possibilité de réussir à s'épanouir grâce à la certification. 
                                    Pour cela nous avons mis des prérequis accessibles au plus grand nombre (parler, comprendre, 
                                    lire le français et connaitre les quatre opérations mathématiques). Si tu es intéressé par la 
                                    formation et que tu n'as aucune expérience tu peux t'inscrire ici
                                </p>
                                <button type="button" className="btn gsm-bg-individual btn-gsm-md">Learn more</button>
                            </div>

                            <a className="prevtab"><i><img src="/assets/images/prev-i.png" /></i> Prev</a>
                            <a className="nexttab">Next <i><img src="/assets/images/next-i.png" /></i></a>
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