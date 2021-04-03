import React from 'react'

type OneOrTheOtherProps =
  | { collapsed?: true; expanded?: never }
  | { collapsed?: never; expanded?: true }

export default function OneOrTheOther(props: OneOrTheOtherProps) {
  return <pre>{JSON.stringify(props)}</pre>
}

function DebugWhileDeveloping() {
  return (
    <>
      <OneOrTheOther collapsed />
      <OneOrTheOther expanded />
      <OneOrTheOther />
    </>
  )
}
