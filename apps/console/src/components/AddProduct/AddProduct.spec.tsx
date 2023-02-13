import { render } from '@testing-library/react';

import AddProduct from './AddProduct';

describe('AddProduct', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddProduct />);
    expect(baseElement).toBeTruthy();
  });
});
