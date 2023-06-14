import ProfileModal from "../ProfileModal/ProfileModal";
import "./Profile.css";
import "./framework.css";
import "./master.css";
import React, { useState } from "react";

const Profile = () => {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
  };
  return (
    <div class="page d-flex">
      <div class="sidebar bg-white p-20 p-relative">
        <h3 class="p-relative txt-c mt-0">Oussama</h3>
        <ul>
          <li>
            <a
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
              href="profile.html"
            >
              <i class="fa-regular fa-user fa-fw"></i>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <i class="fa-solid fa-diagram-project fa-fw"></i>
            <span>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                data-id="123"
                onClick={handleClick}
              >
                Open Modal
              </button>
              {showComponent && <ProfileModal />}
            </span>
          </li>
          <li>
            <a
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              href="projects.html"
            >
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="content w-full">
        <div class=" p-15 between-flex"></div>
        <h1 class="p-relative">Profile</h1>
        <div class="profile-page m-20">
          <div class="overview  rad-10 d-flex align-center">
            <div class="avatar-box txt-c p-20">
              <img class="rad-half mb-10" src="./img/serv1.webp" alt="" />
              <h3 class="m-0">Oussama Noeman</h3>
              <p class="c-grey mt-10">Client</p>
              <div class="level rad-6 bg-eee p-relative">
                <span></span>
              </div>
            </div>
            <div class="info-box w-full txt-c-mobile">
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey fs-15 m-0 w-full">General Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Full Name : </span>
                  <span>Oussama Noeman</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Gender:</span>
                  <span>Male</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Country:</span>
                  <span>Egypt</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" checked />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Personal Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Email:</span>
                  <span>o@nn.sa</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Phone:</span>
                  <span>019123456789</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Date Of Birth:</span>
                  <span>25/10/1982</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Job Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Title:</span>
                  <span>Full Stack Developer</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Programming Language:</span>
                  <span>Python</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Years Of Experience:</span>
                  <span>15+</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" checked />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Billing Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Payment Method:</span>
                  <span>Paypal</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Email:</span>
                  <span>email@website.com</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Subscription:</span>
                  <span>Monthly</span>
                </div>
                <div class="fs-14">
                  <label>
                    <input class="toggle-checkbox" type="checkbox" />
                    <div class="toggle-switch"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
