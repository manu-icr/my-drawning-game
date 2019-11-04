import React from 'react';
import TextBlock from './TextBlock.js';

import text from './config/text.json';

function Start(props) {
  return (
    <div>
      <TextBlock strings={[text.welcome]} />
    </div>
  );
}
export default Start;