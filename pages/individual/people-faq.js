export default function PeopleFaq() {
    return(
      <div className="faq-section company-bg">
        <div className="container container-70 reset-padding">
          <div className="row reset-margin">
              <div className="col-md-5 reset-padding faq-accordian-slider">
                  <span className="faq-label company-text">What people say</span>
                  <div id="faqIndicators" className="carousel slide" data-ride="carousel" data-wrap="false" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item faq-item active">
                                <div className="faqMember-thumbnail">
                                    <span className="faqequals-quotes">=</span>
                                    <img src="/assets/images/faq-thumb-1.png" className="img-fluid"/>
                                    <div className="triangleBox"></div>
                                </div>
                                <p className="fag-content">
                                  Present in the mobile telephony market since 1999, 
                                  GSM Master founded its training center at the end of 2014 with the aim of 
                                  contributing to the standardization of the mobile product repair sector by 
                                  offering complete and certifying training, allowing everyone to exercise 
                                  the profession of repairer in full compliance and safety.
                                </p>
                                <h3 className="faqmemberName">Kim Joe <span className="faqmemberDesignation">Highschool</span></h3>
                            </div>
                            <div className="carousel-item faq-item">
                                <div className="faqMember-thumbnail">
                                    <span className="faqequals-quotes">=</span>
                                    <img src="/assets/images/faq-thumb-1.png" className="img-fluid"/>
                                    <div className="triangleBox"></div>
                                </div>
                                <p className="fag-content">
                                  Present in the mobile telephony market since 1999, 
                                  GSM Master founded its training center at the end of 2014 with the aim of 
                                  contributing to the standardization of the mobile product repair sector by 
                                  offering complete and certifying training, allowing everyone to exercise 
                                  the profession of repairer in full compliance and safety.
                                </p>
                                <h3 className="faqmemberName">Kim Joe <span className="faqmemberDesignation">Highschool</span></h3>
                            </div>
                        </div>
                        <div className="faq-Nav">
                            <a className="carousel-control-prev faq-prev" href="#faqIndicators" role="button" data-slide="prev">
                              <img src="/assets/images/testimonial-arrow-left.png" />
                              <span className="sr-only">Previous</span>
                            </a>
                            <span className="faq_num"></span>
                            <a className="carousel-control-next faq-next" href="#faqIndicators" role="button" data-slide="next">
                            <img src="/assets/images/testimonial-arrow-right.png" />
                              <span className="sr-only">Next</span>
                            </a>
                        </div>
                  </div>
              </div>
              <div className="col-md-1 reset-padding d-none d-md-block">
              </div>
              <div id="main" className="col-md-6 reset-padding faq-accordian-list">
                  <h2 className="title">Frequently asked questions</h2>

                  <div className="accordion" id="faq">
                      <div className="card">
                          <div className="card-header" id="faqhead1">
                              <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                              aria-expanded="true" aria-controls="faq1">Enter your questions here</a>
                          </div>

                          <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                              <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                              </div>
                          </div>
                      </div>
                      <div className="card">
                          <div className="card-header" id="faqhead2">
                              <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                              aria-expanded="true" aria-controls="faq2">This is how it will appear when the question is in two lines for a particular FAQ.</a>
                          </div>

                          <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                              <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                              </div>
                          </div>
                      </div>
                      <div className="card">
                          <div className="card-header" id="faqhead3">
                              <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                              aria-expanded="true" aria-controls="faq3">Enter your questions here</a>
                          </div>

                          <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                              <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                              </div>
                          </div>
                      </div>

                      <div className="pull-right mt-4">
                        <a className="faqView_more" href="#">View more</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    )
}