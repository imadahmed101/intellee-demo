import { render } from '@redwoodjs/testing/web'

import Course from './Course'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Course', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Course />)
    }).not.toThrow()
  })
})
