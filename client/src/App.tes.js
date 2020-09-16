/* import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Home from './components/Home'
import CV from './components/CV'
import { MemoryRouter
} from 'react-router'
import { Route } from 'react-router-dom';

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      
  })
  it('should show Home component for / router (getting array of routes)', () => {
    expect(pathMap['/']).toBe(Home);
  })
  it('should show Cv component for /CV router', () => {
    expect(pathMap['/CV']).toBe(CV);
  })
  
}) */