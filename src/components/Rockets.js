import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import { fetchRockets } from '../redux/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <div className="data-container">
      <ul className="map">
        {rockets.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
}
export default Rockets;
