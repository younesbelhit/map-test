import React, { useEffect, useState } from "react";
import { View } from "./view";
import { useDispatch, useSelector } from "react-redux";
import { get, create, edit, remove } from "../../store/actions/routes";
import { create as createWaypoint } from "../../store/actions/waypoints";
import { useNavigate } from "react-router-dom";
import {DEFAULT_ROUTE_WAYPOINTS} from "../../shared/constants";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [canLoadList, loadList] = useState(true);

  const routesState = useSelector((s) => s.routes.get);
  const handleAddRoute = (routeName) =>
    dispatch(
      create({ name: routeName }, (r) => {
        dispatch(createWaypoint({ routeId: r.id, ...DEFAULT_ROUTE_WAYPOINTS }));
        loadList(true);
      })
    );

  const handleEditRoute = (updatedRoute) =>
    dispatch(edit({ ...updatedRoute }, () => loadList(true)));

  const handleRemoveRoute = (routeId) =>
    dispatch(remove(routeId, () => loadList(true)));

  const gotoDetails = (route) =>
    navigate("/routes/" + route.id, { state: { name: route.name } });

  useEffect(() => {
    if (canLoadList) dispatch(get());
    return () => loadList(false);
  }, [dispatch, canLoadList]);

  return (
    <View
      {...{
        routesState,
        handleAddRoute,
        handleEditRoute,
        handleRemoveRoute,
        gotoDetails,
      }}
    />
  );
};

export default Home;
