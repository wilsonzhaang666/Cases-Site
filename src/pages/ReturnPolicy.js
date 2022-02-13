import React from "react";
const ReturnPolicy = () => {
  return (
    <>
      <div style={{ margin: "50px", marginTop: "20px" }}>
        <p>CASES.SITE</p>
        <p style={{ fontSize: "34px" }}>RETURN POLICY</p>
        <br />
        <br />
        <p>
          Fully return only if the quality issues existed with 7 days of sales
        </p>
        <p style={{ fontSize: "14px", color: "Red" }}>
          *The quality issue need to be reported to customer service to check
          the eligibility of returning.{" "}
        </p>
        <p>
          Unable to return because of changing of mind and self-caused damage
          and other reasons except for the quality{" "}
        </p>
        <b style={{ fontSize: "20px", textAlign: "center" }}>
          Please Note that the above policy is not applied to any Special items,
          please carefully consider it before your purchase the special items
          are not refundable/returnable
        </b>

        <div style={{ margin: "20%", marginTop: "20%" }}>
          <b style={{ fontSize: "20px", textAlign: "center" }}>
            Please contact customer service first if you have any questions{" "}
          </b>
        </div>
      </div>
    </>
  );
};

export default ReturnPolicy;
