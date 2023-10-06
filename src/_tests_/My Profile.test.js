import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../components/myProfile';

const mockStore = configureStore([]);

describe('MyProfile component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [],
      },
      rockets: {
        rockets: [],
      },
    });
  });

  test('renders MyProfile without reserved rockets or missions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(getByText('You have not joined any missions yet')).toBeInTheDocument();
    expect(getByText('You have not reserved any Rockets yet')).toBeInTheDocument();
  });

  test('renders MyProfile with reserved rockets and missions', () => {
    store = mockStore({
      missions: {
        missions: [{ id: 1, name: 'Test Mission', reserved: true }],
      },
      rockets: {
        rockets: [{ id: 1, rocketName: 'Test Rocket', reserved: true }],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(getByText('Test Mission')).toBeInTheDocument();
    expect(getByText('Test Rocket')).toBeInTheDocument();
  });
});
