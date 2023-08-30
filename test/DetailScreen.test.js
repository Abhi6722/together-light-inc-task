import React from 'react';
import { render } from '@testing-library/react-native';

import DetailScreen from '../src/screens/DetailScreen';

const mockRoute = {
  params: {
    post: {
      title: 'Sample Post Title',
      body: 'This is the body of the sample post.',
    },
  },
};

describe('DetailScreen', () => {
  it('renders post title and body', () => {
    const { getByText } = render(<DetailScreen route={mockRoute} />);

    expect(getByText('Sample Post Title')).toBeTruthy();
    expect(getByText('This is the body of the sample post.')).toBeTruthy();
  });
});
