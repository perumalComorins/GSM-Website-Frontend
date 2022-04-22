import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Certificate4() {
    const type ='application_form.php';
    const [noticepanel, setNoticepanel] = useState([])

    useEffect(()=>{

      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("inner-page");
      userService.getAllItems(type).then((res) => {  
          setNoticepanel(res.json_data)
      }) 
       .catch((err) => console.error(err));  
      
  },[])
    return(
      <div id="wrapper">
      <div class="overlay"></div>

      <Sidepanel />

      <div id="page-content-wrapper" class="container-fluid reset-padding">
          <header class="site-header site-navbar site-navbar-target">
              <Header />
          </header>
          <div class="site-bannersection">
{/*           style="background-image: url('images/background_banner.png');"
 */}              <div class="indicator-view fullsize-banner" >
                      <div class="container container-70 indicator-content reset-padding">
                          <div class="row content-row reverse-row-mobile">
                            <div class="col-md-7 title-banner text-left align-self-center">
                                <h2>Comprendre la certification</h2>
                                <p>
                                  La certification est une reconnaissance d'état de la qualité d'un diplôme.
                                  Le titre de « Réparateur/trice de produits nomades" est inscrit au RNCP 
                                  (Répertoire national des certifications professionnelles) de niveau 4. 
                                  La formation vous permet d'avoir un niveau équivalent du niveau BAC. 
                                  Ce qui vous permet de faire reconnaître vos compétences dans le secteur de 
                                  la réparation ou de poursuivre vos études.
                                </p>
                                  <button type="button" class="btn gsm-bg-white btn-gsm-md mr-4">En savoir plus</button>
                                  <button type="button" class="btn gsm-bg-individual btn-gsm-md">Inscrivez-vous</button>
                            </div>
                            <div class="col-md-5 picture-banner">
                                <img src="images/squre.jpg" class="img-fluid rounded-circle"/>
                            </div>
                          </div>
                      </div>
              </div>
              
          </div>
          
          <section class="site-body-container">
                <div class="container container-65 reset-padding certificate-contentarea">
                    <div class="content-spaces">
                      <h2>La certification qu’est ce que c’est ?</h2>
                      <p>« L’article L. 6113-1 du Code du Travail créé par la loi n°2018-771 du 5 septembre 2018 pour la
                        liberté de choisir son avenir professionnel précise que « les certifications professionnelles
                        enregistrées au RNCP permettent une validation des compétences et des connaissances
                        acquises nécessaires à l’exercice d’activités professionnelles. Elles sont définies notamment
                        par :</p>
                      <ul>
                        <li>Un référentiel d’activités qui décrit les situations de travail et les activités exercées, les
                        métiers ou emplois visés.
                        </li>
                        <li>Un référentiel de compétences qui identifie les compétences et les connaissances, y compris
                        transversales, qui en découlent.</li>
                        <li>Un référentiel d’évaluation qui définit les critères et les modalités d’évaluation des acquis.
                        Les certifications professionnelles sont classées par niveau de qualification et domaine d’activité
                        […] et sont constituées de blocs de compétences, ensembles homogènes et cohérents de
                        compétences contribuant à l’exercice autonome d’une activité professionnelle et pouvant être
                        évaluées et validées. » (France compétence)</li>
                      </ul>

                    </div>
                    <div class="content-spaces">
                      <h2>La certification de GSM Master</h2>
                      <p>Notre certification se base sur deux qualités essentielles. 
                        Tout d’abord vous former à l’intégralité du métier de réparateur.  
                        Cette formation comprend tous les aspects du métier : 
                        l’accueil client,  le recueil du besoin, le diagnostic, la communication, 
                        la législation, l’économie circulaire et la réparation. Notre deuxième 
                        outil est une méthodologie bâtie par des professionnels ayant obtenu le plus 
                        haut niveau d’agrément du premier constructeur mondial. Cette méthodologie vous permettra 
                        d’appréhender tous types de produits nomades et de pannes en sécurité et en conformité.
                      </p>
                      <p>Nous vous transmettons toutes les clefs pour vous rendre autonome dans 
                        votre activité de réparateur/trice. GSM Master est implanté dans toute la France, 
                        trouvez ci-dessous le centre de formation le plus proche de chez vous.</p>
                    </div>
                    <div class="content-spaces">
                      <h2>La certification pour qui ?</h2>
                      <p>
                      Nous donnons à tous la possibilité de réussir la certification et de s’épanouir. 
                      Les tests de prérequis sont accessibles au plus grand nombre : 
                      comprendre le français (lu, parlé, écrit) ; connaître les quatre opérations mathématiques. 
                      Cette formation est éligible aux dispositifs de prise en charge pour l’apprentissage, 
                      la professionnalisation, la VAE, les projets de transitions professionnelles et transitions collectives. 
                      </p>
                      <p>Nous vous transmettons toutes les clefs pour vous rendre autonome dans 
                        votre activité de réparateur/trice. GSM Master est implanté dans toute la France, 
                        trouvez ci-dessous le centre de formation le plus proche de chez vous.</p>
                    </div>
                    
                </div>
                <div class="container container-75 reset-padding certificate-cardarea">
                    <div class="row justify-content-center mx-0 mb-5">
                          <div class="service-block col-lg-4 col-md-12 col-sm-12 reset-padding mr-right-100">
                            <div class="service card">
                              <div class="service-title d-table text-center">
                                <div class="service-title-innerwrapper d-table-cell align-middle">
                                  <h2>Particulier</h2>
                                </div>
                              </div>
                              <div class="service-body">
                                <p>Vous n'avez aucune expérience dans la réparation mais êtes intéressé par ce secteur. 
                                  Vous souhaitez vous inscrire à la certification pour obtenir des compétences 
                                  professionnelles à valoriser.</p>
                              </div>
                              <div class="service-footer d-table text-center">
                                <div class="service-footer-innerwrapper d-table-cell align-middle">
                                  <button type="button" class="btn gsm-bg-individual btn-block py-3" >Inscrivez-vous</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="service-block col-lg-4 col-md-12 col-sm-12 reset-padding">
                            <div class="service card">
                              <div class="service-title d-table text-center">
                                <div class="service-title-innerwrapper d-table-cell align-middle">
                                  <h2>Salarié du secteur</h2>
                                </div>
                              </div>
                              <div class="service-body">
                                <p>Vous êtes indépendant et/ou salarié dans la réparation de produits nomades depuis plus    
                                   d’1 an et vous voulez faire reconnaître vos compétences grâce à la certification. 
                                   Téléchargez le livret 1 et accédez à une VAE (validation d'acquis par l’expérience).</p>
                              </div>
                              <div class="service-footer d-table text-center">
                                <div class="service-footer-innerwrapper d-table-cell align-middle">
                                  <button type="button" class="btn gsm-outline-individual btn-block py-3" >Certifiez vos compétences</button>
                                </div>  
                              </div>
                            </div>
                          </div>
                    </div>

                    <div class="row justify-content-center reset-margin">
                          <div class="service-block col-lg-4 col-md-12 col-sm-12 reset-padding">
                            <div class="service card">
                              <div class="service-title d-table text-center">
                                <div class="service-title-innerwrapper d-table-cell align-middle">
                                  <h2>Entreprise</h2>
                                </div>
                              </div>
                              <div class="service-body">
                                <p>
                                  Vous représentez une entreprise et  souhaitez faire reconnaitre la qualité de vos techniciens. 
                                  Votre équipe a besoin de monter en compétence et de réduire les retours ou vous souhaitez 
                                  former vos équipes à la micro soudure.
                                </p>
                              </div>
                              <div class="service-footer d-table text-center">
                                <div class="service-footer-innerwrapper d-table-cell align-middle">
                                  <button type="button" class="btn gsm-bg-company btn-block py-3" >Perfectionnez vos équipes</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="service-block col-lg-4 col-md-12 col-sm-12 px-3 align-self-center d-none d-lg-block">
                              <h2 class="service-textwrapp">Soyez l’acteur du changement</h2>
                          </div>
                          <div class="service-block col-lg-4 col-md-12 col-sm-12 reset-padding">
                            <div class="service card">
                              <div class="service-title d-table text-center">
                                <div class="service-title-innerwrapper d-table-cell align-middle">
                                  <h2>Partenaire</h2>
                                </div>
                              </div>
                              <div class="service-body">
                                <p>
                                  Vous êtes un organisme de formation ou une organisation qui souhaite collaborer 
                                  au développement de la certification et contribuer à normer la filière de la réparation. 
                                  Venez présenter les synergies de votre activité avec nous.
                                </p>
                              </div>
                              <div class="service-footer d-table text-center">
                                <div class="service-footer-innerwrapper d-table-cell align-middle">
                                  <button type="button" class="btn gsm-bg-partner btn-block py-3" >Collaborons</button>
                                </div>  
                              </div>
                            </div>
                          </div>
                    </div>
                </div>

                <div id="satisfaction-certificates-box" class="container container-75 reset-padding certificate-satisfaction-card">
                    <h2>Nos Collaborations</h2>
                    <div class="row mx-0 mt-5">
                                <div class="card satisfaction-card col-sm-6">
                                  <figure>
                                          <label class="satisfaction-label">Satisfaction 100%</label>
                                          <div class="card-body froentside-panel row reset-margin">
                                            <div class="col content-block">
                                              <h5 class="card-title">Repair Safety and Compliance - 1</h5>
                                              <p class="card-text">You are already repairing and want to establish your know-how by assimilating 
                                                the basics of a diagnosis and intervention carried out in safety and compliance </p> 
                                            </div>
                                            <div class="col picture-block">
                                              <img src="images/satatistics-pic.png" class="img-fluid"/>
                                            </div> 
                                          </div>
                                          <figcaption>
                                              <span class="backdrop-border"></span>
                                              <div class="card-header row">
                                                  <div class="col-9 students-satisfaction">
                                                      <div class="row reset-margin">
                                                        <div class="col-6 students-satisfaction-percentage">
                                                          <div class="row reset-margin">
                                                            <div class="col-5 satifaction-percentage">100%</div>
                                                            <div class="col-7 satifaction-text reset-padding">Students Satisfaction</div>
                                                          </div>
                                                        </div>
                                                        <div class="col-6 students-number-count reset-padding">
                                                          <div class="row reset-margin">
                                                            <div class="col-2 students-count">15</div>
                                                            <div class="col-10 students-text reset-padding">No. of Students who have taken the course</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-3 text-center brand-logos reset-padding">
                                                      {/* <!-- <div id="demo" class="carousel slide" data-ride="carousel">
                                                          <div class="row reset-margin carousel-inner">
                                                            <img src="images/brand-logo-1.png" class="carousel-item active"/>
                                                            <img src="images/brand-logo-1.png" class="carousel-item"/>
                                                          </div>
                                                      </div> --> */}
                                                  </div>
                                              </div>
                                              <div class="card-body reset-padding">
                                                  <ul class="backdrop-list">
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Objectives:</span>
                                                          Diagnose a Level 1 failure To disassemble safely and in compliance.
                                                          Replace a subset in safety and compliance. Go back to safety and compliance. 
                                                          Conduct a functionality and compliance test.
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Educational Terms:</span>
                                                          Pedagogical face-to-face | Occupational situations | Technical Workshop
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Prerequisite:</span>
                                                          6 months of experience in repairing nomadic products
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Duration:</span>
                                                          35 Hours (5 days) 
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Location:</span>
                                                          PARIS - IDF
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Individual rate:</span>
                                                          XX
                                                      </li>
                                                  </ul>
                                              </div> 
                                              <div class="card-footer">
                                                <button class="btn gsm-outline-individual  btn-gsm-statics-size pull-left">Learn More</button>
                                                <button class="btn gsm-bg-individual btn-gsm-statics-size pull-right">Apply Now</button>
                                              </div>
                                          </figcaption>
                                  </figure>
                                </div>
                                <div class="card satisfaction-card col-sm-6">
                                  <figure>
                                          <label class="satisfaction-label">Satisfaction 100%</label>
                                          <div class="card-body froentside-panel row reset-margin">
                                            <div class="col content-block">
                                              <h5 class="card-title">Repair Safety and Compliance - 1</h5>
                                              <p class="card-text">You are already repairing and want to establish your know-how by assimilating 
                                                the basics of a diagnosis and intervention carried out in safety and compliance </p> 
                                            </div>
                                            <div class="col picture-block">
                                              <img src="images/satatistics-pic.png" class="img-fluid"/>
                                            </div> 
                                          </div>
                                          <figcaption>
                                              <span class="backdrop-border"></span>
                                              <div class="card-header row">
                                                  <div class="col-9 students-satisfaction">
                                                      <div class="row reset-margin">
                                                        <div class="col-6 students-satisfaction-percentage">
                                                          <div class="row reset-margin">
                                                            <div class="col-5 satifaction-percentage">100%</div>
                                                            <div class="col-7 satifaction-text reset-padding">Students Satisfaction</div>
                                                          </div>
                                                        </div>
                                                        <div class="col-6 students-number-count reset-padding">
                                                          <div class="row reset-margin">
                                                            <div class="col-2 students-count">15</div>
                                                            <div class="col-10 students-text reset-padding">No. of Students who have taken the course</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-3 text-center brand-logos reset-padding">
                                                      {/* <!-- <div id="demo" class="carousel slide" data-ride="carousel">
                                                          <div class="row reset-margin carousel-inner">
                                                            <img src="images/brand-logo-1.png" class="carousel-item active"/>
                                                            <img src="images/brand-logo-1.png" class="carousel-item"/>
                                                          </div>
                                                      </div> --> */}
                                                  </div>
                                              </div>
                                              <div class="card-body reset-padding">
                                                  <ul class="backdrop-list">
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Objectives:</span>
                                                          Diagnose a Level 1 failure To disassemble safely and in compliance.
                                                          Replace a subset in safety and compliance. Go back to safety and compliance. 
                                                          Conduct a functionality and compliance test.
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Educational Terms:</span>
                                                          Pedagogical face-to-face | Occupational situations | Technical Workshop
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Prerequisite:</span>
                                                          6 months of experience in repairing nomadic products
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Duration:</span>
                                                          35 Hours (5 days) 
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Location:</span>
                                                          PARIS - IDF
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Individual rate:</span>
                                                          XX
                                                      </li>
                                                  </ul>
                                              </div> 
                                              <div class="card-footer">
                                                <button class="btn gsm-outline-individual  btn-gsm-statics-size pull-left">Learn More</button>
                                                <button class="btn gsm-bg-individual btn-gsm-statics-size pull-right">Apply Now</button>
                                              </div>
                                          </figcaption>
                                  </figure>
                                </div>
                                <div class="card satisfaction-card col-sm-6">
                                  <figure>
                                          <label class="satisfaction-label">Satisfaction 100%</label>
                                          <div class="card-body froentside-panel row reset-margin">
                                            <div class="col content-block">
                                              <h5 class="card-title">Repair Safety and Compliance - 1</h5>
                                              <p class="card-text">You are already repairing and want to establish your know-how by assimilating 
                                                the basics of a diagnosis and intervention carried out in safety and compliance </p> 
                                            </div>
                                            <div class="col picture-block">
                                              <img src="images/satatistics-pic.png" class="img-fluid"/>
                                            </div> 
                                          </div>
                                          <figcaption>
                                              <span class="backdrop-border"></span>
                                              <div class="card-header row">
                                                  <div class="col-9 students-satisfaction">
                                                      <div class="row reset-margin">
                                                        <div class="col-6 students-satisfaction-percentage">
                                                          <div class="row reset-margin">
                                                            <div class="col-5 satifaction-percentage">100%</div>
                                                            <div class="col-7 satifaction-text reset-padding">Students Satisfaction</div>
                                                          </div>
                                                        </div>
                                                        <div class="col-6 students-number-count reset-padding">
                                                          <div class="row reset-margin">
                                                            <div class="col-2 students-count">15</div>
                                                            <div class="col-10 students-text reset-padding">No. of Students who have taken the course</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-3 text-center brand-logos reset-padding">
                                                      {/* <!-- <div id="demo" class="carousel slide" data-ride="carousel">
                                                          <div class="row reset-margin carousel-inner">
                                                            <img src="images/brand-logo-1.png" class="carousel-item active"/>
                                                            <img src="images/brand-logo-1.png" class="carousel-item"/>
                                                          </div>
                                                      </div> --> */}
                                                  </div>
                                              </div>
                                              <div class="card-body reset-padding">
                                                  <ul class="backdrop-list">
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Objectives:</span>
                                                          Diagnose a Level 1 failure To disassemble safely and in compliance.
                                                          Replace a subset in safety and compliance. Go back to safety and compliance. 
                                                          Conduct a functionality and compliance test.
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Educational Terms:</span>
                                                          Pedagogical face-to-face | Occupational situations | Technical Workshop
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Prerequisite:</span>
                                                          6 months of experience in repairing nomadic products
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Duration:</span>
                                                          35 Hours (5 days) 
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Location:</span>
                                                          PARIS - IDF
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Individual rate:</span>
                                                          XX
                                                      </li>
                                                  </ul>
                                              </div> 
                                              <div class="card-footer">
                                                <button class="btn gsm-outline-individual  btn-gsm-statics-size pull-left">Learn More</button>
                                                <button class="btn gsm-bg-individual btn-gsm-statics-size pull-right">Apply Now</button>
                                              </div>
                                          </figcaption>
                                  </figure>
                                </div>
                                <div class="card satisfaction-card col-sm-6">
                                  <figure>
                                          <label class="satisfaction-label">Satisfaction 100%</label>
                                          <div class="card-body froentside-panel row reset-margin">
                                            <div class="col content-block">
                                              <h5 class="card-title">Repair Safety and Compliance - 1</h5>
                                              <p class="card-text">You are already repairing and want to establish your know-how by assimilating 
                                                the basics of a diagnosis and intervention carried out in safety and compliance </p> 
                                            </div>
                                            <div class="col picture-block">
                                              <img src="images/satatistics-pic.png" class="img-fluid"/>
                                            </div> 
                                          </div>
                                          <figcaption>
                                              <span class="backdrop-border"></span>
                                              <div class="card-header row">
                                                  <div class="col-9 students-satisfaction">
                                                      <div class="row reset-margin">
                                                        <div class="col-6 students-satisfaction-percentage">
                                                          <div class="row reset-margin">
                                                            <div class="col-5 satifaction-percentage">100%</div>
                                                            <div class="col-7 satifaction-text reset-padding">Students Satisfaction</div>
                                                          </div>
                                                        </div>
                                                        <div class="col-6 students-number-count reset-padding">
                                                          <div class="row reset-margin">
                                                            <div class="col-2 students-count">15</div>
                                                            <div class="col-10 students-text reset-padding">No. of Students who have taken the course</div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                  </div>
                                                  <div class="col-3 text-center brand-logos reset-padding">
                                                      {/* <!-- <div id="demo" class="carousel slide" data-ride="carousel">
                                                          <div class="row reset-margin carousel-inner">
                                                            <img src="images/brand-logo-1.png" class="carousel-item active"/>
                                                            <img src="images/brand-logo-1.png" class="carousel-item"/>
                                                          </div>
                                                      </div> --> */}
                                                  </div>
                                              </div>
                                              <div class="card-body reset-padding">
                                                  <ul class="backdrop-list">
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Objectives:</span>
                                                          Diagnose a Level 1 failure To disassemble safely and in compliance.
                                                          Replace a subset in safety and compliance. Go back to safety and compliance. 
                                                          Conduct a functionality and compliance test.
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Educational Terms:</span>
                                                          Pedagogical face-to-face | Occupational situations | Technical Workshop
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Prerequisite:</span>
                                                          6 months of experience in repairing nomadic products
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Duration:</span>
                                                          35 Hours (5 days) 
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Location:</span>
                                                          PARIS - IDF
                                                      </li>
                                                      <li class="backdrop-item">
                                                          <span class="item-heighlight">Individual rate:</span>
                                                          XX
                                                      </li>
                                                  </ul>
                                              </div> 
                                              <div class="card-footer">
                                                <button class="btn gsm-outline-individual  btn-gsm-statics-size pull-left">Learn More</button>
                                                <button class="btn gsm-bg-individual btn-gsm-statics-size pull-right">Apply Now</button>
                                              </div>
                                          </figcaption>
                                  </figure>
                                </div>
                    </div>
                </div>

                
          </section>

          <footer class="site-footer">
            <Footer />
          </footer>  
      </div>
  </div>
    )
}