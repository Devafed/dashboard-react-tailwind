import React from "react";
import Card from "../../assets/credit-card.png";
import Calender from "../../assets/calendar.png";
import Document from "../../assets/documents-folder.png";
import Time from "../../assets/time.png";

export default function Notification() {
  const [style, setStyle] = React.useState({});

  const Progress = ({ done }) => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 200);
  };

  return (
    <div className=" mble-pd-left flex flex-col w-full xl:w-3/12 py-7 pr-7 md:pl-7 xl:pl-0 pl-7 ">
      <div className="flex flex-col bg-light-blue shadow-xl pb-12 w-full rounded">
        <div className="bg-white shadow-xl mt-20 mx-5 rounded p-5">
          <h2 className="text-left text-xl font-medium mb-2 ">
            Formation Status
          </h2>
          <p className="text-left mb-4">In Progress</p>
          <div className="progress">
            <div className="progress-done" style={style}>
              <Progress done="70" />
            </div>
          </div>
          <h3 className="text-center text-lg font-medium mb-2">
            Estimate Progress
          </h3>
          <p className="text-center mb-4">4-6 business days</p>
          <button className="bg-blue-dark py-2 mx-auto text-white px-5 rounded text-sm text-center flex items-center justify-center font-medium">
            View Status
          </button>
        </div>
        <div className="mt-10 mx-5">
          <h2 className="text-left text-xl font-medium mb-7">
            Your To-Do list
          </h2>
          <div className="flex flex-row  items-center gap-x-6 mb-7 pl-3">
            <img src={Card} className="notify-icons" alt="card"></img>
            <div>
              <h4 className="text-base font-normal mb-1">Run payroll</h4>
              <p className="text-sm">Mar 4 at 6.00 pm</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-6 mb-7 pl-3">
            <img src={Time} className="notify-icons" alt="time"></img>
            <div>
              <h4 className="text-base font-normal mb-1">
                Review time off request
              </h4>
              <p className="text-sm">Mar 7 at 8.00 pm</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-6 mb-7 pl-3">
            <img src={Document} className="notify-icons" alt="document"></img>
            <div>
              <h4 className="text-base font-normal mb-1">
                Sign board resolution
              </h4>
              <p className="text-sm">Mar 8 at 6.00 pm</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-6 mb-7 pl-3">
            <img src={Calender} className="notify-icons" alt="calender"></img>
            <div>
              <h4 className="text-base font-normal mb-1">
                Finish onboard Tony
              </h4>
              <p className="text-sm">Mar 12 at 6.00 pm</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl mt-8 mx-5 rounded p-5">
          <h3 className="pl-5 text-left text-base font-medium mb-1 dots">
            Board meeting
          </h3>
          <p className=" pl-5 text-left text-sm mb-4">Mar 22 at 8.00pm</p>
          <p className=" pl-5 text-left mb-4 text-sm">
            You have been invited to attend a meetings of the Board Directors.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
