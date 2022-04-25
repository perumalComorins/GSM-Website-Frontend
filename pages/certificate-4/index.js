import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Certificate4() {

    const type ='certificate-4.php';
    const [certificate4panel, setCertificate4panel] = useState([])

    useEffect(()=>{

      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("inner-page");
      userService.getAllItems(type).then((res) => {  
          setCertificate4panel(res.json_data)
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
             <div class="indicator-view fullsize-banner" style={ {backgroundImage:`url(${certificate4panel.banner_section && certificate4panel.banner_section.back_img})`,} } >
                      <div class="container container-70 indicator-content reset-padding">
                          <div class="row content-row reverse-row-mobile">
                            <div class="col-md-7 title-banner text-left align-self-center">
                                <h2>{certificate4panel.banner_section && certificate4panel.banner_section.title}</h2>
                                <p>
                                {certificate4panel.banner_section && certificate4panel.banner_section.desc}
                                </p>
                                  <button type="button" class="btn gsm-bg-white btn-gsm-md mr-4">{certificate4panel.banner_section && certificate4panel.banner_section.button_name_1}</button>
                                  <button type="button" class="btn gsm-bg-individual btn-gsm-md">{certificate4panel.banner_section && certificate4panel.banner_section.button_name_2}</button>
                            </div>
                            <div class="col-md-5 picture-banner">
                                <img src={certificate4panel.banner_section && certificate4panel.banner_section.banner_img} class="img-fluid rounded-circle"/>
                            </div>
                          </div>
                      </div>
              </div>
              
          </div>
          
          <section class="site-body-container">
                <div class="container container-65 reset-padding certificate-contentarea">
                    <div class="content-spaces">
                      <h2>{certificate4panel.certification_section && certificate4panel.certification_section.title}</h2>
                      <p>{certificate4panel.certification_section && certificate4panel.certification_section.desc}</p>
                      <ul>
                        {certificate4panel.certification_section && certificate4panel.certification_section.details.map((items, index) =>
                          <li>{items.list}</li>
                        )}
                      </ul>  
                    </div>
                    <div class="content-spaces">
                      <h2>{certificate4panel.gsm_master_section && certificate4panel.gsm_master_section.title}</h2>
                        {certificate4panel.gsm_master_section && certificate4panel.gsm_master_section.details.map((items, index) =>
                          <p>{items.list}</p>
                        )}
                    </div>
                    <div class="content-spaces">
                      <h2>{certificate4panel.whom_section && certificate4panel.whom_section.title}</h2>
                        {certificate4panel.whom_section && certificate4panel.whom_section.details.map((items, index) =>
                          <p>{items.list}</p>
                        )}
                    </div>
                    
                </div>
                <div class="container container-75 reset-padding certificate-cardarea">
                    <div class="row justify-content-center mx-0 mb-5">
                      {certificate4panel.modules && certificate4panel.modules.first_section.map((items, index) =>
                          <div class={`service-block col-lg-4 col-md-12 col-sm-12 reset-padding ${index == 0 ? 'mr-right-100': ''}`}>
                            <div class="service card">
                              <div class="service-title d-table text-center">
                                <div class="service-title-innerwrapper d-table-cell align-middle">
                                  <h2>{items.title}</h2>
                                </div>
                              </div>
                              <div class="service-body">
                                <p>{items.desc}</p>
                              </div>
                              <div class="service-footer d-table text-center">
                                <div class="service-footer-innerwrapper d-table-cell align-middle">
                                  <button type="button" class={`btn btn-block py-3 ${items.class_name}`} >{items.button_name}</button>
                                </div>
                              </div>
                            </div>
                          </div>
                      )}      
                    </div>

                    <div class="row justify-content-center reset-margin">
                      {certificate4panel.modules && certificate4panel.modules.second_section.map((items, index) =>
                        <>
                        {index == 1 ?
                            <div class="service-block col-lg-4 col-md-12 col-sm-12 px-3 align-self-center d-none d-lg-block">
                            <h2 class="service-textwrapp">{items.center_text}</h2>
                          </div> :
                            <div class="service-block col-lg-4 col-md-12 col-sm-12 reset-padding">
                              <div class="service card">
                                <div class="service-title d-table text-center">
                                  <div class="service-title-innerwrapper d-table-cell align-middle">
                                    <h2>{items.title}</h2>
                                  </div>
                                </div>
                                <div class="service-body">
                                  <p>
                                  {items.desc}
                                  </p>
                                </div>
                                <div class="service-footer d-table text-center">
                                  <div class="service-footer-innerwrapper d-table-cell align-middle">
                                    <button type="button" class={`btn btn-block py-3 ${items.class_name}`} >{items.button_name}</button>
                                  </div>
                                </div>
                              </div>
                            </div> 
                            
                          } 
                          {/* <div class="service-block col-lg-4 col-md-12 col-sm-12 reset-padding">
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
                          </div> */}
                      </>
                      )}
                    </div>
                </div>

                <div id="satisfaction-certificates-box" class="container container-75 reset-padding certificate-satisfaction-card">
                    <h2>{certificate4panel.collaborate_section && certificate4panel.collaborate_section.title}</h2>
                    <div class="row mx-0 mt-5">
                      {certificate4panel.collaborate_section && certificate4panel.collaborate_section.cards.map((items, index) =>
                                <div class="card satisfaction-card col-sm-6">
                                  <figure>
                                          <label class="satisfaction-label">{items.label}</label>
                                          <div class="card-body froentside-panel row reset-margin">
                                            <div class="col content-block">
                                              <h5 class="card-title">{items.title_1}</h5>
                                              <p class="card-text">{items.desc}</p> 
                                            </div>
                                            <div class="col picture-block">
                                              <img src={items.photo_link} class="img-fluid"/>
                                            </div> 
                                          </div>
                                          {/* <figcaption>
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
                                          </figcaption> */}
                                  </figure>
                                </div>
                      )}
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