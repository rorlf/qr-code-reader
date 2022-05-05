import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Body } from './index';

const text = 'test text';
const mockOnPress = jest.fn();

describe('Body', () => {
  it('should render text', () => {
    const { getByText } = render(<Body>{text}</Body>);

    expect(getByText(text)).toBeDefined();
  });

  it('should fire the onPress event', () => {
    const testID = 'textId';
    const { getByTestId } = render(
      <Body onPress={mockOnPress} testID={testID}>
        {text}
      </Body>
    );
    const textComponent = getByTestId(testID);
    fireEvent.press(textComponent);

    expect(mockOnPress).toBeCalled();
  });
});
