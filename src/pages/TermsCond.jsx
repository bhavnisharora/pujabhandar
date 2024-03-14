import React from "react";
import PageHeader from "../components/PageHeader";

const TermsCond = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <PageHeader title="Terms and Conditions" elem="Terms and Conditions" />
      {/* introduction */}
      <div className="flex flex-col">
        <h2 className="text-start text-xl text-primary font-bold">
          1. Introduction
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>Welcome to PUJA BHANDAR (“Company”, “we”, “our”, “us”)!</p>

          <p>
            These Terms of Service (“Terms”, “Terms of Service”) govern your use
            of our website located at pujabhandar.com/ (together or individually
            “Service”) operated by PUJA BHANDAR.
          </p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, safeguard and disclose information that results from
            your use of our web pages.
          </p>
          <p>
            Your agreement with us includes these Terms and our Privacy Policy
            (“Agreements”). You acknowledge that you have read and understood
            Agreements, and agree to be bound of them.
          </p>
          <p>
            If you do not agree with (or cannot comply with) Agreements, then
            you may not use the Service, but please let us know by emailing at
            info@hspujabhandar.com so we can try to find a solution. These Terms
            apply to all visitors, users and others who wish to access or use
            Service.
          </p>
        </div>
      </div>
      {/* communications */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          2. Communications
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            By using our Service, you agree to subscribe to newsletters,
            marketing or promotional materials and other information we may
            send. However, you may opt out of receiving any, or all, of these
            communications from us by following the unsubscribe link or by
            emailing at info@hspujabhandar.com.
          </p>
        </div>
      </div>
      {/* purchases */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          3. Purchases
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            If you wish to purchase any product or service made available
            through Service (“Purchase”), you may be asked to supply certain
            information relevant to your Purchase including but not limited to,
            your credit or debit card number, the expiration date of your card,
            your billing address, and your shipping information.
          </p>
          <p>
            You represent and warrant that: (i) you have the legal right to use
            any card(s) or other payment method(s) in connection with any
            Purchase; and that (ii) the information you supply to us is true,
            correct and complete.
          </p>
          <p>
            We may employ the use of third party services for the purpose of
            facilitating payment and the completion of Purchases. By submitting
            your information, you grant us the right to provide the information
            to these third parties subject to our Privacy Policy.
          </p>
          <p>
            We reserve the right to refuse or cancel your order at any time for
            reasons including but not limited to: product or service
            availability, errors in the description or price of the product or
            service, error in your order or other reasons.
          </p>
        </div>
      </div>
      {/* contests */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          4. Content
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            Content found on or through this Service are the property of HS PUJA
            BHANDAR or used with permission. You may not distribute, modify,
            transmit, reuse, download, repost, copy, or use said Content,
            whether in whole or in part, for commercial purposes or for personal
            gain, without express advance written permission from us.
          </p>
        </div>
      </div>
      {/* accounts */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          5. Accounts
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            When you create an account with us, you guarantee that you are above
            the age of 18, and that the information you provide us is accurate,
            complete, and current at all times. Inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your
            account on Service.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password, including but not limited to the restriction
            of access to your computer and/or account. You agree to accept
            responsibility for any and all activities or actions that occur
            under your account and/or password, whether your password is with
            our Service or a third-party service. You must notify us immediately
            upon becoming aware of any breach of security or unauthorized use of
            your account.
          </p>
          <p>
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you,
            without appropriate authorization. You may not use as a username any
            name that is offensive, vulgar or obscene.
          </p>
        </div>
      </div>
      {/* intellectual property*/}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          6. Intellectual Property
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            Service and its original content (excluding Content provided by
            users), features and functionality are and will remain the exclusive
            property of HS PUJA BHANDAR and its licensors. Service is protected
            by copyright, trademark, and other laws of and foreign countries.
            Our trademarks may not be used in connection with any product or
            service without the prior written consent of PUJA BHANDAR.
          </p>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default TermsCond;
