import { fireEvent, render, screen } from '@testing-library/react';
import Contact from './Contact';

beforeEach(() => { window.open = jest.fn(); });
const fillForm = () => {
  render(<Contact register={() => {}} />);
  for (const [label, value] of [['First Name', 'Asha'], ['Last Name', 'Kumar'], ['Email Address', 'asha@example.com'], ['Phone Number', '+91 9876543210'], ['Message', 'Please share bread availability.']]) {
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
  }
};
test('prepares the enquiry for WhatsApp and preserves entered details', () => {
  fillForm();
  fireEvent.click(screen.getByRole('button', { name: 'Continue to WhatsApp' }));
  expect(window.open).toHaveBeenCalledTimes(1);
  const url = new URL(window.open.mock.calls[0][0]);
  expect(url.pathname).toBe('/919443311007');
  expect(url.searchParams.get('text')).toContain('Name: Asha Kumar');
  expect(url.searchParams.get('text')).toContain('Phone: +91 9876543210');
  expect(url.searchParams.get('text')).toContain('Email: asha@example.com');
  expect(screen.getByLabelText('Message')).toHaveValue('Please share bread availability.');
});
test('invalid phone numbers do not open WhatsApp', () => {
  fillForm();
  fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: 'abc' } });
  fireEvent.click(screen.getByRole('button', { name: 'Continue to WhatsApp' }));
  expect(window.open).not.toHaveBeenCalled();
  expect(screen.getByRole('alert')).toHaveTextContent('valid phone number');
});
