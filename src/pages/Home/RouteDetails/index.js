import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getOne } from "../../../store/actions/routes";
import { View } from "./view";
import { create, remove, update } from "../../../store/actions/waypoints";

export const RouteDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { name } = location.state || {};
  const [canload, setLoad] = useState(true);

  const routeState = useSelector((s) => s.routes.getOne);

  const handleAddWaypoint = (newWaypoint) =>
    dispatch(create({ routeId: id, ...newWaypoint }, () => setLoad(true)));

  const handleRemoveWaypoint = (waypointId) =>
    dispatch(remove({ waypointId }, () => setLoad(true)));

  const handleChangeWaypoint = (updatedWayPoint) =>
    dispatch(update(updatedWayPoint, setLoad(true)));

  useEffect(() => {
    if (canload) dispatch(getOne(id));
    return () => setLoad(false);
  }, [dispatch, canload, id]);

  return (
    <View {...{ routeState, handleAddWaypoint, handleRemoveWaypoint,handleChangeWaypoint, name }} />
  );
};
