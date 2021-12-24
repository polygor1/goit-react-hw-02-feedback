import styles from './Feedback.module.css';

import { Component } from 'react';
// import PropTypes from 'prop-types';
import Statistics from './Statistics ';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setValue = key => {
    this.setState(state => ({
      [key]: state[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? Math.ceil((this.state.good * 1000) / this.countTotalFeedback()) / 10
      : 0;
  };

  render() {
    return (
      <div className={styles.feedBack}>
        <h2> Please leave feedback </h2>

        <button onClick={() => this.setValue('good')}>Good</button>
        <button onClick={() => this.setValue('neutral')}>Neutral</button>
        <button onClick={() => this.setValue('bad')}>Bad</button>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
