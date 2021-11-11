import MyCalendar from "../components/MyCalendar/MyCalendar";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

export const routes = [
  {
    component: Registration,
    path: "/registration",
    exact: true,
    withAuth: false,
  },
  {
    component: Login,
    path: "/login",
    exact: true,
    withAuth: false,
  },
  {
    component: MyCalendar,
    path: "/",
    exact: true,
    withAuth: true,
  },
]