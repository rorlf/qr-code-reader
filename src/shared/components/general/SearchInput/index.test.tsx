import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import { SearchInput } from './index';

const placeholder = 'test placeholder';
const debounceTime = 500;
const mockOnSearch = jest.fn();

describe('SearchInput', () => {
  it('should render placeholder', () => {
    const { getByPlaceholderText } = render(
      <SearchInput placeholder={placeholder} onSearch={mockOnSearch} />
    );

    expect(getByPlaceholderText(placeholder)).toBeDefined();
  });

  it('should render default placeholder when placeholder is not provided', () => {
    const { getByPlaceholderText } = render(
      <SearchInput onSearch={mockOnSearch} />
    );

    expect(getByPlaceholderText('Search')).toBeDefined();
  });

  it('should fire the onSearch after debounce time', () => {
    jest.useFakeTimers();
    const testID = 'searchId';
    const searchTerm = 'searchTerm';
    const { getByTestId } = render(
      <SearchInput
        testID={testID}
        debounceTime={debounceTime}
        onSearch={mockOnSearch}
      />
    );
    const input = getByTestId(testID);
    fireEvent.changeText(input, searchTerm);
    act(() => jest.advanceTimersByTime(debounceTime));

    expect(mockOnSearch).toBeCalledWith(searchTerm);
    jest.useRealTimers();
  });
});
