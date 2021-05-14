import asyncRoter from './sidebar.js'

export function getAsyncRouter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(asyncRoter)
    }, 500)
  })
}
