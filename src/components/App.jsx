import React from 'react';
import Feedback from './Feedback/Feedback';
import SectionComponent from './Section/Section';
import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const hendleClickRew = value => {
    setFeedback({ ...feedback, [value]: feedback[value] + 1 });
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();

    if (totalFeedback === 0) {
      return 0;
    }
    
    return Math.round((feedback.good / totalFeedback) * 100);
  };

  return (
    <SectionComponent>
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        hendleClickRew={hendleClickRew}
        total={countTotalFeedback()}
        procentities={countPositiveFeedbackPercentage()}
      />
    </SectionComponent>
  );
};

export default App;
