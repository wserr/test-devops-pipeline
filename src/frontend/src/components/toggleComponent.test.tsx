import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { ToggleComponent } from './toggleComponent';

test('renders learn react link', () => {
  const {queryAllByTestId} = render(<ToggleComponent />);
  const toggleStateHeader = queryAllByTestId("toggleState")[0];
  expect(toggleStateHeader).toBeVisible();
  expect(toggleStateHeader).toHaveTextContent("Disabled");

  const toggleButton = queryAllByTestId("toggleButton")[0];
  act(() => toggleButton.click());
  expect(toggleStateHeader).toHaveTextContent("Enabled");

});
