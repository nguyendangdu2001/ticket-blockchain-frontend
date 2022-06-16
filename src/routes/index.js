import authRoute from "@modules/auth/routes";
import eventsRoute from "@modules/events/routes";

const routes = [...authRoute, ...eventsRoute];
export default routes;
