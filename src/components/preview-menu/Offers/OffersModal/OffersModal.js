import React from "react";
import Popup from "reactjs-popup";
import OfferItem from "./OfferItem/OfferItem";
import styles from "./OffersModal.module.scss";

let testOffers = [
  {
    offAmount: 10,
    content: "Twerk on the table and get 10% off",
  },
  {
    offAmount: 50,
    content: "Kiss the waiter and get 50% off!",
  },
  {
    offAmount: 70,
    content: "Show boobs and 70% off on the house.",
  },
  {
    offAmount: 70,
    content: "Show boobs and 70% off on the house.",
  },
  {
    offAmount: 70,
    content: "Show boobs and 70% off on the house.",
  },
  {
    offAmount: 70,
    content: "Show boobs and 70% off on the house.",
  },
];

const OffersModal = ({ offers }) => {
  let offersList = testOffers.map((offer) => <OfferItem {...offer} />);
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
