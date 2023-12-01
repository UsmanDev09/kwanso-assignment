import { useLocation } from "react-router-dom";
import ReactCountryFlag from 'react-country-flag';

import Map from "./Map";


const UserProfile = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <div className="bg-white shadow-md rounded p-6 max-w-xs mx-auto text-center dark:bg-gray-700 dark:text-white pt-10">
        <img className="w-20 h-20 rounded-full mx-auto mb-4" src={user.picture.medium} alt="Profile" />
        <div className="text-xl font-semibold mb-2">{user.name.first + user.name.last}</div>
        <div className="text-gray-600 text-sm dark:text-white">
          <div>Email: {user.email}</div>
        </div>
        <ReactCountryFlag
          countryCode={user.nat}
          svg
          style={{
            width: '2em',
            height: '2em',
            marginRight: '8px',
          }}
        />
      </div>
      <Map latitude={user.location.coordinates.latitude} longitude={user.location.coordinates.longitude} />
    </>
  );
};

export default UserProfile;
