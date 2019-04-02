import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';
import PageNotFound from '@/components/common/PageNotFound.vue';
import {RouteNames} from '@/router/RouteNames';
import {AuthService} from '@/common/services/AuthService';
import MyProfile from '@/components/users/MyProfile.vue';
import Skills from '@/components/skills/Skills.vue';
import Technology from '@/components/skills/Technology.vue';
import TechnologyProfile from '@/components/skills/TechnologyProfile.vue';
import TechnologySkillTree from '@/components/skills/TechnologySkillTree.vue';
import UserSkillGoals from '@/components/skills/UserSkillGoals.vue';
import UserSkills from '@/components/skills/UserSkills.vue';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import ResetPassword from '@/components/auth/ResetPassword.vue';
import CreateAccount from '@/components/auth/CreateAccount.vue';
import ClaimSkills from '@/components/auth/ClaimSkills.vue';
import FillUserDetails from '@/components/auth/FillUserDetails.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  routes: [
    {
      path: '/',
      component: Home,
      name: RouteNames.Home
    },
    {
      path: '/home',
      redirect: {name: RouteNames.Home}
    },
	  { path: '/login',
	  	component: Login,
		  name: RouteNames.Login
	  },
	  { path: '/join',
		  component: Register,
		  children: [
			  {
			  	path: '',
				  component: CreateAccount,
				  name: RouteNames.CreateAccount
			  },
			  {
				  path: 'personal-details',
				  component: FillUserDetails,
				  name: RouteNames.FillUserDetails
			  },
			  {
			  	path: 'declare-skills',
				  component: ClaimSkills,
				  name: RouteNames.ClaimSkills
			  }
		  ]
	  },
	  { path: '/password-reset',
		  component: ResetPassword,
		  name: RouteNames.ResetPassword
	  },
    {
      path: '/skills',
      component: Skills,
      name: RouteNames.Skills
    },
    {
      path: '/crafts/:technologyId',
      component: Technology,
      props: true,
      children: [
        {
          path: '',
          component: TechnologyProfile,
          name: RouteNames.TechnologyProfile,
          props: true,
          meta: {
            noScroll: true
          }
        },
        {
          path: 'skills',
          component: TechnologySkillTree,
          name: RouteNames.TechnologySkillTree,
          props: true,
          meta: {
            noScroll: true
          }
        }
      ]
    },
    {
      path: '/my-profile',
      component: MyProfile,
      children: [
        {
          path: " ",
          component: UserSkillGoals,
          name: RouteNames.MySkillGoals,
          props: true,
          meta: {
            noScroll: true
          }
        },
        {
          path: "skills",
          component: UserSkills,
          name: RouteNames.MySkills,
          props: true,
          meta: {
            noScroll: true
          }
        }
      ]
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  if (requiresAuth && !AuthService.isLoggedIn()) {
    // tslint:disable-next-line
    console.log('401 - not authorized');
    next({name: RouteNames.Home});
  } else {
    next();
  }
});

export default router;
