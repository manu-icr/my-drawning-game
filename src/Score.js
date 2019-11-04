import React from 'react';
import TextBlock from './TextBlock.js';

import text from './config/text.json';

function Score(props) {
  return (
    <div>
      <TextBlock strings={[text.score]} />
    </div>

  );
}
export default Score;