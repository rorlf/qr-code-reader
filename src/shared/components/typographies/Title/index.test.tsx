import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Title } from './index';

const text = 'test text';
const mockOnPress = jest.fn();

describe('Title', () => {
  it('should render text', () => {
    const { getByText } = render(<Title>{text}</Title>);

    expect(getByText(text)).toBeDefined();
  });

  it('should fire the onPress event', () => {
    const testID = 'textId';
    const { getByTestId } = render(
      <Title onPress={mockOnPress} testID={testID}>
        {text}
      </Title>
    );
    const textComponent = getByTestId(testID);
    fireEvent.press(textComponent);

    expect(mockOnPress).toBeCalled();
  });
});
