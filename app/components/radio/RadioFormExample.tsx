'use client'

import { Controller, useForm } from 'react-hook-form'
import SenRadio from '@/src/components/SenRadio/SenRadio'

type FormValues = { plan: 'free' | 'pro' | 'team' }

export function RadioFormExample() {
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: { plan: 'free' },
  })

  const current = watch('plan')

  const onSubmit = (data: FormValues) => {
    alert(`Form data:\n${JSON.stringify(data, null, 2)}`)
  }

  const options: { id: string; value: FormValues['plan']; label: string }[] = [
    { id: 'plan-free', value: 'free', label: 'Free' },
    { id: 'plan-pro', value: 'pro', label: 'Pro' },
    { id: 'plan-team', value: 'team', label: 'Team' },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="plan"
        control={control}
        render={({ field }) => (
          <fieldset className="space-y-2">
            <legend className="font-black tracking-tight">Choose a plan</legend>
            {options.map((o) => (
              <SenRadio
                key={o.id}
                id={o.id}
                name={field.name}
                value={o.value}
                label={o.label}
                checked={field.value === o.value}
                onChange={() => field.onChange(o.value)}
              />
            ))}
          </fieldset>
        )}
      />

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center rounded bg-neutral-900 px-4 py-2 font-bold text-white transition hover:bg-neutral-700"
        >
          Submit
        </button>
        <span className="text-sm text-neutral-700">
          Current: <code className="font-mono">{current}</code>
        </span>
      </div>
    </form>
  )
}
