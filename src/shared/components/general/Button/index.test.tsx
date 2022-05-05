import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Button } from './index';

const label = 'test label';
const mockOnPress = jest.fn();

describe('Button', () => {
  it('should render label', () => {
    const { getByText } = render(<Button label={label} />);

    expect(getByText(label)).toBeDefined();
  });

  it('should fire the onPress event', () => {
    const testID = 'buttonId';
    const { getByTestId } = render(
      <Button onPress={mockOnPress} label={label} testID={testID} />
    );
    const button = getByTestId(testID);
    fireEvent.press(button);

    expect(mockOnPress).toBeCalled();
  });
});
