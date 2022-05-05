import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Text } from './index';

const text = 'test text';
const mockOnPress = jest.fn();

describe('Text', () => {
  it('should render text', () => {
    const { getByText } = render(<Text>{text}</Text>);

    expect(getByText(text)).toBeDefined();
  });

  it('should fire the onPress event', () => {
    const testID = 'textId';
    const { getByTestId } = render(
      <Text onPress={mockOnPress} testID={testID}>
        {text}
      </Text>
    );
    const textComponent = getByTestId(testID);
    fireEvent.press(textComponent);

    expect(mockOnPress).toBeCalled();
  });
});
