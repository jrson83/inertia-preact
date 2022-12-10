import * as Inertia from '@inertiajs/core'

export type AppCallback = (page: Inertia.Page) => Inertia.InertiaAppResponse
export function createServer(render: AppCallback, port?: number | undefined): void

export { default as createServer } from './dist/server'
