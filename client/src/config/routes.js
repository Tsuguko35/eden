import { AboutUs, ContactUs, LandingPage, Portfolio, Services } from "../pages";

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
  {
    path: "/About",
    component: <AboutUs />,
  },
  {
    path: "/Contact",
    component: <ContactUs />,
  },
];
export default routes;
