import React from "react";
import PageHeader from "../components/PageHeader";

const RefundPolicy = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <PageHeader
        title="Shipping, Returns, and Cancellation"
        elem="SHIPPING, RETURNS, AND CANCELLATION"
      />

      {/* Shipping Policy:*/}
      <div className="flex flex-col">
        <h2 className="text-start text-xl text-primary font-bold">
          Shipping Policy:
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>Shipping & Delivery - Domestic & International</p>

          <p>
            All Order Dispatches shall be done be against receipt of payment to
            our account Only, for all mode of payments.
          </p>
          <p>
            The shipping rates for many items we sell are based on the weight /
            volumetric weight which ever is higher as per the Global shipping
            norms. The weight of any such item can be found on its detail page.
            To reflect the policies of the shipping companies we use, all
            weights will be rounded up to the next full kilograms.
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

      {/* Orders placed for products */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          Orders placed for products, usually Ships in 3 to 5 Business days:
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            (Business Days - Business Days means, 5 days from Monday to Friday).
          </p>

          <p>
            The postal dispatches will differ based on the destination and
            postal rates are not readily available to book online orders. They
            are applicable only on orders placed through enquiry form or enquiry
            to info@pujabhandar.com.
          </p>
          <p>Ships: Shipping From Our Warehouse.</p>
          <p>Working Day: Monday - Friday.</p>
          <p>
            Ship time: Time taken for Fulfilment + Packing+ Logistics connecting
            time.
          </p>
          <p>
            Delivery Time: Time taken for each logistics service differes with
            the products to product and destination to destination for each and
            every Logistics service.
          </p>
        </div>
      </div>

      {/* National SHIPMENTS */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          National shipments:
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            Registered Post - Minimal shipping charges applicable for all items.
            Transit time 5 to 7 working days
          </p>

          <p>
            Speed Post - Premium Shipping charges, applicable for all items.
            Transit time 3 to 7 working days
          </p>
          <p>Metros & Prime Cities - 2 to 4 working days</p>
        </div>
      </div>

      {/* Air Shipments */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          Air Shipments
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            For Orders below 15 kgs weight, Normal intransit time is 5 to 10
            Business days
          </p>

          <p>
            For Orders 15 kgs and above 15 kgs weight, Normal intransit time is
            10 to 20 Business days
          </p>
          <p>
            At odd instances, this may vary due to extraneous circumstances.
          </p>
        </div>
      </div>

      {/* return and policy */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          Returns and Refunds Policy
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>Thank you for shopping at Puja Bhandar .</p>

          <p>Please read this policy carefully.</p>
          <p>
            We issue refunds for all Domostic products within 5 days of the
            original purchase of the product.
          </p>
          <p>
            We recommend contacting us for assistance if you experience any
            issues receiving or downloading our products.
          </p>
        </div>
      </div>

      {/* cancellation policy */}
      <div className="flex flex-col mt-10">
        <h2 className="text-start text-xl text-primary font-bold">
          CANCELLATION POLICY
        </h2>
        <div className="text-gray-700 space-y-7 mt-11 text-xm text-start">
          <p>
            We can accommodate an order cancellation request only in cases where
            the product(s) have not yet been dispatched from our warehouse.
            Please make the request to us by:
          </p>

          <p>
            Call our customer service helpline on +91 84600 43203, and request
            for your product(s) to be returned
          </p>
          <p>Email us on info@pujabhandar.com</p>
          <p>
            You can cancel your order online before the product has been
            shipped. Your entire order amount will be refunded.
          </p>
          <p>
            Unfortunately, an order cannot be cancelled once the item has been
            Shipped to you.
          </p>
          <p>Call us on +91 123456789 or email us on info@pujabhandar.com</p>
          <p>
            However, if you opt for having the money transferred back to the
            source of transaction, it may take up to 7-10 business days for the
            respective banks to process the refund. Please get in touch with the
            banks directly in case of any delays post confirmation of
            cancellation/refund by Puja Bhandar
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
