import { render } from '@testing-library/react';

import AddUser from './AddUser';

describe('AddUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddUser />);
    expect(baseElement).toBeTruthy();
  });
});
