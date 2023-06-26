import React from 'react';
import TestRenderer from 'react-test-renderer';
import StyledButton from '../components/atoms/StyledButton';
import AddBookButton from '../components/atoms/AddBookButton';
import MySearchBar from '../components/atoms/MySearchbar';

test('Account component renders correctly', () => {
  const component = TestRenderer.create(<StyledButton onPress={() => {}} />);
  expect(component.toJSON()).toMatchSnapshot();
});


describe('AddBookButton component', () => {
  it('renders the button correctly', () => {
    const component = TestRenderer.create(<AddBookButton onPress={() => {}} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});



describe('MySearchBar component', () => {
  it('renders the component correctly', () => {
    const component = TestRenderer.create(<MySearchBar placeholder='as'  />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
