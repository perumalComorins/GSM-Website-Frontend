import { useEffect, useState } from 'react';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function WhowearePage(){
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

                $(".twobyfour-banner-cover-overlay").each(function(){
                    $banner_h = $('.twofourth-size-banner img').height();
                    $banner_w = $('.twofourth-size-banner img').width();
                    $(this).width($banner_w).height($banner_h);
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
    },[datas])  
    return(
        <div id="wrapper">
            <div className="overlay"></div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header className="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                <div className="site-bannersection certificateur-bannersection">
                        <div className="banner-view twofourth-size-banner">
                                <img src="/assets/images/business-people-day.png" className="banner-img"/>
                        </div>
                        <div className="twobyfour-banner-cover-overlay">
                        </div>

                        <div className="container container-70 reset-padding certificateur-container">
                            <div className="row reset-margin">
                                <div className="col-md-6 content-section">
                                    <h1>GSM Master, votre centre de formation pour les métiers en mutation    </h1>
                                    <p>Présent dans le secteur du smartphone depuis 1999, les enseignements sont fondés 
                                        sur l’expérience des professionnels de GSM Master. Dans ce cadre nous travaillions 
                                        pour les plus grands constructeurs et respections les cahiers de charges des assurances. 
                                        En 2014, GSM Master ouvre son centre de formation tout en gardant un pied sur le terrain pour 
                                        toujours être à la pointe des problèmes rencontrés par les consommateurs. 
                                        Les formations que nous vous proposons aujourd'hui sont la somme de ces expériences. </p>
                                </div>
                                <div className="col-md-6 infobar-section align-self-center">
                                        <div className="infobar">
                                            <ul className="inforbar-row row reset-margin">
                                                <li className="col inforbar-col">
                                                    <label>Nous avons</label>
                                                    <h2>20</h2>
                                                    <label>ans d'expérience</label>
                                                </li>
                                                <li className="col inforbar-col">
                                                    <label>Niveau</label>
                                                    <h2>IV</h2>
                                                    <label>de certification</label>
                                                </li>
                                                <li className="col inforbar-col">
                                                    <label>Déjà</label>
                                                    <h2>@</h2>
                                                    <label>Techniciens formés</label>
                                                </li>   
                                            </ul>
                                            <h2 className="infobar-title">Seul certificateur</h2>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="certificateur-content-container">
                            <div className="container container-70 reset-padding">
                                <div className="row mx-0 mb-4">
                                    <div className="col-md-6 certificateur-content-section">
                                        <h2>Qui sommes-nous ?</h2>
                                        <p>Depuis la création de l'entreprise en 2003 et du centre de formation en 2014, 
                                            GSM Master désire contribuer positivement à son écosystème en structurant la 
                                            filière de la réparation.</p>
                                        <p>Cela passe d'abord par l'insertion sociale et professionnelle. Notre objectif 
                                            est de rendre notre formation accessible au plus grand nombre et d'accompagner nos apprenants.</p>
                                    </div>
                                    <div className="col-md-6 certificateur-image-section">
                                        <img src="/assets/images/binoculars.png" className="img-fluid"/>
                                    </div>
                                    
                                </div>
                                <p>De plus la réparation est un levier essentiel à la transition écologique. 
                                    Elle participe à l'économie circulaire, en augmentant le nombre de produits 
                                    pris en charge et en aidant à diminuer le taux de retour. Nous avons un 
                                    impact direct sur la durée de vie des produits, leur recyclage, 
                                    leur revalorisation et leur réemploi.</p>
                                <p>La montée en compétences des techniciens favorise également la confiance des consommateurs. 
                                    La transparence qu'apporte la certification vis-à-vis de la qualité de la réparation encourage 
                                    le développement du secteur du réemploi.</p>
                            </div>
                            
                            <div className="ml-align-box certificateur-imgbannerbox">
                                <img src="/assets/images/binoculars-for-smartphone-repair.png"  className="img-fluid"/>
                                <p>La relation privilégiée de GSM Master avec les constructeurs et entreprises partenaires permet 
                                à GSM Master d'anticiper les évolutions du marché dans le secteur des produits nomades. 
                                Cette relation nous permet de proposer des formations adaptées qui préparent aux évolutions du marché.</p>
                            </div>
                            <div className="container container-70 reset-padding">
                                <div className="row mx-0 mb-4">    
                                    <h2>La certification niveau 4</h2>
                                    <p>Afin de développer la certification au plus proche des besoins du marché et des employeurs, 
                                        GSM Master s' appuie sur France Compétence, Pôle Emploi, CAFOC de Paris et des employeurs partenaires.</p>
                                    <p>GSM MASTER a mis en œuvre une méthodologie d’analyse du travail à des fins de didactique professionnelle. 
                                        L’équipe formatrice a ensuite revu ces référentiels qui sont désormais le reflet de l’activité exercée.</p> 
                                    <p>Cette certification est accessible via la VAE (Validation d'Acquis d'Expérience) 
                                        si vous pouvez justifier d'1 an d'expérience dans la réparation de produits nomades, 
                                        en formation continue, en contrat de professionnalisation et, depuis septembre 2020, 
                                        en contrat d'apprentissage.</p>
                                </div>
                            </div>
                        </div>
                </div>

                <section className="Quotebutton site-body-container" style={ {backgroundImage:"url('/assets/images/technician-carefully-inspect.png')",} } >
                    <div className="Quotebutton__box reset-padding">
                        <h1 className="box--title">Le centre de formation</h1>
                        <p className="box--para">Le centre de formation de GSM Master est historiquement basé à Paris. 
                            Le déploiement est en cours dans toute la France. Consultez nos partenaires dans notre 
                            page dédiée à la certification.</p>
                        <div className="link__box mt-3">
                        <a href="#" className="btn gsm-bg-white btn-gsm-md">Je veux m’inscrire</a>
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