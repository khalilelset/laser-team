import React from "react";

const Team = () => {
  return (
    <div>


      <section id="team">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 class="text-primary">TEAM</h6>
              <h1> Members</h1>
              <p>
                By providing brief bios and photos of the team members, customers can establish a personal connection and build trust with the brand.
              </p>
            </div>
          </div>
          <div class="row text-center g-4">
            {/* test  */}



            <div class="col-lg-4 col-sm-6"></div>

            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                {/* <img src="img/team4.jpg" alt="" /> */}
                <img src={process.env.PUBLIC_URL + '/img/tdr.jpeg'} style={{ borderRadius: '100%' }} />
                <h5 class="mb-0 mt-4">Dr. Salah ElFalou</h5>
                <p>Project Manager</p>
                <div class="social-icons">
                  {/* <a href="#">
        <i class="bx bxl-facebook"></i>
      </a>
      <a href="#">
        <i class="bx bxl-twitter"></i>
      </a>
      <a href="#">
        <i class="bx bxl-instagram-alt"></i>
      </a> */}
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-sm-6"></div>
            {/* test */}




            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src={process.env.PUBLIC_URL + '/img/tkhali.jpeg'} style={{ borderRadius: '100%' }} />
                <h5 class="mb-0 mt-4">Khalil ElSet</h5>
                <p>Web Developer</p>
                <div class="social-icons">

                </div>
              </div>
            </div>



            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src={process.env.PUBLIC_URL + '/img/tkhaledblue.jpeg'} style={{ borderRadius: '100%' }} />
                <h5 class="mb-0 mt-4"> Khaled Khaled</h5>
                <p>Web Developer</p>
                <div class="social-icons">
                  {/* <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src={process.env.PUBLIC_URL + '/img/tali.jpeg'} style={{ borderRadius: '100%' }} />
                <h5 class="mb-0 mt-4">Ali Tout</h5>
                <p>Web Developer</p>
                <div class="social-icons">
                  {/* <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src={process.env.PUBLIC_URL + '/img/touss.jpeg'} style={{ borderRadius: '100%' }} />
                <h5 class="mb-0 mt-4">Oussama Noueeman</h5>
                <p>Web Developer</p>
                <div class="social-icons">
                  {/* <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a> */}
                </div>
              </div>
            </div>

            {/* 
            <div class="col-lg-4 col-sm-6"></div>

            <div class="col-lg-3 col-sm-6">
              <div class="team-member card-effect">
                <img src="img/team4.jpg" alt="" />
                <h5 class="mb-0 mt-4">Sharbat Khan</h5>
                <p>Web Developer</p>
                <div class="social-icons">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
