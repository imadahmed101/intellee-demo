import type { Meta, StoryObj } from '@storybook/react'

import CoursesPage from './CoursesPage'

const meta: Meta<typeof CoursesPage> = {
  component: CoursesPage,
}

export default meta

type Story = StoryObj<typeof CoursesPage>

export const Primary: Story = {}
