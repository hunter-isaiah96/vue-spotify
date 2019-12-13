import { shallowMount } from '@vue/test-utils'
// import Vuetify from '@nuxtjs/vuetify'

// const factory = () => {
//   return shallowMount(Category, {
//     Vuetify
//   })
// }

test('mounts properly', () => {
  const data = [
    { x: 11, y: 1 },
    { x: 10, y: 12 },
    20,
    90,
    3,
    { x: 100, y: 12 },
    1
  ]

  const compare = (a, b) => {
    switch (typeof a) {
      case 'object': {
        return typeof b == 'number' ? a.x - b : a.x - b.x
      }
      case 'number': {
        return typeof b == 'number' ? a - b : a - b.x
      }
    }
  }

  expect(data.sort((a, b) => compare(a, b))).toEqual([
    1,
    3,
    { x: 10, y: 12 },
    { x: 11, y: 1 },
    20,
    90,
    { x: 100, y: 12 }
  ])
})