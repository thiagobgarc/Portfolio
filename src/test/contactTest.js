import { render, fireEvent } from '@testing-library/react';
import { Contact } from './Contact';

test('renders Contact component', () => {
  render(<Contact />);
});

test('updates name state on input change', () => {
  const { getByPlaceholderText } = render(<Contact />);
  const nameInput = getByPlaceholderText("What's your name?");
  fireEvent.change(nameInput, { target: { value: 'John' } });
  expect(nameInput.value).toBe('John');
});

test('updates phone state on input change', () => {
  const { getByPlaceholderText } = render(<Contact />);
  const phoneInput = getByPlaceholderText('Phone #');
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  expect(phoneInput.value).toBe('1234567890');
});

test('updates email state on input change', () => {
  const { getByPlaceholderText } = render(<Contact />);
  const emailInput = getByPlaceholderText('Your Email');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  expect(emailInput.value).toBe('test@example.com');
});

test('clears name, phone, and email inputs after submit', async () => {
  const { getByPlaceholderText, getByText } = render(<Contact />);
  const nameInput = getByPlaceholderText("What's your name?");
  const phoneInput = getByPlaceholderText('Phone #');
  const emailInput = getByPlaceholderText('Your Email');
  const submitButton = getByText('Submit');

  fireEvent.change(nameInput, { target: { value: 'John' } });
  fireEvent.change(phoneInput, { target: { value: '1234567890' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  fireEvent.click(submitButton);

  expect(nameInput.value).toBe('');
  expect(phoneInput.value).toBe('');
  expect(emailInput.value).toBe('');
});