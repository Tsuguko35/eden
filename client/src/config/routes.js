import { LandingPage, Portfolio, Services } from "../pages";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/Services",
    component: <Services />,
  },
  {
    path: "/Portfolio",
    component: <Portfolio />,
  },
];
export default routes;
