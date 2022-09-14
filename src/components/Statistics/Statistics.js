import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statistics__list}>
      <li className={s.statistics__item}>Good: {good}</li>
      <li className={s.statistics__item}>Neutral: {neutral}</li>
      <li className={s.statistics__item}>Bad: {bad}</li>
      <li className={s.statistics__item}>Total: {total}</li>
      <li className={s.statistics__item}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
