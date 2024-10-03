import { FaTrash } from "react-icons/fa";
import { debounce } from 'lodash';
import { useState } from 'react';

export const WayPoint = ({
  index,
  waypoint,
  onChange,
  onRemove
}) => {
  const [lat, setLat] = useState(waypoint.lat);
  const [lng, setLng] = useState(waypoint.lng);

  const debouncedChangeHandler = debounce((updatedLatLng) => {
    onChange(updatedLatLng);
  }, 1000); 

  const handleLatChange = (e) => {
    const newLat = e.target.value;
    setLat(newLat);
    debouncedChangeHandler({ ...waypoint, lat: newLat });
  };

  const handleLngChange = (e) => {
    const newLng = e.target.value;
    setLng(newLng);
    debouncedChangeHandler({ ...waypoint, lng: newLng });
  };

  return (
    <tr key={waypoint.id}>
      <td>Way{index + 1}</td>
      <td>
        <input
          type="text"
          className="input"
          value={lat}
          onChange={handleLatChange}
        />
      </td>
      <td>
        <input
          type="text"
          className="input"
          value={lng}
          onChange={handleLngChange}
        />
      </td>
      <td>
        <button onClick={() => onRemove(waypoint.routeId, waypoint.id)}>
          <FaTrash color="black" />
        </button>
      </td>
    </tr>
  );
};
