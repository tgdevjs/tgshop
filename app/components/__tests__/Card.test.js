import React from 'react';
import renderer from 'react-test-renderer';

import { ProductDetailCard, styles } from '../Card';

it('renders successfully', () => {
    const rendered = renderer.create(<ProductDetailCard />).toJSON();
    expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
    expect(typeof styles).toBe('object');
});