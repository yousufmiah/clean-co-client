import React from "react";
import bucketGirl from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div class="hero lg:h-[-60vh] bg-accent mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div
            className="max-w-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-xl">Best Quality</p>
            <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
            <p class="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={bucketGirl} class="h-full" alt="" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl mx-auto mt-[-50px] relative z-50 bg-base-100 shadow-lg p-10 w-5/6">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button className="mt-5 btn btn-primary">Get a Quote</button>
      </div>
    </>
  );
};

export default Landing;
