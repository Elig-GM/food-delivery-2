// ACTION CONSTANTS
export const START_CHANNEL = "START_CHANNEL";
export const STOP_CHANNEL = "STOP_CHANNEL";
export const CHANNEL_ON = "CHANNEL_ON";
export const CHANNEL_OFF = "CHANNEL_OFF";
export const SERVER_ON = "SERVER_ON";
export const SERVER_OFF = "SERVER_OFF";

export const SUBSCRIBE_TIMER = "SUBSCRIBE_TIMER";
export const SUBSCRIBE_ORDER = "SUBSCRIBE_ORDER";

export const FETCH_GEODATA_START = "FETCH_GEODATA_START";
export const FETCH_GEODATA_FAILED = "FETCH_GEODATA_FAILED";
export const FETCH_GEODATA_SUCCESS = "FETCH_GEODATA_SUCCESS";
export const FETCH_GEOCODE_SUCCESS = "FETCH_GEOCODE_SUCCESS";
export const FETCH_GEOCODE_FAILED = "FETCH_GEOCODE_FAILED";
export const FETCH_DIRECTIONS_SUCCESS = "FETCH_DIRECTIONS_SUCCESS";
export const FETCH_DIRECTIONS_FAILED = "FETCH_DIRECTIONS_FAILED";

export const GET_ACTIVE_ORDERS = "GET_ACTIVE_ORDERS";

export const FILTER_ACTIVE_ORDERS_EVENT = "FILTER_ACTIVE_ORDERS_EVENT";
export const FILTER_ACTIVE_ORDERS_SEC = "FILTER_ACTIVE_ORDERS_SEC";
export const FILTER_INACTIVE_ORDERS_EVENT = "FILTER_INACTIVE_ORDERS_EVENT";
export const FILTER_INACTIVE_ORDERS_SEC = "FILTER_INACTIVE_ORDERS_SEC";
export const FILTER_ALL_ORDERS_EVENT = "FILTER_ALL_ORDERS_EVENT";
export const FILTER_ALL_ORDERS_SEC = "FILTER_ALL_ORDERS_SEC";

export const GET_ORDER_HISTORY = "GET_ORDER_HISTORY";
export const UPDATE_ORDER = "UPDATE_ORDER";

export const GET_ORDERS_GEOCODE = "GET_ORDERS_GEOCODE";

export const RESET_STORE = "RESET_STORE";

// ACTION CREATORS

// --- SOCKETS
export const startChannel = () => ({
  type: START_CHANNEL
});

export const stopChannel = () => ({
  type: STOP_CHANNEL
});

export const resetStore = () => ({
  type: RESET_STORE
});

// --- FILTERS
export const filterEventByOrderType = orderType => event => ({
  type: `FILTER_${orderType}_EVENT`,
  event
});

export const filterSecByOrderType = orderType => sec => ({
  type: `FILTER_${orderType}_SEC`,
  sec
});

// --- UPDATE ORDER
export const updateOrder = order => ({
  type: UPDATE_ORDER,
  order
});
