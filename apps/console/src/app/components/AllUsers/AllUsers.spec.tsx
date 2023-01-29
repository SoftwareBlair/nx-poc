import { render } from '@testing-library/react';

import AllUsers from './AllUsers';

describe('AllUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllUsers />);
    expect(baseElement).toBeTruthy();
  });
});
