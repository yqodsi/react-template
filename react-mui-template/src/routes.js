import HomePage from "./pages/home";
import AboutPage from "./pages/about";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/about",
    component: AboutPage,
    name: "about",
  },
];

export default routes