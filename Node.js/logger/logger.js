import pino from "pino";
import pinoHttp from "pino-http";

export const logger = pino({
  timestamp() {
    return `,time:${Date.now() + 3600000 * 8}`; // GMT + 8
  },
  prettyPrint:
    process.env.NODE_ENV === "development"
      ? { translateTime: "yyyy-mm-dd HH:MM:ss.l" }
      : false,
});

export const loggerMiddleware = pinoHttp({
  logger,
  serializers: {
    req(req) {
      req.body = req.raw.body;
      return req;
    },
  },
  customLogLevel(res, err) {
    if (res.statusCode >= 400 && res.statusCode < 500) return "warn";
    if (res.statusCode >= 500 || err) return "error";
    return "info";
  },
  customSuccessMessage(res) {
    if (res.statusCode === 404) return "resource not found";
    return "request completed";
  },
});
