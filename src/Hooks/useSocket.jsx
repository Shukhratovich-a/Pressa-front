import io from "socket.io-client";

import { HOST } from "../config";

export default io(HOST, { transports: ["websocket", "polling"] });
