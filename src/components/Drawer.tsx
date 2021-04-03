import React from 'react'

type CircleProps = {
  shape: 'circle'
  redius: number
}
type SquareProps = {
  shape: 'square'
  width: number
}
type ReactangleProps = {
  shape: 'rectangle'
  width: number
  height: number
}

export type DrawerProps = { fullName: string } & (
  | CircleProps
  | SquareProps
  | ReactangleProps
)

export default function Drawer(props: DrawerProps) {
  return <pre>{JSON.stringify(props)}</pre>
}

function DebugWhileDeveloping() {
  return (
    <>
      <Drawer fullName='Misha' shape='circle' redius={10} />
      <Drawer fullName='Misha' shape='rectangle' height={10} width={10} />
      <Drawer fullName='Misha' shape='square' width={10} />
    </>
  )
}
