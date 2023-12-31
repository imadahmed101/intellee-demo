import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCourseById, UpdateCourseInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCourse = NonNullable<EditCourseById['course']>

interface CourseFormProps {
  course?: EditCourseById['course']
  onSave: (data: UpdateCourseInput, id?: FormCourse['id']) => void
  error: RWGqlError
  loading: boolean
}

const CourseForm = (props: CourseFormProps) => {
  const onSubmit = (data: FormCourse) => {
    props.onSave(data, props?.course?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCourse> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.course?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="code"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Code
        </Label>

        <TextField
          name="code"
          defaultValue={props.course?.code}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="code" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.course?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="duration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Duration
        </Label>

        <NumberField
          name="duration"
          defaultValue={props.course?.duration}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="duration" className="rw-field-error" />

        <Label
          name="Fee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fee
        </Label>

        <NumberField
          name="Fee"
          defaultValue={props.course?.Fee}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Fee" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CourseForm
