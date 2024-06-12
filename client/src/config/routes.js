import {
  AboutUs,
  BecomeADealer,
  ContactUs,
  LandingPage,
  Portfolio,
  ProductQuote,
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
    path: "/Services/Products/Quote",
    component: <ProductQuote />,
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
  {
    path: "/BecomeADealer",
    component: <BecomeADealer />,
  },
];
export default routes;
