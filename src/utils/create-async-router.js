import Layout from '@/layout'

export function createAsyncRouter(data) {
  const routes = []

  for (const menu of data) {
    const { path, component, redirect, name, meta, children } = menu
    const createRoute = {
      path,
      component: component === 'Layout' ? Layout : () => import(`@/views/${component}/index.vue`),
      // 如果 import() 报错，替换为以下代码：
      // component: component === 'Layout' ? Layout : (resolve) => require([`@/views/${component}/index`], resolve),
      redirect,
      name,
      meta
    }

    if (children && children.length > 0) {
      createRoute.children = createAsyncRouter(children)
    }

    routes.push(createRoute)
  }
  return routes
}
