import React from "react";
import PageHeader from "../components/PageHeader";

const PrivacyPolicy = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <PageHeader title="Privacy Policy" elem="Privacy Policy" />
      {/*   Privacy Policy for Puja Bhandar: */}
      <div className="flex flex-col">
        <h2 className="text-start text-xl text-primary font-bold">
          Privacy Policy for Puja Bhandar:
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            At Puja Bhandar, accessible from https://www.thepujabhandar.com/,
            one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by Puja Bhandar and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in HS Puja Bhandar.
          </p>
          <p>
            Estimated Shipping Rates will be quoted once the orders is placed
            and you can calculate the same before check out.
          </p>
          <p>
            All Deliveries within India are done through Speed Post &,
            International couriers are done based on the products ordered as per
            the order placed by Customer
          </p>
          <p>
            The shipping charges quoted is exclusive of Duty, Tax & Any Other
            end charges as applicable at the destination country. They have to
            be borne and paid to the concerned entities - Customs House/Service
            Provider by the customer/consignee at the time of receiving the
            parcel.
          </p>
        </div>
      </div>
      {/* Information we collect */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          Information we collect
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>

          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
        </div>
      </div>
      {/* Cookies and Web Beacons */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          Cookies and Web Beacons
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            Like any other website, HS Puja Bhandar uses 'cookies'. These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.
          </p>
        </div>
      </div>
      {/* Advertising Partners Privacy Policies */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          Advertising Partners Privacy Policies
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Puja Bhandar.
          </p>
          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on HS Puja Bhandar,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </p>
          <p>
            Note that HS Puja Bhandar has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>
        </div>
      </div>
      {/* CCPA Privacy Rights  */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </p>
          <p>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </p>
        </div>
      </div>

      {/* Children's Information */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          Children's Information
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            HS Puja Bhandar does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
