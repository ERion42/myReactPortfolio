import React from 'react';

export default function Contact() {
  return (
    <div class="container">
      <div class="">
        <div class="">

          {/* Header section */}
          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Contact Me</h1>
            <p class="fs-5 text-muted">Want to get ahold of the creative mind that made this website and the others listed within it? There are options!</p>
          </div>

          {/* Contact Information */}
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {/* GitHub */}
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3 text-white bg-primary border-primary">
                  <h4 class="my-0 fw-normal">GitHub</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title"><a href="https://github.com/ERion42" target="_blank" rel="noreferrer">ERion42</a></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>See all my projects</li>
                    <li>Give direct feedback</li>
                  </ul>
                  {/* <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button> */}
                </div>
              </div>
            </div>
            {/* LinkedIn */}
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3 text-white bg-primary border-primary">
                  <h4 class="my-0 fw-normal">LinkedIn</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title"><a href="https://www.linkedin.com/in/eric-rion-97096166/" target="_blank" rel="noreferrer">Eric Rion</a></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Follow me professionally</li>
                    <li>Message me for quick contact</li>
                  </ul>
                  {/* <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button> */}
                </div>
              </div>
            </div>
            {/* Email */}
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                  <h4 class="my-0 fw-normal">Email</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title"><a href="mailto: ericrion3000@gmail.com">ericrion3000</a></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Email me directly</li>
                    <li>Another good way to reach me</li>
                  </ul>
                  {/* <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button> */}
                </div>
              </div>
            </div>
          </div>
          {/* Phone */}
          <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary text-center">
                  <h4 class="my-0 fw-normal">Phone</h4>
                </div>
                <div class="card-body text-center">
                  <h1 class="card-title pricing-card-title">404-542-6049</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Contact me directly</li>
                    <li>If you get my voicemail just leave a message</li>
                  </ul>
                  {/* <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button> */}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
