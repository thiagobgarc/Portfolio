import { render, screen, fireEvent } from '@testing-library/react';
import { About } from './About';

test('renders the About component', () => {
  render(<About />);
  const aboutComponent = screen.getByTestId('about-component');
  expect(aboutComponent).toBeInTheDocument();
});

test('hides and shows hidden text when clicked', () => {
  render(<About />);
  const hiddenTextElement = screen.getByText(/a passion for creating elegant and effective solutions to complex problems/i);
  const hiddenText = hiddenTextElement.parentElement;
  expect(hiddenText).toHaveClass('noHiddenText');
  
  fireEvent.click(hiddenTextElement);
  expect(hiddenText).not.toHaveClass('noHiddenText');
  
  fireEvent.click(hiddenTextElement);
  expect(hiddenText).toHaveClass('noHiddenText');
});