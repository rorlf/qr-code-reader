import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { TextInput } from './index';

const placeholder = 'test placeholder';
const mockOnChangeText = jest.fn();

describe('TextInput', () => {
  it('should render placeholder', () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder={placeholder} />
    );

    expect(getByPlaceholderText(placeholder)).toBeDefined();
  });

  it('should fire onChangeText event', () => {
    const testID = 'textInputId';
    const searchTerm = 'searchTerm';
    const { getByTestId } = render(
      <TextInput testID={testID} onChangeText={mockOnChangeText} />
    );
    const input = getByTestId(testID);
    fireEvent.changeText(input, searchTerm);

    expect(mockOnChangeText).toBeCalledWith(searchTerm);
  });
});
