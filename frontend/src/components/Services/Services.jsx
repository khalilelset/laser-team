import React from "react";
// import kk from '../../../public/img/Upgrade-Blog-6-17.png'


const Services = () => {
  return (
    <div>
      <section id="services">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">SERIVCES</h6>
              <h1>Our Services</h1>
              <p>
              Our web craft store offers a variety of services to help you unleash your creativity and bring your crafting vision to life. From personalized gifts and custom craft kits to online classes and community events, we've got everything you need to satisfy your crafting needs and connect with other crafters.
              </p>
            </div>
          </div>

          <div class="row g-4">

            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect bounceInUp">
                <div class="iconbox">
                <img src={process.env.PUBLIC_URL + '/img/serv1.webp'} style={{borderRadius:'100%'}}/>
                </div>
                <h5 class="mt-4 mb-2">Custom Craft Kits for Events </h5>
                <p>
                We offer custom craft kits that are perfect for events and parties! 
                Offer supplies for guests to decorate their own gift bags, jewelry bags, or clutches.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  {/* <i class="bx bxs-comment-detail"><img src={process.env.PUBLIC_URL + '/img/serv1.webp'} style={{borderRadius:'100%'}}/></i> */}
                  <img src={process.env.PUBLIC_URL + '/img/serv2.jpg'} style={{borderRadius:'100%' , height:'100%'}}/>
                </div>
                <h5 class="mt-4 mb-2">Personalized Gifts for Occasion</h5>
                <p>
                Looking for a unique and thoughtful gift? Our personalized gifts are perfect for any occasion! From custom embroidery to laser engraving
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  {/* <i class="bx bxs-cog"></i> */}
                  <img src={process.env.PUBLIC_URL + '/img/serv3.webp'} style={{borderRadius:'100%' , height:'100%'}}/>
                </div>
                <h5 class="mt-4 mb-2">Customized for Craft Businesses</h5>
                <p>
                Want to promote your craft business? We offer customized merchandise that can help you do just that! From t-shirts and tote bags to stickers
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  {/* <i class="bx bxs-heart"></i> */}
                  <img src={process.env.PUBLIC_URL + '/img/serv4.webp'} style={{borderRadius:'100%' , height:'100%'}}/>
                </div>
                <h5 class="mt-4 mb-2">Craft Supplies for DIY Projects</h5>
                <p>
                Looking for high-quality craft supplies and materials? 
                Paper is great for crafts like origami
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  {/* <i class="bx bxs-rocket"></i> */}
                  <img src={process.env.PUBLIC_URL + '/img/serv5.jpeg'} style={{borderRadius:'100%' , height:'100%'}}/>
                </div>
                <h5 class="mt-4 mb-2">Craft Workshops and Events </h5>
                <p>
                Want to connect with other crafters ? Our craft workshops are a great way to do just that!
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="service card-effect">
                <div class="iconbox">
                  {/* <i class="bx bxs-doughnut-chart"></i> */}
                  <img src={process.env.PUBLIC_URL + '/img/serv6.jpg'} style={{borderRadius:'100%'}}/>
                </div>
                <h5 class="mt-4 mb-2">Monthly Craft Box</h5>
                <p>
                Offer a monthly box where you curate supplies, toolsfor different craft projects around a theme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
