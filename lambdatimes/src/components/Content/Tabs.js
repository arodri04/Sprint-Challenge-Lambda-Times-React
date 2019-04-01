import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import "../../CSS/index.css";
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => (
          <div
            className="tabchoices"
            onClick={() => {
              props.ChangeSelected(tab);
            }}
          >
            <p>
              <strong>{tab}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
Tabs.propTypes = { tabs: PropTypes.array };
// Make sure to use PropTypes to validate your types!
export default Tabs;
