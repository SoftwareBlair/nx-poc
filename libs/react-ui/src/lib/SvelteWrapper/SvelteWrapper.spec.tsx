import { render } from '@testing-library/react';

import SvelteWrapper from './SvelteWrapper';

describe('SvelteWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SvelteWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
