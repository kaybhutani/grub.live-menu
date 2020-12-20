import React from "react";
import styles from "./Offers.module.scss";
import OffersModal from "./OffersModal/OffersModal";

const Offers = ({ offers }) => {
  return (
    <>
      {offers && offers.length > 0 ? (
        <div className={styles.offersWrapper}>
          <div className={styles.offersMarque}>
            <marquee>
              <span className={`eos-icons ${styles.starIcon}`}> star </span>
              {offers.map((element, key) => {
                return (
                  <i key={key}>
                    {element}{" "}
                    <span className={`eos-icons ${styles.starIcon}`}>
                      {" "}
                      star{" "}
                    </span>
                  </i>
                );
              })}
            </marquee>
          </div>
          <OffersModal offers={offers} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Offers;
