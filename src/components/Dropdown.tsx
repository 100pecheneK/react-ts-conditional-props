import React from 'react'

type DropdownProps<T> = T extends number | string
  ? {
      data: (string | number)[]
      labelProp?: never
      valueProp?: never
    }
  : {
      data: Array<T>
      labelProp: keyof T
      valueProp: keyof T
    }

export default function Dropdown<T>(props: DropdownProps<T>) {
  return <pre>{JSON.stringify(props)}</pre>
}

function DebugWhileDeveloping() {
  return (
    <>
      <Dropdown data={['a', 'b']} />
      <Dropdown
        data={[{ id: 5, name: 'Misha' }]}
        labelProp='name'
        valueProp='id'
      />
    </>
  )
}
