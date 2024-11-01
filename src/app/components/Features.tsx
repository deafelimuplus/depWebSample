"use client";

export function Features() {
  return (
    <>
      <section id="features" className="features_area pt-35 pb-80">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-7 col-sm-8">
                      <div className="single_features mt-30 features_1 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                          <div className="features_icon">
                              <i className="lni lni-code"></i>
                          </div>
                          <div className="features_content">
                              <h4 className="features_title">Bootstrap</h4>
                              <p>Lorem ipsum dolor sit ame consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                          </div>
                      </div> { /* single featuresow */ }
                  </div>
                  <div className="col-lg-4 col-md-7 col-sm-8">
                      <div className="single_features mt-30 features_2 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                          <div className="features_icon">
                              <i className="lni lni-layers"></i>
                          </div>
                          <div className="features_content">
                              <h4 className="features_title">HTML5</h4>
                              <p>Lorem ipsum dolor sit ame consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                          </div>
                      </div> { /* single featuresow */ }
                  </div>
                  <div className="col-lg-4 col-md-7 col-sm-8">
                      <div className="single_features mt-30 features_3 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.9s">
                          <div className="features_icon">
                              <i className="lni lni-exit-down"></i>
                          </div>
                          <div className="features_content">
                              <h4 className="features_title">Free</h4>
                              <p>Lorem ipsum dolor sit ame consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                          </div>
                      </div> { /* single featuresow */ }
                  </div>
              </div> { /* row */ }
          </div> { /* container */ }
      </section>
    </>
  );
}
