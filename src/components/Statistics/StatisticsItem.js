import React from "react";
import PropTypes from "prop-types";
import styles from "./statistics.module.css";

const randomColor = () => {
  let r = Math.round(Math.random() * 256);
  let g = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

export const StatisticsItem = ({ stat: { label, percentage } }) => (
  <li className={styles.item} style={{ backgroundColor: randomColor() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{`${percentage}%`}</span>
  </li>
);

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number
  })
};
