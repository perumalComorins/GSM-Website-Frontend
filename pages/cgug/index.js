import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Cgug() {
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
 */}              <div class="terms-privacy-legal-view fullsize-banner" >
                  <div class="container container-70 terms-privacy-legal-content reset-padding">
                      <div class="row terms-privacy-legal-row">
                          <h1>Conditions Générales d’Utilisation</h1>
                          <img src="images/mask-Group-1.png" class="img-fluid"/>
                      </div>
                  </div>
              </div>
              
          </div>
          
          <section class="site-body-container">
                <div class="container container-70 policy-content-box reset-padding">
                  <h4>Purpose of the site</h4>
                  <p>
                  The GSM Master website, a training organization, offers a global service to its users. It presents information and 
                  services relating to the research and financing of vocational training.
                  </p>

                  <h4>Preliminary information for users</h4>
                  <p>
                  By consulting and using the site www.gsmmaster.fr, the user accepts and recognizes the present general 
                  conditions of use applicable to this site. The user is informed that GSM Master may modify and update these 
                  general conditions of use. The user therefore undertakes to keep himself regularly informed of any changes to 
                  these general conditions of use of the site www.gsmmaster.fr.
                  </p>

                  <h4>Site terms of use By the user</h4>
                  <p>
                  The use of the services provided by the site www.gsmmaster.fr requires in particular the provision of an e-mail 
                  address, name and telephone number for each user. It is up to the user to ensure the confidentiality of this 
                  information and its non-fraudulent use.
                  </p>
                  <p>
                  The use and / or modification of the aforementioned information is the sole responsibility of the user. The user 
                  undertakes not to make any use of it other than personal.
                  It is also up to the user to keep the aforementioned information and to provide a functional e-mail address to 
                  allow him to access the services provided by the site www.gsmmaster.fr.
                  </p>

                  <h4>Tele-services and electronic exchanges</h4>
                  <p>The www.gsmmaster.fr site allows users to access several GSM Master services, to take steps with the latter or to 
                  ask questions electronically. GSM Master then sends an acknowledgment of receipt or an electronic registration 
                  acknowledgment stating that the user's request has been taken into account.</p>
                  
                  <h4>Cookies Policy</h4>
                  <p>Access to certain content on the gsmmaster.fr site supposes that you send us personal data about yourself. 
                  When you browse our website, this information may be recorded, or read, in your terminal.</p>

                  <h4>Responsibility for the operation of the site</h4>
                  <p>The continuity of the services provided by the site www.gsmmaster.fr is in principle ensured, subject to any 
                  failures resulting from Internet service providers and / or those that may disrupt or interrupt the connection to the 
                  network or to the site.</p>

                  <p>Any difficulties in accessing the site which may result from various failures of the Internet network (resulting from 
                  access providers, connection difficulties or others) cannot engage the responsibility of GSM Master.</p>

                  <p>The user is also informed that the information and other data provided by GSM Master on the site 
                  www.gsmmaster.fr are purely indicative and have no contractual value. These data and information do not 
                  engage the responsibility of GSM Master and can at any time be updated or deleted at its initiative.</p>



                </div>
          </section>

          <footer class="site-footer">
            <Footer />
          </footer>  
      </div>
  </div>
    )
}