import {
  AboutUs,
  ContactUs,
  LandingPage,
  Portfolio,
  ProductShowcase,
  Products,
  Services,
} from "../pages";

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
    path: "/Services/Products",
    component: <Products />,
  },
  {
    path: "/Services/Products/:productName",
    component: <ProductShowcase />,
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
