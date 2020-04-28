import React from "react";
import PropTypes from "prop-types";
import { StatisticsItem } from "./StatisticsItem";
import styles from "./statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={styles.statisticsContainer}>
        <div className={styles.statsBlock}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <ul className={styles.statList}>
            {stats.map(stat => {
              return <StatisticsItem key={stat.id} stat={stat} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object)
};
