import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function dpr() {
    const type ='dpr.php';
    const [dprpanel, setDprpanel] = useState([])

    useEffect(()=>{

      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("inner-page");
      userService.getAllItems(type).then((res) => {  
          setDprpanel(res.json_data)
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
              <div class="terms-privacy-legal-view fullsize-banner" style={{backgroundImage:`url(${dprpanel && dprpanel.back_url})`} }>
                  <div class="container container-70 terms-privacy-legal-content reset-padding">
                      <div class="row terms-privacy-legal-row">
                          <h1>{dprpanel && dprpanel.title}</h1>
                          <img src={dprpanel && dprpanel.banner_url} class="img-fluid"/>
                      </div>
                  </div>
              </div>
              
          </div>
          
          <section class="site-body-container">
                <div class="container container-70 policy-content-box reset-padding">
                {dprpanel.desc && dprpanel.desc.map((items, index) =>
                  <p>{items.text}</p>
                )}
                  
                <ol className="individual-text ml-3 mt-5">
                        {dprpanel.question_list && dprpanel.question_list.map((items, index) =>
                            <li>{items.list}</li>
                        )}
                </ol>
                  
                </div>
          </section>

          <footer class="site-footer">
            <Footer />
          </footer>  
      </div>
  </div>
    )
}