import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Cgug() {
    const type ='cgug.php';
    const [cgugpanel, setCgugpanel] = useState([])

    useEffect(()=>{

      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("inner-page");
      userService.getAllItems(type).then((res) => {  
          setCgugpanel(res.json_data)
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
              <div class="terms-privacy-legal-view fullsize-banner" style={ {backgroundImage:`url(${cgugpanel && cgugpanel.back_url})`} }>
                  <div class="container container-70 terms-privacy-legal-content reset-padding">
                      <div class="row terms-privacy-legal-row">
                          <h1>{cgugpanel && cgugpanel.title}</h1>
                          <img src={cgugpanel && cgugpanel.banner_url} class="img-fluid"/>
                      </div>
                  </div>
              </div>
              
          </div>
          
          <section class="site-body-container">
                <div class="container container-70 policy-content-box reset-padding">
                {cgugpanel.desc && cgugpanel.desc.map((items, index) =>
                <> 
                  <h4>{items.heading}</h4>
                  <p>{items.text}</p>
                  <p>{items.text_2 && items.text_2}</p>
                  <p>{items.text_3 && items.text_3}</p>
                </>
                  
                )}

                </div>
          </section>

          <footer class="site-footer">
            <Footer />
          </footer>  
      </div>
  </div>
    )
}