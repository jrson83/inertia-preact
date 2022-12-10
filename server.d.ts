import * as Inertia from '@inertiajs/core'

declare module '@jrson83/inertia-preact/server' {
  export type AppCallback = (page: Inertia.Page) => Inertia.InertiaAppResponse
  export default function createServer(render: AppCallback, port?: number | undefined): void
}
