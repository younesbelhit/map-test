import { FaPen, FaTrash } from "react-icons/fa";

export const RouteItem = ({ route, onEdit, onRemove, gotoDetails }) => {
  return (
    <li key={route.id} className="route-item">
      <p onClick={() => gotoDetails(route)}>
        <span className="route-item-name">{route.name}</span>
      </p>
      <div>
        <button onClick={() => onEdit(route)}>
          <FaPen color="black" />
        </button>
        <button onClick={() => onRemove(route.id)}>
          <FaTrash color="black" />
        </button>
      </div>
    </li>
  );
};
