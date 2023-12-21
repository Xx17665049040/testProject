//路由组件
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact"

//路由管理
import { RouteConfig } from "react-router-config"

const routes:RouteConfig = [
    {
        Path: "/Home",
        exact: true,
        component: Home
    },
    {
        path:'/About',
        exact:true,
        component:About
      },
      {
        path:'/Contact',
        exact:true,
        component:Contact
      }
    

]
export default routes;