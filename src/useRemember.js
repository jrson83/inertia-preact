import { useEffect, useState } from 'preact/hooks'
import { Inertia } from '@inertiajs/inertia'

export default function useRemember(initialState, key) {
  const [state, setState] = useState(() => {
    const restored = Inertia.restore(key)

    return restored !== undefined ? restored : initialState
  })

  useEffect(() => {
    Inertia.remember(state, key)
  }, [state, key])

  return [state, setState]
}
