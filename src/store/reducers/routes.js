import { combineReducers } from "redux";
import { routesActionTypes } from "../constants/action-types/routes";
import { SHOW_ON_MAP } from "../actions/routes";

const initialState = {
  get: {
    loading: false,
    errors: false,
    data: [],
  },
  getOne: {
    loading: false,
    errors: false,
    data: [],
  },
  create: {
    loading: false,
    errors: false,
    data: {},
  },
  update: {
    loading: false,
    errors: false,
    data: {},
  },
  showOnMap: {
    data: [],
  },
};

const showOnMap = (state = initialState.showOnMap, action) => {
  switch (action.type) {
    case SHOW_ON_MAP: {
      const currentListOfPoints = action.payload.map((p) => [p.lat, p.lng]);
      const query = {
        data: currentListOfPoints,
      };
      return { ...state, ...query };
    }
    default:
      return state;
  }
};
const get = (state = initialState.get, action) => {
  switch (action.type) {
    case routesActionTypes.GET.START: {
      const query = {
        loading: true,
        errors: false,
        data: [],
      };
      return { ...state, ...query };
    }

    case routesActionTypes.GET.FAIL: {
      const query = {
        loading: false,
        errors: true,
        data: [],
      };
      return { ...state, ...query };
    }

    case routesActionTypes.GET.SUCCESS: {
      const { payload } = action;
      const query = {
        loading: false,
        errors: false,
        data: [...payload],
      };
      return { ...state, ...query };
    }
    default:
      return state;
  }
};

const getOne = (state = initialState.getOne, action) => {
  switch (action.type) {
    case routesActionTypes.GET_ONE.START: {
      const query = {
        loading: true,
        errors: false,
        data: [],
      };
      return { ...state, ...query };
    }

    case routesActionTypes.GET_ONE.FAIL: {
      const query = {
        loading: false,
        errors: true,
        data: [],
      };
      return { ...state, ...query };
    }

    case routesActionTypes.GET_ONE.SUCCESS: {
      const { payload } = action;
      const query = {
        loading: false,
        errors: false,
        data: [...payload],
      };
      return { ...state, ...query };
    }
    default:
      return state;
  }
};

const create = (state = initialState.create, action) => {
  switch (action.type) {
    case routesActionTypes.CREATE.START: {
      const query = {
        loading: true,
        errors: false,
        data: {},
      };
      return { ...state, ...query };
    }

    case routesActionTypes.CREATE.FAIL: {
      const query = {
        loading: false,
        errors: true,
        data: {},
      };
      return { ...state, ...query };
    }

    case routesActionTypes.CREATE.SUCCESS: {
      const { payload } = action;
      const query = {
        loading: false,
        errors: false,
        data: { ...payload },
      };
      return { ...state, ...query };
    }
    default:
      return state;
  }
};
const update = (state = initialState.update, action) => {
  switch (action.type) {
    case routesActionTypes.UPDATE.START: {
      const query = {
        loading: true,
        errors: false,
        data: {},
      };
      return { ...state, ...query };
    }

    case routesActionTypes.UPDATE.FAIL: {
      const query = {
        loading: false,
        errors: true,
        data: {},
      };
      return { ...state, ...query };
    }

    case routesActionTypes.UPDATE.SUCCESS: {
      const { payload } = action;
      const query = {
        loading: false,
        errors: false,
        data: { ...payload },
      };
      return { ...state, ...query };
    }
    default:
      return state;
  }
};

export default combineReducers({
  get,
  getOne,
  create,
  update,
  showOnMap
});
