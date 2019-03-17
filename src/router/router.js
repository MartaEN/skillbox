import Vue from 'vue';
import Router from 'vue-router';
import Info from "../components/info/Info";
import BootCampList from "../components/bootcamps/BootCampList";
import ProjectList from "../components/projects/ProjectList";
import UserList from "../components/users/UserList";
import UserCockPit from "../components/users/UserCockPit";


Vue.use(Router);

const routes = [
  { path: '/', component: Info },
  { path: '/vikings', component: UserList },
  { path: '/campaigns', component: ProjectList },
  { path: '/bootcamps', component: BootCampList },
  { path: '/outpost', component: UserCockPit }
]

export default new Router({
  routes
})