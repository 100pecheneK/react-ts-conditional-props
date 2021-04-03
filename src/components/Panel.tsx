import React from 'react'

type PanelProps =
  | { collapsable: true; defaultCollapsed?: true }
  | { collapsable?: never; defaultCollapsed?: never }

export default function Panel(props: PanelProps) {
  return <pre>{JSON.stringify(props)}</pre>
}

function DebugWhileDeveloping() {
  return (
    <>
      <Panel collapsable defaultCollapsed />
      <Panel collapsable />
      <Panel />
    </>
  )
}
