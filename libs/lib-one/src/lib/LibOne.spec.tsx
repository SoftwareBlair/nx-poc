import { render } from '@testing-library/react';

import LibOne from './LibOne';

describe('LibOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibOne />);
    expect(baseElement).toBeTruthy();
  });
});
