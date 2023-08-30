import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

jest.mock('@react-navigation/native', () => {
  const actualNavigation = jest.requireActual('@react-navigation/native');
  return {
    ...actualNavigation,
    useNavigation: jest.fn(),
    useRoute: jest.fn(),
    useNavigationContainer: jest.fn().mockReturnValue({
      navigate: jest.fn(),
    }),
    createNativeStackNavigator: jest.fn(),
  };
});

const mockLoginScreen = jest.fn();
const mockHomeScreen = jest.fn();
const mockDetailsScreen = jest.fn();

jest.mock('@react-navigation/native-stack', () => {
  const mockStack = {
    Navigator: ({ children }) => <>{children}</>,
    Screen: jest.fn(),
  };
  return {
    __esModule: true,
    ...mockStack,
    createNativeStackNavigator: jest.fn().mockReturnValue(mockStack),
  };
});

describe('App', () => {
  it('renders LoginScreen initially', async () => {
    const { getByText } = render(<App />);
  });

});
