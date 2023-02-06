import { render } from '@testing-library/react';

import ReactUi from './ReactUi';

describe('ReactUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUi />);
    expect(baseElement).toBeTruthy();
  });
});
