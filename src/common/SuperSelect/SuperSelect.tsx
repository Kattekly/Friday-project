import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'

import s from './SuperSelect.module.css'

export type ArrType = {
  id: number
  value: string | number
}

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: ArrType[]
  onChangeOption?: (option: number) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  value,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map(o => (
        <option id={'hw7-option-' + o.id} className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : [] // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // делают студенты
    onChangeOption?.(Number(e.currentTarget.value))
    onChange?.(e)
  }

  const finalSelectClassName = s.select + (className ? ' ' + className : '')

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      value={value}
      {...restProps}
    >
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
