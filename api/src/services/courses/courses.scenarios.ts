import type { Prisma, Course } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: { data: { name: 'String', code: 'String9648038' } },
    two: { data: { name: 'String', code: 'String907973' } },
  },
})

export type StandardScenario = ScenarioData<Course, 'course'>
