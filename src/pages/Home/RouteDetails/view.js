import React from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { WayPoint } from "../../../shared/components/Routes/Route/WayPoint";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const View = ({
  name,
  routeState,
  handleAddWaypoint,
  handleRemoveWaypoint,
  handleChangeWaypoint
}) => {
  const { loading, data } = routeState;
  const onAddWaypoint = () => {
    const lat = prompt("Enter Latitude:", 0);
    const lng = prompt("Enter Longitude:", 0);

    if (!lat || !lng || isNaN(lat) || isNaN(lng)) {
      alert("Please enter valid values for both Latitude and Longitude.");
      return;
    }

    const newWaypoint = {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };

    handleAddWaypoint(newWaypoint);
  };
  const onRemoveWaypoint = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Waypoint ?"
    );
    if (confirm) handleRemoveWaypoint(id);
  };

  if (loading) return <p>loading ...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <div className="heading">
        <Link className="back-btn" to="/">
          <FaArrowLeft color="white" />
        </Link>
        <h4>{name}</h4>
      </div>
      <table className="waypoints-table">
        <thead>
          <tr>
            <th>Steps</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((waypoint, index) => (
            <WayPoint
              key={waypoint.id}
              {...{ index, waypoint }}
              onRemove={() => onRemoveWaypoint(waypoint.id)}
              onChange={handleChangeWaypoint}
            />
          ))}
        </tbody>
      </table>
      <button className="add-route-btn" onClick={onAddWaypoint}>
        <FaPlus style={{ marginRight: "5px" }} />
        <span>Add new waypoint</span>
      </button>
    </div>
  );
};


View.propTypes = {
  name: PropTypes.string.isRequired,
  routeState: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        lat: PropTypes.number,
        lng: PropTypes.number,
      })
    ),
  }),
  handleAddWaypoint: PropTypes.func,
  handleRemoveWaypoint: PropTypes.func,
  handleChangeWaypoint : PropTypes.func
};