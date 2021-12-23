import styles from './Feedback.module.css';

// import PropTypes from 'prop-types';

export default function Feedback() {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <div className={styles.feedBack}>
      <h1> Please leave feedback </h1>
    </div>
  );
}
