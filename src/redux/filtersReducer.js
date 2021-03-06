import { combineReducers } from "redux";
import * as CONSTANTS from "../constants";
import * as ACTIONS from "./actions";

export const filterEventByOrderType = orderType => {
  return (event = null, action) => {
    switch (action.type) {
      case `FILTER_${orderType}_EVENT`:
        return action.event;
      case ACTIONS.RESET_STORE: {
        return null;
      }
      default:
        return event;
    }
  };
};

export const filterSecByOrderType = orderType => {
  return (sec = null, action) => {
    switch (action.type) {
      case `FILTER_${orderType}_SEC`:
        return action.sec;
      case ACTIONS.RESET_STORE: {
        return null;
      }
      default:
        return sec;
    }
  };
};

export const filterAll = combineReducers({
  event: filterEventByOrderType(CONSTANTS.ALL_ORDERS),
  sec: filterSecByOrderType(CONSTANTS.ALL_ORDERS)
});

export const filterActive = combineReducers({
  event: filterEventByOrderType(CONSTANTS.ACTIVE_ORDERS),
  sec: filterSecByOrderType(CONSTANTS.ACTIVE_ORDERS)
});

export const filterInactive = combineReducers({
  event: filterEventByOrderType(CONSTANTS.INACTIVE_ORDERS),
  sec: filterSecByOrderType(CONSTANTS.INACTIVE_ORDERS)
});
