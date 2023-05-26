import Item from "../item/item";

import "./tabContent.css";

const TabContent = (props) => {
  return (
    <div id={props.tab} className="tabContent">
      {props.details.map((item, index) => {
        if (props.tab === "daily") {
          return (
            <Item
              key={item.id}
              title={item.title}
              hours={item.timeframes.daily.current}
              prevLog={item.timeframes.daily.previous}
            />
          );
        } else if (props.tab === "weekly") {
          return (
            <Item
              key={item.id}
              title={item.title}
              hours={item.timeframes.weekly.current}
              prevLog={item.timeframes.weekly.previous}
            />
          );
        } else if (props.tab === "monthly") {
          return (
            <Item
              key={item.id}
              title={item.title}
              hours={item.timeframes.monthly.current}
              prevLog={item.timeframes.monthly.previous}
            />
          );
        }
        return <h1>{item.tilte}</h1>;
      })}
    </div>
  );
};

export default TabContent;
