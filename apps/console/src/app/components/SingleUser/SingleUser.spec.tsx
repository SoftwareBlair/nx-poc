import { render } from '@testing-library/react';

import SingleUser from './SingleUser';

describe('SingleUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SingleUser />);
    expect(baseElement).toBeTruthy();
  });
});
