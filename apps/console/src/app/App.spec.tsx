import { describe, test } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  test('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Nx POC Console/gi)).toBeTruthy();
  });
});
