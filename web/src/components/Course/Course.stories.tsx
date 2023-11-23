// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Course from './Course'

const meta: Meta<typeof Course> = {
  component: Course,
}

export default meta

type Story = StoryObj<typeof Course>

export const Primary: Story = {}
