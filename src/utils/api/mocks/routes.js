import { generateUUID } from "../../helpers";

const mockApi = {
  get: () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: [
              {
                id: 1,
                name: "First route",
                waypoints: [
                  { id: 11, lat: 34.0522, lng: -118.2437 },
                  { id: 21, lat: 36.7783, lng: -119.4179 },
                ],
              },
              {
                id: 2,
                name: "Route 2",
                waypoints: [
                  { id: 12, lat: 40.7128, lng: -74.006 },
                  { id: 22, lat: 41.8781, lng: -87.6298 },
                ],
              },
              {
                id: 3,
                name: "Route 3",
                waypoints: [
                  { id: 13, lat: 40.7128, lng: -74.006 },
                  { id: 23, lat: 41.8781, lng: -87.6298 },
                ],
              },
            ],
          }),
        1000
      );
    }),
  getOne: () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              id: 1,
              name: "First route",
              waypoints: [
                { id: 1, lat: 34.0522, lng: -118.2437 },
                { id: 2, lat: 36.7783, lng: -119.4179 },
              ],
            },
          }),
        1000
      );
    }),
  create: (newRoute) =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: { id: generateUUID(), ...newRoute },
          }),
        1000
      );
    }),
  update: (updatedRoute) =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: { ...updatedRoute },
          }),
        1000
      );
    }),
  createWaypoint: ({ routeId, newWaypoint }) =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              id: routeId,
              name: "First route",
              waypoints: [
                { id: 1, lat: 34.0522, lng: -118.2437 },
                { id: 2, lat: 36.7783, lng: -119.4179 },
                { ...newWaypoint },
              ],
            },
          }),
        1000
      );
    }),
  deleteWaypoint: ({ idRoute, idWaypoint }) =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              id: idRoute,
              name: "First route",
              waypoints: [
                { id: 1, lat: 34.0522, lng: -118.2437 },
                { id: 2, lat: 36.7783, lng: -119.4179 },
              ],
            },
          }),
        1000
      );
    }),
};

export default mockApi;
