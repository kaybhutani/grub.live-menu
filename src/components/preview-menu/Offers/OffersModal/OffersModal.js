import React from "react";
import Popup from "reactjs-popup";
import OfferItem from "./OfferItem/OfferItem";
import styles from "./OffersModal.module.scss";

const OffersModal = ({ offers }) => {
  let offersList = offers.map((offer, index) => (
    <OfferItem key={index} content={offer} />
  ));
  return (
    <Popup
      modal
      nested
      trigger={
        <div className={styles.seeAllBtn}>
          See all <i className="eos-icons">arrow_drop_up</i>
        </div>
      }
    >
      <div className="modal">
        <div>{offersList}</div>
      </div>
    </Popup>
  );
};

export default OffersModal;
