import * as chai from 'chai';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

process.env.NODE_ENV = 'test';

configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'https://www.test.com',
});

(global as any)['window'] = jsdom.window;
(global as any)['document'] = (global as any)['window'].document;
(global as any)['navigator'] = {
  userAgent: 'node.js',
};

const noop = () => null;

require.extensions['.css'] = noop;
require.extensions['.less'] = noop;
require.extensions['.scss'] = noop;

const { expect } = chai;

export { expect };
