import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Application_gsm (){
    const type ='application_form.php';
    const [applicationpanel, setApplicationpanel] = useState([])

    useEffect(()=>{
      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("inner-page");
        userService.getAllItems(type).then((res) => {  
            setApplicationpanel(res.json_data)
        }) 
         .catch((err) => console.error(err));  
        
    },[])
    return(
        <div id="wrapper">
            {console.log(applicationpanel)}
      <div class="overlay"></div>
        <Sidepanel/>
      <div id="page-content-wrapper" class="container-fluid reset-padding">
          <Header />
          <div class="site-bannersection">
              <div class="application-page-banner banner-content">
                    <div class="container container-65 reset-padding">
                        <div class="row reset-margin">
                            <div class="col-7 col-md-5 banner-text ">
                              <h2 class="text-center">{applicationpanel && applicationpanel.title}</h2>
                            </div>
                            <div class="col-5 col-md-6 d-block d-md-none reset-padding">
                              <img src="/assets/images/placeit-close-up.png" class="img-fluid" />
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          
          <section class="site-body-container">
                <div class="container container-65 applicationpage-body-container reset-padding">
                    <div class="row reset-margin"> 
                            <div class="col-md-5 profile-picture-section reset-padding d-none d-md-block">
                              <img src={applicationpanel && applicationpanel.photo} class="img-fluid" />
                            </div>
                            <div class="col-md-1 reset-padding">
                            </div>
                            <div class="col-md-6 profile-form-section">
                                <form id="gsmProfile-form">
                                  <h2 class="gsmProfile-title">{applicationpanel && applicationpanel.form_title}</h2>
                                  <p class="individual-text gsmProfile-content">{applicationpanel && applicationpanel.form_desc}</p>
                                  <div class="form-row singlespace-row reset-margin">
                                    <div class="form-group gsm-form-group col-md-12 reset-padding mb-4">
                                      <label for="profileform-Fname" class="gsm-form-label individual-text">First Name</label>
                                      <input type="text" class="form-control" id="profileform-Fname" aria-describedby="emailHelp" placeholder="Enter your first name" />
                                    </div>
                                    <div class="form-group gsm-form-group col-md-12 reset-padding mb-4">
                                      <label for="profileform-Lname" class="gsm-form-label individual-text">Last Name</label>
                                      <input type="text" class="form-control" id="profileform-Lname" placeholder="Enter your last name" />
                                    </div>
                                    <div class="form-group gsm-form-group col-md-12 reset-padding mb-4">
                                      <label for="profileform-Email" class="gsm-form-label individual-text">Email </label>
                                      <input type="email" class="form-control" id="profileform-Email" placeholder="Enter your email address" />
                                    </div>
                                    <div class="form-group gsm-form-group col-md-12 reset-padding mb-4">
                                      <label for="profileform-Phno" class="gsm-form-label individual-text">Phone Number </label>
                                      <input type="text" class="form-control" id="profileform-Phno" placeholder="Enter your Phone Number" />
                                    </div>
                                    <div class="form-group gsm-form-group col-md-12 reset-padding mb-4">
                                      <label for="profileform-Location" class="gsm-form-label individual-text">Location </label>
                                      <input type="text" class="form-control" id="profileform-Location" placeholder="Enter your locationp" />
                                    </div>
                                    <div class="form-group gsm-form-group col-md-12 reset-padding mb-4">
                                        <label for="profileform-Location" class="gsm-form-label individual-text">Post Applied for </label>
                                        <div class="dropdown gsmDropdown">
                                          <a class="dropdown-toggle gsm-dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                            The post you are going to apply for
                                          </a>
                                          <ul class="dropdown-menu gsm-dropdown-menu">
                                              <hr />
                                              <li>
                                                  <a href="#" class="gsm-dropdown-link">
                                                      Part time
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="#" class="gsm-dropdown-link">
                                                      Full time
                                                  </a>
                                              </li>
                                          </ul>
                                        </div>
                                    </div>
                                    <div class="form-group gsm-form-group col-md-12 reset-padding mb-4">
                                      <label for="profileform-Location" class="gsm-form-label individual-text">Description</label>
                                      <textarea class="form-control" placeholder="Enter a few lines about your fit with this job" rows="5"></textarea>
                                    </div>
                                    <div class="form-group gsm-form-group col-md-12 reset-padding mb-4">
                                      <label for="profileform-Location" class="gsm-form-label individual-text">Insert your CV</label>
                                      <div class="file-upload-wrapper col-lg-12 col-md-12 col-sm-12" data-text="File name will appear here ">
                                          <input name="file-upload-field" type="file" class="file-upload-field" value="" />
                                      </div>
                                    </div>
                                    <p class="Profile-disclaimer individual-text">
                                    {applicationpanel && applicationpanel.end_desc}
                                    </p>
                                  </div>
                                  
                                  <div class="form-check emailform-check">
                                    <input type="checkbox" class="form-check-input emailform-check-input" id="emailform-check-label" />
                                    <label class="form-check-label emailform-label" for="emailform-check-label">{applicationpanel && applicationpanel.agree}</label>
                                  </div>
                                  <button type="button" class="btn gsm-bg-individual btn-block">{applicationpanel && applicationpanel.button_name}</button>
                                </form>
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