/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import AppVersionLabel from '../src/components/AppVersionLabel';

type JsonNode = {
  props: { testID?: string };
  children: Array<JsonNode | string> | null;
};

function findByTestID(
  node: JsonNode | string | null,
  testID: string,
): JsonNode | null {
  if (!node || typeof node === 'string') {
    return null;
  }
  if (node.props?.testID === testID) {
    return node;
  }
  for (const child of node.children ?? []) {
    const found = findByTestID(child, testID);
    if (found) {
      return found;
    }
  }
  return null;
}

test('renders the version with a v prefix and the correct testID', async () => {
  let tree: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<AppVersionLabel version="1.2.3" />);
  });

  const json = tree!.toJSON() as unknown as JsonNode;
  const label = findByTestID(json, 'app-version-label');

  expect(label).not.toBeNull();
  expect((label!.children ?? []).join('')).toBe('v1.2.3');
});
