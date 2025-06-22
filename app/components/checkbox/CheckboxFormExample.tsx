// app/components/checkbox/CheckboxFormExample.tsx

'use client'

import { SenCheckbox } from '@/src/components/SenCheckbox'
import { useForm, Controller } from 'react-hook-form'

type FormValues = { subscribe: boolean }

export function CheckboxFormExample() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { subscribe: false },
  })

  const onSubmit = (data: FormValues) => {
    alert(`Form data:\n${JSON.stringify(data, null, 2)}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="subscribe"
        control={control}
        render={({ field }) => (
          <SenCheckbox
            label="Subscribe to newsletter"
            name={field.name}
            checked={field.value} // ← boolean state
            onChange={(e) => field.onChange(e.target.checked)} // ← send back boolean
            onBlur={field.onBlur}
            ref={field.ref}
          />
        )}
      />

      <button
        type="submit"
        className="inline-flex items-center rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  )
}
