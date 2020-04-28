import React from "react";
import PropTypes from "prop-types";
import { TransactionHistoryItem } from "./TransactionHistoryItem";
import styles from "./transactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map((item, idx) => {
          console.log(idx);
          return <TransactionHistoryItem key={item.id} item={item} idx={idx} />;
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};
