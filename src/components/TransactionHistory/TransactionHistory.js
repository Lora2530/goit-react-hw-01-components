import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => (
    <table className="section">
      <thead>
        <tr className={s.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
  
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.item} key={id}>
            <td className={s.type}>{type}</td>
            <td className={s.amount}> {amount}</td>
            <td className={s.currency}> {currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
export default TransactionHistory;
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

