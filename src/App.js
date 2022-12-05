import HeadContext from './HeadContext'
import PageContext from './PageContext'
import { createHeadManager, Inertia } from '@inertiajs/inertia'
import { h } from 'preact'
import { useEffect, useMemo, useState } from 'preact/hooks'

export default function App({
  children,
  initialPage,
  initialComponent,
  resolveComponent,
  titleCallback,
  onHeadUpdate,
}) {
  const [current, setCurrent] = useState({
    component: initialComponent || null,
    page: initialPage,
    key: null,
  })

  const headManager = useMemo(() => {
    return createHeadManager(
      typeof window === 'undefined',
      titleCallback || ((title) => title),
      onHeadUpdate || (() => {}),
    )
  }, [])

  useEffect(() => {
    Inertia.init({
      initialPage,
      resolveComponent,
      swapComponent: async ({ component, page, preserveState }) => {
        setCurrent((current) => ({
          component,
          page,
          key: preserveState ? current.key : Date.now(),
        }))
      },
    })
  }, [])

  if (!current.component) {
    return h(HeadContext.Provider, { value: headManager }, h(PageContext.Provider, { value: current.page }, null))
  }

  const renderChildren =
    children ||
    (({ Component, props, key }) => {
      const child = h(Component, { key, ...props })

      if (typeof Component.layout === 'function') {
        return Component.layout(child)
      }

      if (Array.isArray(Component.layout)) {
        return Component.layout
          .concat(child)
          .reverse()
          .reduce((children, Layout) => h(Layout, { children, ...props }))
      }

      return child
    })

  return h(
    HeadContext.Provider,
    { value: headManager },
    h(
      PageContext.Provider,
      { value: current.page },
      renderChildren({
        Component: current.component,
        key: current.key,
        props: current.page.props,
      }),
    ),
  )
}

App.displayName = 'Inertia'
