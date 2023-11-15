import React from "react";
import "./why-choose.css";

const WhyChoose = () => {
  return (
    <div className="why-ch">
      <main className="container container-whyCh">
        <h1>Why Choose Nourisha for Your Party Meals</h1>
        <p>
          At Nourisha, we understand that planning the perfect party meal can be
          a daunting task. That's why we've made it our mission to simplify the
          process and ensure your event is a culinary masterpiece. Here's why
          you should choose us:
        </p>
        <section>
          <article>
            <h2>Unmatched Culinary Expertise</h2>
            <h4>
              Our team of seasoned chefs is dedicated to creating dishes that
              not only look incredible but also taste exquisite. From classic
              favorites to innovative creations, we've got your culinary desires
              covered.
            </h4>
          </article>
          <article>
            <h2>Tailored Menus</h2>
            <h4>
              We know that no two parties are the same. That's why we offer
              completely customizable menus to suit your preferences and dietary
              requirements. Vegan, gluten-free, or something truly unique? We've
              got you covered.
            </h4>
          </article>
          <article>
            <h2>Exceptional Service</h2>
            <h4>
              Our commitment to your satisfaction goes beyond the food. We pride
              ourselves on delivering exceptional customer service, ensuring
              your party planning experience is stress-free and enjoyable.
            </h4>
          </article>
          <article>
            <h2>On-Time Delivery</h2>
            <h4>
              You can count on us to deliver your party meals punctually, so you
              can focus on entertaining your guests without a worry in the
              world.
            </h4>
          </article>
        </section>
      </main>
    </div>
  );
};

export default WhyChoose;
