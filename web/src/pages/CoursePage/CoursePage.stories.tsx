import type { Meta, StoryObj } from '@storybook/react'

import CoursePage from './CoursePage'

const meta: Meta<typeof CoursePage> = {
  component: CoursePage,
}

export default meta

type Story = StoryObj<typeof CoursePage>

export const Primary: Story = {}
