import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import Page1 from "../views/page-1/Main";
import Page2 from "../views/page-2/Main";
import Page3 from "../views/page-3/Main";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SimpleMenu />,
      children: [
        {
          path: "/",
          element: <Page1 />,
        },
        {
          path: "/swap",
          element: <Page2 />,
        },
        {
          path: "/smart-contract",
          element: <Page3 />,
        }
      ],
    }
  ];

  return useRoutes(routes);
}

export default Router;
