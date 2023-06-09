import React from "react";

const Features = () => {
  return (
    <div>
      <section class="row w-100 py-0 bg-light" id="features">
        <div class="col-lg-6 col-img"></div>
        <div class="col-lg-6 py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <h3 class="text-primary">Welcome to Craft Connect</h3>
                <h1>a powerful platform that brings together craft</h1>
                <p>
                Whether you're looking to explore unique crafts,

showcase your creations, or forge valuable partnerships, Craft

Connect is here to empower you.
                </p>

                <div class="feature d-flex mt-5">
                  <div class="iconbox me-3">
                    {/* <i class="bx bxs-comment-edit"></i> */}
                    <img src={process.env.PUBLIC_URL + '/img/fe1.webp'} style={{borderRadius:'100%' , height:'100%'}}/>
                  </div>
                  <div>
                    <h5>Product Customization</h5>
                    <p>
                    Offer customers the ability to customize their orders, such as choosing colors, sizes, and materials, to create a unique and personalized product.
                    </p>
                  </div>
                </div>
                <div class="feature d-flex">
                  <div class="iconbox me-3">
                    {/* <i class="bx bxs-user-circle"></i> */}
                    <img src={process.env.PUBLIC_URL + '/img/fe2.jpg'} style={{borderRadius:'100%' , height:'100%'}}/>
                  </div>
                  <div>
                    <h5>Virtual Try-On</h5>
                    <p>
                    Allow customers to virtually try on products, such as jewelry or clothing, using augmented reality technology to see how they would look before making a purchase.
                    </p>
                  </div>
                </div>
                <div class="feature d-flex">
                  <div class="iconbox me-3">
                    {/* <i class="bx bxs-download"></i> */}
                    <img src={process.env.PUBLIC_URL + '/img/fe3.jpg'} style={{borderRadius:'100%' , height:'100%'}}/>
                  </div>
                  <div>
                    <h5>Live Chat Support</h5>
                    <p>
                    Provide customers with the ability to chat with a support representative in real-time to get answers to their questions, resolve any issues, and receive personalized recommendations.
                      Nihil perspiciatis illo{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
