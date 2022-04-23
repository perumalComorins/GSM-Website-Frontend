import { useEffect, useState } from 'react';
import { userService } from '../../services/user.service';
import Sidepanel from "../../components/sidepanel" ;
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function Vae() {

    const type ='certificate-4.php';
    const [vaepanel, setVaepanel] = useState([])

    useEffect(()=>{

      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("inner-page");
      userService.getAllItems(type).then((res) => {  
          setVaepanel(res.json_data)
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
             <div class="indicator-view fullsize-banner" style={{backgroundImage:`url(${vaepanel.banner_section && vaepanel.banner_section.back_img})`,} } >
                      <div class="container container-70 indicator-content reset-padding">
                          <div class="row content-row reverse-row-mobile">
                            <div class="col-md-7 title-banner text-left align-self-center">
                                <h2>{vaepanel.banner_section && vaepanel.banner_section.title}</h2>
                                <p>
                                {vaepanel.banner_section && vaepanel.banner_section.desc}
                                </p>
                                  <button type="button" class="btn gsm-bg-white btn-gsm-md mr-4">{vaepanel.banner_section && vaepanel.banner_section.button_name_1}</button>
                            </div>
                            <div class="col-md-5 picture-banner">
                                <img src={vaepanel.banner_section && vaepanel.banner_section.banner_img} class="img-fluid rounded-circle"/>
                            </div>
                          </div>
                      </div>
              </div>
              
          </div>
          
          <section class="site-body-container">
                <div class="container container-65 reset-padding certificate-contentarea">
                    
                    <div class="content-spaces">
                        {vaepanel.whom_section && vaepanel.whom_section.details.map((items, index) =>
                          <p>{items.list}</p>
                        )}
                    </div>

                    <div class="content-spaces">
                        {vaepanel.whom_section && vaepanel.whom_section.details.map((items, index) =>
                          <p>{items.list}</p>
                        )}
                    </div>

                    <div className="container query-blog-container reset-padding d-none d-lg-block">
                        <div className="row reset-margin">
                            <div className="col query-column reset-padding">
                                <p className="query-text individual-text text-right">If you have any questions in filling this application or curriculum related questions ask us here.</p>
                            </div>
                            <div className="col query-column reset-padding text-center">
                                <button type="button" className="btn gsm-bg-individual btn-gsm-lg">Une Question?</button>
                            </div>
                        </div>
                    </div>
                  
                    <div class="content-spaces">
                        {vaepanel.whom_section && vaepanel.whom_section.details.map((items, index) =>
                          <p>{items.list}</p>
                        )}
                    </div>

                    <div class="content-spaces">
                        {vaepanel.whom_section && vaepanel.whom_section.details.map((items, index) =>
                          <p>{items.list}</p>
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