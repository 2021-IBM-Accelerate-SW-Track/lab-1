import { render, cleanup, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('test that App component renders', () => {
  render(<App />);
 });

test('test that new-item-button is a button', () => {
  render(<App/>);
  const element = screen.getByTestId('new-item-button');
  expect(element.innerHTML.toLowerCase().includes("button")).toBe(true)
});

test('test that new-item-input is an input ', () => {
  render(<App/>);
  const element = screen.getByTestId('new-item-input');
  expect(element.innerHTML.toLowerCase().includes("input")).toBe(true)
});