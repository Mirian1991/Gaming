// global/routes.js

import {
  Homepage,
  Mobilegames,
  Aboutpage,
  Contactpage,
  Notfoundpage,
  Createacountpage,
  Loginpage,
  Cardinfo,
  GameDetails,
  MobileDetails
} from "../pages";

export const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Notfoundpage />
  },
  {
    path: "/:lang",
    element: <Homepage />,
    errorElement: <Notfoundpage />,
  },
  {
    path: "/:lang/mobilegames",
    element: <Mobilegames />,
  },
  {
    path: "/:lang/about",
    element: <Aboutpage />,
  },
  {
    path: "/:lang/contact",
    element: <Contactpage />,
  },
  {
    path: "/:lang/create-account",
    element: <Createacountpage />,
  },
  {
    path: "/:lang/login",
    element: <Loginpage />,
  },
  {
    path: "/:lang/full-info",
    element: <Cardinfo />,
  },
  {
    path: '/:lang/personal/:gameId',
    element: <GameDetails />,
  },
  {
    path: '/:lang/mobilegame/:mobilegameId',
    element: <MobileDetails />,
  },
];
