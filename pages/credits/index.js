import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Credits() {
    const type ='application_form.php';
    const [creditpanel, setCreditpanel] = useState([])

    useEffect(()=>{

      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("inner-page");
      userService.getAllItems(type).then((res) => {  
          setCreditpanel(res.json_data)
      }) 
       .catch((err) => console.error(err));  
      
  },[])
    return(
        <div id="wrapper">
        <div class="overlay"></div>

       <Sidepanel />

        <div id="page-content-wrapper" class="container-fluid reset-padding">
            <header class="site-header site-navbar site-navbar-target">
                <Header/>
            </header>
            <div class="site-bannersection">
            {/* style="background-image: url('images/background_banner.png');" */}
                <div class="terms-privacy-legal-view fullsize-banner" style={ {backgroundImage:`url(${creditpanel && creditpanel.img_url})`} } >
                    <div class="legalnotice-content reset-padding">
                        <div class="row legalnotice-row reverse-row-mobile reset-margin">
                            <div class="col-md-5 legalnotice-col d-none d-md-block">
                              <h1>Conditions Générales d’Utilisation</h1>
                              <ul class="legalnotice-lists">
                                  <li><label>GSM MASTER - TRAINING ORGANIZATION</label></li>
                                  <li><label>ADDRESS: </label>2 rue Perdonnet, 75010 Paris</li>
                                  <li><label>SIRET: </label>44978889200015</li>
                                  <li><label>N ° TRAINING ORGANIZATION: </label>11755077875</li>
                              </ul>
                              <ul class="legalnotice-lists">
                                  <li><label>Director of publication: </label>Mme Shreedarani SIVATHASAN</li>
                                  <li><label>Host: </label>OVH, 2 rue Kellermann - 59100 Roubaix - France, Tel: +33 9 72 10 10 07</li>
                                  <li><label>Creation and design graphic: </label></li>
                                  <li><label>Director of publication: </label>Mme Shreedarani SIVATHASAN</li>
                                  <li><label>Host: </label>OVH, 2 rue Kellermann - 59100 Roubaix - France, Tel: +33 9 72 10 10 07</li>
                                  <li><label>Creation and design graphic: </label></li>
                              </ul>
                            </div>
                            <div class="col-md-7 reset-padding">
                              <img src="images/overhead-shot-looking.png"  class="legal-banner"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            
            <section class="site-body-container">
                          <div class="mobile-legal-container legalnotice-col d-block d-md-none">
                              <h1>Conditions Générales d’Utilisation</h1>
                              <ul class="legalnotice-lists">
                                  <li><label>GSM MASTER - TRAINING ORGANIZATION</label></li>
                                  <li><label>ADDRESS: </label>2 rue Perdonnet, 75010 Paris</li>
                                  <li><label>SIRET: </label>44978889200015</li>
                                  <li><label>N ° TRAINING ORGANIZATION: </label>11755077875</li>
                              </ul>
                              <ul class="legalnotice-lists">
                                  <li><label>Director of publication: </label>Mme Shreedarani SIVATHASAN</li>
                                  <li><label>Host: </label>OVH, 2 rue Kellermann - 59100 Roubaix - France, Tel: +33 9 72 10 10 07</li>
                                  <li><label>Creation and design graphic: </label></li>
                                  <li><label>Director of publication: </label>Mme Shreedarani SIVATHASAN</li>
                                  <li><label>Host: </label>OVH, 2 rue Kellermann - 59100 Roubaix - France, Tel: +33 9 72 10 10 07</li>
                                  <li><label>Creation and design graphic: </label></li>
                              </ul>
                            </div>
            </section>

            <footer class="site-footer">
              <Footer />
            </footer>  
        </div>
    </div>
    )
}