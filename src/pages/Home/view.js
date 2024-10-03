import React from "react";
import { FaPlus } from "react-icons/fa";
import { RouteItem } from "../../shared/components/Routes/Route";
import PropTypes from "prop-types";

export const View = ({
  routesState,
  handleAddRoute,
  handleEditRoute,
  handleRemoveRoute,
  gotoDetails,
}) => {
  const { loading, data } = routesState;

  const onAddRoute = () => {
    let routeName = "";
    let validInput = false;

    while (!validInput) {
      routeName = prompt("Please enter the route name:");

      if (routeName === null) {
        return;
      }

      if (routeName.trim() !== "") {
        validInput = true;
      } else {
        alert("Route name cannot be empty. Please enter a valid name.");
      }
    }
    handleAddRoute(routeName);
  };

  const onEditRoute = (route) => {
    let routeName = route.name;
    let validInput = false;

    while (!validInput) {
      routeName = prompt("Please enter the route name:", routeName);

      if (routeName === null) {
        return;
      }

      if (routeName.trim() !== "") {
        validInput = true;
      } else {
        alert("Route name cannot be empty. Please enter a valid name.");
      }
    }
    handleEditRoute({ ...route, name: routeName });
  };

  const onRemoveRoute = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this route ?"
    );
    if (confirm) handleRemoveRoute(id);
  };

  if (loading) return <p>Loading ...</p>;

  return (
    <>
      <h3>Routes</h3>
      <ul>
        {data.map((route) => (
          <RouteItem
            key={route.id}
            {...{ route }}
            onEdit={onEditRoute}
            onRemove={() => onRemoveRoute(route.id)}
            gotoDetails={gotoDetails}
          />
        ))}
      </ul>
      <button className="add-route-btn" onClick={onAddRoute}>
        <FaPlus style={{ marginRight: "5px" }} />
        <span>Add new route</span>
      </button>
    </>
  );
};

View.propTypes = {
  routesState: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }),
  handleAddRoute: PropTypes.func,
  handleEditRoute: PropTypes.func,
  handleRemoveRoute: PropTypes.func,
  gotoDetails: PropTypes.func,
};