import { getAsyncRouter } from '@/api/asyncRouter/async-router'
import { /* asyncRoutes, */ constantRoutes } from '@/router'
import { createAsyncRouter } from '@/utils/create-async-router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      getAsyncRouter().then(response => {
        const { status, message, data } = response
        if (status === 200) {
          const newRoutes = createAsyncRouter(data)
          console.log('newRoutes')
          console.log(newRoutes)
          commit('SET_ROUTES', newRoutes)
          resolve(newRoutes)
        } else {
          console.log(message)
        }
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
