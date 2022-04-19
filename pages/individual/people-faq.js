import { useContext, useEffect, useState } from 'react';
export default function PeopleFaq({value}) {
    const individualpanel = value;

    useEffect(()=>{
        if(individualpanel && individualpanel.length > 0){
            $(document).ready(function () {
                {/* Faq slider jquery script Starts */}
                var totalfaqItems = $('.faq-item').length;
                var currentfaqIndex = $('div.faq-item.active').index() + 1;
                var currentfaqIndex_active;
                var downfaq_index;

                // $('.testimonial_num').html(''+currentIndex+'/'+totalItems+'');
                $('.faq_num').html(''+currentfaqIndex+'');

                $(".faq-next").click(function(){
                    currentfaqIndex_active = $('div.faq-item.active').index() + 2;
                    if (totalfaqItems >= currentfaqIndex_active)
                    {
                        downfaq_index= $('div.faq-item.active').index() + 2;
                        //$('.testimonial_num').html(''+currentIndex_active+'/'+totalItems+'');
                        $('.faq_num').html(''+currentfaqIndex_active+'');
                    }
                });

                $(".faq-prev").click(function(){
                    downfaq_index=downfaq_index-1;
                    if (downfaq_index >= 1 ){
                        //$('.testimonial_num').html(''+downfaq_index+'/'+totalItems+'');
                        $('.faq_num').html(''+downfaq_index+'');
                    }
                });
            });
        }
    },[individualpanel])
    return(
      <div className="faq-section company-bg">
        <div className="container container-70 reset-padding">
          <div className="row reset-margin">
              <div className="col-md-5 reset-padding faq-accordian-slider">
                  <span className="faq-label company-text">{individualpanel.faq_section && individualpanel.faq_section.title}</span>
                  <div id="faqIndicators" className="carousel slide" data-ride="carousel" data-wrap="false" data-interval="false">
                        <div className="carousel-inner">
                            {individualpanel.faq_section && individualpanel.faq_section.student_details.map((items, index) => 
                                <div className={`carousel-item faq-item ${index == 0 &&  'active'}`}>
                                    <div className="faqMember-thumbnail">
                                        <span className="faqequals-quotes">=</span>
                                        <img src={items.photo_link} className="img-fluid"/>
                                        <div className="triangleBox"></div>
                                    </div>
                                    <p className="fag-content">
                                    {items.desc}
                                    </p>
                                    <h3 className="faqmemberName">{items.student_name}<span className="faqmemberDesignation">{items.qualification}</span></h3>
                                </div>
                            )}
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
                  <h2 className="title">{individualpanel.faq_section && individualpanel.faq_section.faq.title}</h2>

                  <div className="accordion" id="faq">
                      {individualpanel.faq_section && individualpanel.faq_section.faq.questions.map((items, index) => 
                        <div className="card">
                            <div className="card-header" id="faqhead1">
                                <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                                aria-expanded="true" aria-controls="faq1">{items.quest}</a>
                            </div>

                            <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                <div className="card-body">
                                    {items.answer}
                                </div>
                            </div>
                        </div>
                        )}
                    </div>

                      <div className="pull-right mt-4">
                        <a className="faqView_more" href="#">{individualpanel.faq_section && individualpanel.faq_section.faq.label}</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    
    )
}