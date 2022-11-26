import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

test('selection the checkbox should change value of checked to true', () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
