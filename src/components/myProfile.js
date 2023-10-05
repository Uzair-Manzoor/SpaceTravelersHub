import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleMission } from '../redux/missionSlice';
import '../styles/myProfile.css';

const MyProfile = () => {
  const { missions } = useSelector(((state) => state.missions));
  const reserved = missions.filter((mission) => mission.reserved === true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleMission());
  }, [dispatch]);
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  let rocketList;
  let missionList;
  if (reserved.length > 0) {
    missionList = (
      <ul className="missions-list">
        {reserved.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    );
  } else {
    missionList = (
      <p className="empty-profile-msg">You have not joined any missions yet</p>
    );
  }
  if (reservedRockets.length > 0) {
    rocketList = (
      <ul className="rockets-list">
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.rocketName}</li>
        ))}
      </ul>
    );
  } else {
    rocketList = <p className="empty-profile-msg">You have not reserved any Rockets yet</p>;
  }
  return (
    <div className="my-profile">
      <div className="my-missions">
        <p className="missions-headline">My Missions</p>
        {missionList}
      </div>
      <div className="my-rockets">
        <p className="rockets-headline">My Rockets</p>
        {rocketList}
      </div>
    </div>
  );
};
export default MyProfile;
