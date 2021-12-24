import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <section className={styles.buttonsList}>
      {options.map(item => (
        <button
          key={item}
          className={styles.buttonItem}
          onClick={() => onLeaveFeedback(item)}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </section>
  );
}
