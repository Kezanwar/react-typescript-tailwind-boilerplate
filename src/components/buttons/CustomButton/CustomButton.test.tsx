import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomButton from './CustomButton';

describe('<CustomButton />', () => {
  test('it should mount', () => {
    render(<CustomButton />);
    
    const customButton = screen.getByTestId('CustomButton');

    expect(customButton).toBeInTheDocument();
  });
});