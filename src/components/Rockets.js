import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../components/Rockets';
import { fetchRockets } from '../redux/rocketSlice';

const mockStore = configureMockStore();
jest.mock('../redux/rocketSlice', () => ({
  fetchRockets: jest.fn(),
}));

describe('Rockets Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch fetchRockets if rockets is empty', () => {
    const store = mockStore({
      rockets: {
        rockets: [],
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    expect(fetchRockets).toHaveBeenCalled();
  });

  it('should not dispatch fetchRockets if rockets is not empty', () => {
    const store = mockStore({
      rockets: {
        rockets: [{ id: 1, rocketName: 'Falcon' }],
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    expect(fetchRockets).not.toHaveBeenCalled();
  });

  it('renders RocketCard for each rocket', () => {
    const store = mockStore({
      rockets: {
        rockets: [{ id: 1, rocketName: 'Falcon' }],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    expect(getByText('Falcon')).toBeInTheDocument(); // Assuming that the RocketCard displays the rocket name.
  });
});
