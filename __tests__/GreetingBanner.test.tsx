/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import GreetingBanner from '../src/components/GreetingBanner';

test('renders the greeting text for the given name', async () => {
  let tree!: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<GreetingBanner name="Ada" />);
  });

  const textNode = tree.root.findByProps({ testID: 'greeting-banner-text' });
  const text = ([] as unknown[]).concat(textNode.props.children).join('');

  expect(text).toBe('Hello, Ada!');
});
