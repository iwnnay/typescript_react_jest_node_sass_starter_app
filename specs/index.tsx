import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import App from '../src/components/app';

describe('main app', () => {
  it('should be able to render', () => {
    const app = TestRenderer.create(<App />).root;

    expect(app.findByType('main')).not.toBeNull();
  });
});
