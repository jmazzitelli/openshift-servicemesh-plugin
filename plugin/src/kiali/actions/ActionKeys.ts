export enum ActionKeys {
  INCREMENT_LOADING_COUNTER = 'INCREMENT_LOADING_COUNTER',
  DECREMENT_LOADING_COUNTER = 'DECREMENT_LOADING_COUNTER',
  SET_PAGE_VISIBILITY_HIDDEN = 'SET_PAGE_VISIBILITY_HIDDEN',
  SET_PAGE_VISIBILITY_VISIBLE = 'SET_PAGE_VISIBILITY_VISIBLE',

  GRAPH_ON_NAMESPACE_CHANGE = 'GRAPH_ON_NAMESPACE_CHANGE',
  GRAPH_SET_DEFINITION = 'GRAPH_SET_DEFINITION',
  GRAPH_SET_EDGE_MODE = 'GRAPH_SET_EDGE_MODE',
  GRAPH_SET_LAYOUT = 'GRAPH_SET_LAYOUT',
  GRAPH_SET_NAMESPACE_LAYOUT = 'GRAPH_SET_NAMESPACE_LAYOUT',
  GRAPH_SET_NODE = 'GRAPH_SET_NODE',
  GRAPH_SET_RANK_RESULT = 'GRAPH_SET_RANK_RESULT',
  GRAPH_SET_UPDATE_TIME = 'GRAPH_SET_UPDATE_TIME',

  GRAPH_TOOLBAR_RESET_SETTINGS = 'GRAPH_TOOLBAR_RESET_SETTINGS',
  GRAPH_TOOLBAR_SET_EDGE_LABELS = 'GRAPH_TOOLBAR_SET_EDGE_LABEL_MODE',
  GRAPH_TOOLBAR_SET_FIND_VALUE = 'GRAPH_TOOLBAR_SET_FIND_VALUE',
  GRAPH_TOOLBAR_SET_GRAPH_TYPE = 'GRAPH_TOOLBAR_SET_GRAPH_TYPE',
  GRAPH_TOOLBAR_SET_HIDE_VALUE = 'GRAPH_TOOLBAR_SET_HIDE_VALUE',
  GRAPH_TOOLBAR_SET_IDLE_NODES = 'GRAPH_TOOLBAR_SET_IDLE_NODES',
  GRAPH_TOOLBAR_SET_RANK_BY = 'GRAPH_TOOLBAR_SET_RANK_BY',
  GRAPH_TOOLBAR_SET_TRAFFIC_RATES = 'GRAPH_TOOLBAR_SET_TRAFFIC_RATES',

  // Toggle Actions
  GRAPH_TOOLBAR_TOGGLE_BOX_BY_CLUSTER = 'GRAPH_TOOLBAR_TOGGLE_BOX_BY_CLUSTER',
  GRAPH_TOOLBAR_TOGGLE_BOX_BY_NAMESPACE = 'GRAPH_TOOLBAR_TOGGLE_BOX_BY_NAMESPACE',
  GRAPH_TOOLBAR_TOGGLE_GRAPH_VIRTUAL_SERVICES = 'GRAPH_TOOLBAR_TOGGLE_GRAPH_VIRTUAL_SERVICES',
  GRAPH_TOOLBAR_TOGGLE_GRAPH_MISSING_SIDECARS = 'GRAPH_TOOLBAR_TOGGLE_GRAPH_MISSING_SIDECARS',
  GRAPH_TOOLBAR_TOGGLE_GRAPH_SECURITY = 'GRAPH_TOOLBAR_TOGGLE_GRAPH_SECURITY',
  GRAPH_TOOLBAR_TOGGLE_LEGEND = 'GRAPH_TOOLBAR_TOGGLE_LEGEND',
  GRAPH_TOOLBAR_TOGGLE_FIND_HELP = 'GRAPH_TOOLBAR_TOGGLE_FIND_HELP',
  GRAPH_TOOLBAR_TOGGLE_IDLE_EDGES = 'GRAPH_TOOLBAR_TOGGLE_IDLE_EDGES',
  GRAPH_TOOLBAR_TOGGLE_IDLE_NODES = 'GRAPH_TOOLBAR_TOGGLE_IDLE_NODES',
  GRAPH_TOOLBAR_TOGGLE_OPERATION_NODES = 'GRAPH_TOOLBAR_TOGGLE_OPERATION_NODES',
  GRAPH_TOOLBAR_TOGGLE_RANK = 'GRAPH_TOOLBAR_TOGGLE_RANK',
  GRAPH_TOOLBAR_TOGGLE_RANK_BY = 'GRAPH_TOOLBAR_TOGGLE_RANK_BY',
  GRAPH_TOOLBAR_TOGGLE_SERVICE_NODES = 'GRAPH_TOOLBAR_TOGGLE_SERVICE_NODES',
  GRAPH_TOOLBAR_TOGGLE_TRAFFIC_ANIMATION = 'GRAPH_TOOLBAR_TOGGLE_TRAFFIC_ANIMATION',
  GRAPH_TOOLBAR_TOGGLE_WAYPOINT = 'GRAPH_TOOLBAR_TOGGLE_WAYPOINT',

  GRAPH_UPDATE_SUMMARY = 'GRAPH_UPDATE_SUMMARY',

  MESH_SET_DEFINITION = 'MESH_SET_DEFINITION',
  MESH_SET_LAYOUT = 'MESH_SET_LAYOUT',
  MESH_SET_TARGET = 'MESH_SET_TARGET',
  MESH_SET_UPDATE_TIME = 'MESH_SET_UPDATE_TIME',
  MESH_TOOLBAR_RESET_SETTINGS = 'MESH_TOOLBAR_RESET_SETTINGS',
  MESH_TOOLBAR_SET_FIND_VALUE = 'MESH_TOOLBAR_SET_FIND_VALUE',
  MESH_TOOLBAR_SET_HIDE_VALUE = 'MESH_TOOLBAR_SET_HIDE_VALUE',
  MESH_TOOLBAR_TOGGLE_LEGEND = 'MESH_TOOLBAR_TOGGLE_LEGEND',
  MESH_TOOLBAR_TOGGLE_FIND_HELP = 'MESH_TOOLBAR_TOGGLE_FIND_HELP',

  // Disable Actions
  ENABLE_GRAPH_FILTERS = 'ENABLE_GRAPH_FILTERS',

  HELP_STATUS_REFRESH = 'HELP_STATUS_REFRESH',

  TRACING_SET_URL = 'TRACING_SET_URL',
  TRACING_SET_ENABLED = 'TRACING_SET_ENABLED',
  TRACING_SET_INFO = 'TRACING_SET_INFO',
  TRACING_SET_TRACE_ID = 'TRACING_SET_TRACE_ID',
  TRACING_SET_TRACE = 'TRACING_SET_TRACE',

  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_EXTEND = 'LOGIN_EXTEND',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
  SET_LANDING_ROUTE = 'SET_LANDING_ROUTE',

  MTLS_SET_INFO = 'MTLS_SET_INFO',

  ISTIO_STATUS_SET_INFO = 'ISTIO_STATUS_SET_INFO',
  ISTIO_SET_CERTS_INFO = 'ISTIO_SET_CERTS_INFO',

  MC_ADD_MESSAGE = 'MC_ADD_MESSAGE',
  MC_REMOVE_MESSAGE = 'MC_REMOVE_MESSAGE',
  MC_MARK_MESSAGE_AS_READ = 'MC_MARK_MESSAGE_AS_READ',
  MC_TOGGLE_MESSAGE_DETAIL = 'MC_TOGGLE_MESSAGE_DETAIL',
  MC_SHOW = 'MC_SHOW',
  MC_HIDE = 'MC_HIDE',
  MC_TOGGLE_EXPAND = 'MC_TOGGLE_EXPAND',
  MC_TOGGLE_GROUP = 'MC_TOGGLE_GROUP',
  MC_HIDE_NOTIFICATION = 'MC_HIDE_NOTIFICATION',
  MC_EXPAND_GROUP = 'MC_EXPAND_GROUP',

  METRICS_STATS_SET = 'METRICS_STATS_SET',

  NAMESPACE_REQUEST_STARTED = 'NAMESPACE_REQUEST_STARTED',
  NAMESPACE_SUCCESS = 'NAMESPACE_SUCCESS',
  NAMESPACE_FAILED = 'NAMESPACE_FAILED',
  TOGGLE_ACTIVE_NAMESPACE = 'TOGGLE_ACTIVE_NAMESPACE',
  SET_ACTIVE_NAMESPACES = 'SET_ACTIVE_NAMESPACES',
  NAMESPACE_SET_FILTER = 'NAMESPACE_SET_FILTER',

  CLUSTER_SET_FILTER = 'CLUSTER_SET_FILTER',
  SET_ACTIVE_CLUSTERS = 'SET_ACTIVE_CLUSTERS',
  TOGGLE_ACTIVE_CLUSTER = 'TOGGLE_ACTIVE_CLUSTER',

  NAV_COLLAPSE = 'NAV_COLLAPSE',
  SET_DURATION = 'SET_DURATION',
  SET_KIOSK = 'SET_KIOSK',
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_THEME = 'SET_THEME',
  SET_LAST_REFRESH = 'SET_LAST_REFRESH',
  SET_REFRESH_INTERVAL = 'SET_REFRESH_INTERVAL',
  SET_REPLAY_QUERY_TIME = 'SET_REPLAY_QUERY_TIME',
  SET_TIME_RANGE = 'SET_TIME_RANGE',
  TOGGLE_REPLAY_ACTIVE = 'TOGGLE_REPLAY_ACTIVE',

  TOUR_END = 'TOUR_END',
  TOUR_SET_STOP = 'TOUR_SET_STOP',
  TOUR_START = 'TOUR_START'
}
