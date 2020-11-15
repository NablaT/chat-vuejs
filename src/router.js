
import { createWebHistory, createRouter } from "vue-router";
import Messages from "./components/Messages.vue";
import Contacts from "./components/Contacts.vue";
// 1. Import components

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Messages },
    { path: '/messages', component: Messages },
    { path: '/contacts', component: Contacts }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

// import { createWebHistory, createRouter } from "vue-router";
// import Home from "./components/Home.vue";
// import Count from "./components/Count.vue";
// // 1. Import components

// // 2. Define some routes
// // Each route should map to a component.
// const routes = [
//     { path: '/', component: Home },
//     { path: '/home', component: Home },
//     { path: '/count', component: Count }
// ]

// // 3. Create the router instance and pass the `routes` option
// // You can pass in additional options here, but let's
// // keep it simple for now.
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

// export default router;