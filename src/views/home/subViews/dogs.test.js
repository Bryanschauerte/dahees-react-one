import React from 'react';
import ReactDOM from 'react-dom';
import Dog from './dog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dog />, div);
});
