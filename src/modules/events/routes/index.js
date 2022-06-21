import { lazy } from "react";
import React from "react";
import Home from "../pages/home";
import Detail from "../pages/Detail";
import UserEvent from "../pages/UserEvent";
import UserEventDetail from "../pages/UserEventDetail";
import UserTicket from "../pages/UserTicket";
import EventScanner from "../pages/EventScanner";
import Market from "@modules/market/pages/martket";
import MarketDetail from "@modules/market/pages/market-detail";
import MyMarket from "@modules/market/pages/my-market";
// import Login from "../pages/login";
// import Register from "../pages/register";
// const Home = lazy(() => import("../pages/home"));

// const ForgetPassword = lazy(() => import("../pages/forget-password"));

const eventsRoute = [
  {
    component: Home,
    path: "/",
  },
  { path: "/detail/:id", exact: true, component: Detail },
  { path: "/user-event", exact: true, component: UserEvent },
  { path: "/user-ticket", exact: true, component: UserTicket },
  { path: "/my-market", exact: true, component: MyMarket },
  { path: "/market", exact: true, component: Market },
  { path: "/market/detail/:marketId", exact: true, component: MarketDetail },
  { path: "/user-event/:eventId", exact: true, component: UserEventDetail },
  { path: "/user-event/:eventId/scan", exact: true, component: EventScanner },

  // {
  //   component: ForgetPassword,
  //   path: "/forget-password",
  //   exact: true,
  // },
];
export default eventsRoute;
