import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders the list of posts', async () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'Body of post 1' },
      { id: 2, title: 'Post 2', body: 'Body of post 2' },
      // Add more mock posts if needed
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPosts),
      })
    );

    const { getByText } = render(<HomeScreen navigation={{ navigate: jest.fn() }} />);

    await waitFor(() => {
      mockPosts.forEach(post => {
        expect(getByText(post.title)).toBeTruthy();
        expect(getByText(post.body)).toBeTruthy();
      });
    });
  });

  it('renders error message on fetch failure', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Fetch error'))
    );

    const { getByText } = render(<HomeScreen navigation={{ navigate: jest.fn() }} />);

    await waitFor(() => {
      expect(getByText('Fetch error')).toBeTruthy();
    });
  });

  it('navigates to DetailScreen on post press', async () => {
    const mockNavigate = jest.fn();
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'Body of post 1' },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPosts),
      })
    );

    const { getByText } = render(<HomeScreen navigation={{ navigate: mockNavigate }} />);

    await waitFor(() => {
      fireEvent.press(getByText('Post 1'));
      expect(mockNavigate).toHaveBeenCalledWith('Detail', { post: mockPosts[0] });
    });
  });

});
