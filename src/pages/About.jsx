import React from "react";
import PageHeader from "../components/PageHeader";
import background from "../assets/banner/1.jpg";
const About = () => {
  return (
    <>
      <div>
        <PageHeader title="About Us" elem="About" img={background} />
        <div className="text-gray-700 leading-9 mt-11 text-xm">
          <p>
            HS Puja Bhandar is an online platform offering Sanatan Dharma
            religious articles, products, and services.
          </p>
          <p>
            These are the products that are used in Santana Dharma puja/prayers
            as an integral part of Hindu religious practices.
          </p>
          <br />
          <p>
            The HS Puja Bhandar is part of the Haidakhandi Samaj which works to
            serve the legacy of Sri Haidakhan Babaji.
          </p>
          <p>
            In his recent incarnation from 1970 to 1984, Babaji attracted
            devotees from all across the globe.
          </p>
          <p>
            Babaji established two primary ashrams in India - one located near
            Kathgodam and the second one in Ranikhet, thronged by devotees from
            both India and abroad.
          </p>

          <p>
            The website also offers online puja services wherein a devotee can
            avail of specific pooja Anushthans listed on the website.
          </p>
          <p>
            These pujas are performed by a trained team of Pandits, Shastris,
            and Acharyas.
          </p>
          <br />
          <p>
            Through this endeavour we aim to connect Babaji’s devotees across
            countries and continents with the message and principles of Truth,
          </p>
          <p>
            Simplicity, and Love as set out by him. Not only Babaji’s devotees,
            the aim is also to help connect Sanatan Dharma practitioners from
          </p>
          <p>
            across the globe, by way of offering Sanatan Dharma products and
            puja services on one platform.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
