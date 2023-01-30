import { render } from '@testing-library/react';

import SingleProduct from './SingleProduct';

describe('SingleProduct', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SingleProduct />);
    expect(baseElement).toBeTruthy();
  });
});
