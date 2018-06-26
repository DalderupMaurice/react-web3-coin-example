import React from "react";
import PropTypes from "prop-types";

const DataDisplay = ({ text, data }) => (
  <div style={{ fontSize: "14px", textAlign: "left", margin: "auto" }}>
    <pre>{text}{data && JSON.stringify(data, null, 2)}</pre>
  </div>
);

DataDisplay.propTypes = {
  data: PropTypes.any
};

DataDisplay.defaultProps = {
  data: null
};

export default DataDisplay;
