import styles from './Feedback.module.css';

import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics ';
import Notification from './Notification';

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
      ? Math.round((this.state.good * 1000) / this.countTotalFeedback()) / 10
      : 0;
  };

  render() {
    return (
      <div className={styles.feedBack}>
        <h2> Please leave feedback </h2>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.setValue}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification mesage="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
