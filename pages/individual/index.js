import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";
import SatisfactionCardSlider from "./satisfaction-card-slider";

export default function IndividualPage() {
    return (
        <div id="wrapper">
            <div className="overlay">
            </div>
            <Sidepanel/>
            <div id="page-content-wrapper" className="container-fluid reset-padding">
                <header class="site-header site-navbar site-navbar-target">
                    <Header/>
                </header>
                <div className="site-bannersection">
                    <div className="banner-view smallsize-banner">
                        <img src="/assets/images/individual-banner-v1.png" className="banner-img"/>
                    </div>
                    <div className="banner-cover-overlay">
                        <div className="banner-cover individual-banner-content">
                            <div className="container container-1140 reset-padding banner-title-blog">
                                <h2 className="banner-title">Réussir grâce aux compétences du futur</h2>
                            </div>
                        </div>
                    </div>
                </div>

                

                <section className="site-body-container">
                    <div className="registeration-box">
                        <div className="container container-60 reset-padding text-center register-box-top">
                            <p className="reg-intro-content">
                                Découvrez nos formations et notre certification afin de monter en compétence 
                                et vous faire certifier pour le titre niveau 4 "Réparateur(trice) de produits nomades
                            </p>
                            <button type="button" className="btn gsm-bg-individual btn-gsm-lg">S’inscrire</button>
                        </div>
                        <div className="container container-70 reset-padding text-center register-box-bottom">
                            <h2 className="section-title individual-text">Développe tes talents pour intégrer les équipes de demain</h2>
                            <p className="section-content individual-text">
                                Découvrez nos modules et nos formations qui vous préparent à intégrer le secteur 
                                de la réparation des produits nomades. Découvrez l'indice de réparabilité, 
                                la réparation en sécurité et en conformité ou encore l'initiation à la microsoudure 
                                dispensées par des professionnels du secteur. Inscris toi et réserves ta place dans 
                                la formation (nombre d’apprenants par cours limité)
                            </p>
                        </div>
                    </div>
                    <SatisfactionCardSlider />

                        

                </section>

                <footer className="site-footer">
                    <Footer/>
                </footer>  
                
            </div>
        </div>
    )
}