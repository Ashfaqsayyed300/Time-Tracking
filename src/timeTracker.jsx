import React from "react";
import UserInfo from "./component/userInfo/userInfo";
import Time from "./component/time/time";
import TabContent from "./component/tabContent/tabContent";

const TimeTracker = () => {
  const data = [
    {
      id: 1,
      username: "John Doe",
      details: [
        {
          id: 1,
          title: "Work",
          timeframes: {
            daily: { current: 5, previous: 7 },
            weekly: { current: 42, previous: 35 },
            monthly: { current: 72, previous: 85 },
          },
        },
        {
          id: 2,
          title: "Play",
          timeframes: {
            daily: { current: 1, previous: 2 },
            weekly: { current: 10, previous: 8 },
            monthly: { current: 42, previous: 25 },
          },
        },
        {
          id: 3,
          title: "React",
          timeframes: {
            daily: { current: 0, previous: 1 },
            weekly: { current: 5, previous: 7 },
            monthly: { current: 26, previous: 30 },
          },
        },
        {
          id: 4,
          title: "Exercise",
          timeframes: {
            daily: { current: 1, previous: 1 },
            weekly: { current: 8, previous: 6 },
            monthly: { current: 24, previous: 27 },
          },
        },
        {
          id: 5,
          title: "Social",
          timeframes: {
            daily: { current: 1, previous: 2 },
            weekly: { current: 5, previous: 9 },
            monthly: { current: 19, previous: 21 },
          },
        },
        
      ],
    },
  ];
  return (
    <div className="timeTracker">
      <div className="timeList">
        <UserInfo data={data} />
        <Time />
      </div>

      <div className="tracker tabContainer">
        <TabContent tab="daily" className="tabContent active" details={data[0].details} />
        <TabContent tab="weekly" className="tabContent" details={data[0].details}/>
        <TabContent tab="monthly" className="tabContent" details={data[0].details}/>
      </div>
    </div>
  );
};

export default TimeTracker;
