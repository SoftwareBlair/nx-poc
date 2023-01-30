import { render } from '@testing-library/react';

import AllProducts from './AllProducts';

describe('AllProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllProducts />);
    expect(baseElement).toBeTruthy();
  });
});
