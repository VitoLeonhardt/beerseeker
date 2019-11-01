import React from 'react';
import App from './App';
import { render, wait, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('basic test', async () => {
  const { getByText } = render(<App />);

  // it's Buzz because usually Buzz is the first beer that is returned.
  await wait(() => getByText("Buzz"));
  expect(getByText("Buzz")).toBeTruthy();
});

it('testing of the popup window', async () => {
  const { getByText } = render(<App />);


  await wait(() => getByText("Buzz"));
  getByText("Buzz").click();

  // clicking and checking if the description is on the screen.
  expect(getByText("A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.")).toBeTruthy();
});

it('testing pagination', async () => {
  const { getByText } = render(<App />);

  // it's Buzz because usually Buzz is the first beer that is returned.
  await wait(() => getByText("Buzz"));
  getByText("2").click();
  
  await wait(() => getByText("Misspent Youth"));
  expect(getByText("Misspent Youth")).toBeTruthy();
});