export function getAsyncRouter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 'ok',
        code: '200',
        message: '请求成功',
        data: [
          {
            path: '/form',
            component: '#',
            redirect: '/form',
            meta: {
              title: '表单',
              icon: 'lock'
            },
            children: [
              {
                path: 'index',
                name: 'Form',
                component: 'form',
                meta: { title: 'Form', icon: 'form' }
              }
            ]
          },

          {
            path: '/example',
            component: '#',
            redirect: '/example/table',
            name: 'Example',
            meta: { title: 'Example', icon: 'el-icon-s-help' },
            children: [
              {
                path: 'table',
                name: 'Table',
                component: 'table',
                meta: { title: 'Table', icon: 'table' }
              },
              {
                path: 'tree',
                name: 'Tree',
                component: 'tree',
                meta: { title: 'Tree', icon: 'tree' }
              }
            ]
          },

          {
            path: '/nested',
            component: '#',
            redirect: '/nested',
            meta: {
              title: '嵌套菜单',
              icon: 'nested'
            },
            children: [
              {
                path: 'menu1',
                component: 'nested/menu1', // Parent router-view
                name: 'Menu1',
                meta: { title: 'Menu1' },
                children: [
                  {
                    path: 'menu1-1',
                    component: 'nested/menu1/menu1-1',
                    name: 'Menu1-1',
                    meta: { title: 'Menu1-1' }
                  },
                  {
                    path: 'menu1-2',
                    component: 'nested/menu1/menu1-2',
                    name: 'Menu1-2',
                    meta: { title: 'Menu1-2' },
                    children: [
                      {
                        path: 'menu1-2-1',
                        component: 'nested/menu1/menu1-2/menu1-2-1',
                        name: 'Menu1-2-1',
                        meta: { title: 'Menu1-2-1' }
                      },
                      {
                        path: 'menu1-2-2',
                        component: 'nested/menu1/menu1-2/menu1-2-2',
                        name: 'Menu1-2-2',
                        meta: { title: 'Menu1-2-2' }
                      }
                    ]
                  },
                  {
                    path: 'menu1-3',
                    component: 'nested/menu1/menu1-3',
                    name: 'Menu1-3',
                    meta: { title: 'Menu1-3' }
                  }
                ]
              },
              {
                path: 'menu2',
                component: 'nested/menu2',
                name: 'Menu2',
                meta: { title: 'menu2' }
              }
            ]
          },

          {
            path: 'external-link',
            component: '#',
            children: [
              {
                path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
                meta: { title: 'External Link', icon: 'link' }
              }
            ]
          }
        ]
      })
    }, 500)
  })
}
