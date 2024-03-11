import React from "react";
import Card from "../../assets/credit-card.png";
import Document from "../../assets/documents-folder.png";
import Time from "../../assets/time.png";

export default function Popup() {
  return (
    <div className="pop-up-notity">
      <div className="flex flex-row  items-center gap-x-4 mb-3">
        <img src={Card} className="notify-icons" alt="card"></img>
        <div>
          <h4 className="text-sm font-normal mb-1">Make Payments</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4 mb-3">
        <img src={Time} className="notify-icons" alt="time"></img>
        <div>
          <h4 className="text-sm font-normal mb-1">View balance details</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4 mb-3">
        <img src={Document} className="notify-icons" alt="document"></img>
        <div>
          <h4 className="text-sm font-normal mb-1">View account details</h4>
        </div>
      </div>
    </div>
  );
}
