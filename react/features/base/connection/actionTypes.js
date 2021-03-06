/**
 * The type of (redux) action which signals that a connection disconnected.
 *
 * {
 *     type: CONNECTION_DISCONNECTED,
 *     connection: JitsiConnection,
 *     message: string
 * }
 */
export const CONNECTION_DISCONNECTED = Symbol('CONNECTION_DISCONNECTED');

/**
 * The type of (redux) action which signals that a connection was successfully
 * established.
 *
 * {
 *     type: CONNECTION_ESTABLISHED,
 *     connection: JitsiConnection
 * }
 */
export const CONNECTION_ESTABLISHED = Symbol('CONNECTION_ESTABLISHED');

/**
 * The type of (redux) action which signals that a connection failed.
 *
 * {
 *     type: CONNECTION_FAILED,
 *     connection: JitsiConnection,
 *     error: string,
 *     message: string
 * }
 */
export const CONNECTION_FAILED = Symbol('CONNECTION_FAILED');

/**
 * The type of (redux) action which sets the location URL of the application,
 * connection, conference, etc.
 *
 * {
 *     type: SET_LOCATION_URL,
 *     locationURL: ?URL
 * }
 */
export const SET_LOCATION_URL = Symbol('SET_LOCATION_URL');
