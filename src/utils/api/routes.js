import { fetcher } from "./fetcher";
const apiCalls = {
  get: () => fetcher.get("/routes"),
  getOne: (id) => fetcher.get("/waypoints?routeId=" + id),
  create: (data) => fetcher.post("/routes", data),
  createWaypoint: (data) => fetcher.post("/waypoints/", data),
  deleteWaypoint: ({ waypointId }) =>
    fetcher.delete("/waypoints/" + waypointId),
  updateWaypoint: (data) => fetcher.put("/waypoints/" + data.id, data),
  update: (data) => fetcher.put("/routes/" + data.id, data),
  delete: (id) => fetcher.delete("/routes/" + id),
};
export default apiCalls;
