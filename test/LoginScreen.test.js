import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native'; // Mock the Alert component

import LoginScreen from '../src/screens/LoginScreen';

const mockNavigation = {
  navigate: jest.fn(),
};

jest.spyOn(Alert, 'alert');

// Test suite
describe('LoginScreen', () => {
  it('handles successful login', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <LoginScreen navigation={mockNavigation} />
    );

    const usernameInput = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');
    const loginButton = getByText('Login');

    fireEvent.changeText(usernameInput, 'username');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(loginButton);

    expect(Alert.alert).toHaveBeenCalledWith('Login successful.');
  });

  it('handles failed login', () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginScreen navigation={mockNavigation} />
    );
  
    const usernameInput = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');
    const loginButton = getByText('Login');
  
    fireEvent.changeText(usernameInput, 'invalidUsername');
    fireEvent.changeText(passwordInput, 'invalidPassword');
    fireEvent.press(loginButton);
  
    expect(Alert.alert).toHaveBeenCalledWith('Login failed.');
  });
  
});
