import * as Inertia from '@inertiajs/inertia'
import * as Preact from 'preact/src/index'
import { JSXInternal } from 'preact/src/jsx'
import { renderToString } from 'preact-render-to-string'

// Missing interface from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/afd309b4193c1f448386bf8fe09e512e4422e69e/types/react/index.d.ts#L146
export interface PreactElement<
  P = any,
  T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
> {
  type: T
  props: P
  key: Preact.Key | null
}

// Missing interface from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/afd309b4193c1f448386bf8fe09e512e4422e69e/types/react/index.d.ts#L84
export type JSXElementConstructor<P> =
  | ((props: P) => PreactElement<any, any> | null)
  | (new (props: P) => Preact.Component<any, any>)

export type PreactInstance = PreactElement
export type PreactComponent = Preact.VNode

export type PageResolver = (name: string) => PreactComponent | Promise<PreactComponent> | NodeRequire // TODO: When shipped, replace with: Inertia.PageResolver<PreactComponent>
export type HeadManagerOnUpdate = (elements: string[]) => void // TODO: When shipped, replace with: Inertia.HeadManagerOnUpdate
export type HeadManagerTitleCallback = (title: string) => string // TODO: When shipped, replace with: Inertia.HeadManagerTitleCallback

export type AppType<SharedProps = Inertia.PageProps> = Preact.FunctionComponent<
  {
    children?: (props: {
      Component: Preact.ComponentType
      key: Preact.Key
      props: Inertia.Page<SharedProps>['props']
    }) => PreactComponent
  } & SetupOptions<unknown, SharedProps>['props']
>

interface BaseInertiaLinkProps {
  as?: string
  data?: object
  href: string
  method?: string
  headers?: object
  onClick?: (event: Event) => void
  preserveScroll?: boolean | ((props: Inertia.PageProps) => boolean)
  preserveState?: boolean | ((props: Inertia.PageProps) => boolean) | null
  replace?: boolean
  only?: string[]
  onCancelToken?: (cancelToken: import('axios').CancelTokenSource) => void
  onBefore?: () => void
  onStart?: () => void
  onProgress?: (progress: Inertia.Progress) => void
  onFinish?: () => void
  onCancel?: () => void
  onSuccess?: () => void
}

type InertiaLinkProps = BaseInertiaLinkProps &
  Omit<JSXInternal.HTMLAttributes<HTMLElement>, keyof BaseInertiaLinkProps> &
  Omit<JSXInternal.HTMLAttributes<HTMLElement>, keyof BaseInertiaLinkProps>

type InertiaLink = Preact.FunctionComponent<InertiaLinkProps>

type InertiaHeadProps = {
  title?: string
}

type InertiaHead = Preact.FunctionComponent<InertiaHeadProps>

export function usePage<Page extends Inertia.Page = Inertia.Page>(): Page

export function useRemember<State>(initialState: State, key?: string): [State]

export const InertiaLink: InertiaLink

export const Link: InertiaLink

export const InertiaHead: InertiaHead

export const Head: InertiaHead

export const InertiaApp: AppType

export const App: AppType

type setDataByObject<TForm> = (data: TForm) => void
type setDataByMethod<TForm> = (data: (previousData: TForm) => TForm) => void
type setDataByKeyValuePair<TForm> = <K extends keyof TForm>(key: K, value: TForm[K]) => void

export interface InertiaFormProps<TForm = Record<string, any>> {
  data: TForm
  isDirty: boolean
  errors: Record<keyof TForm, string>
  hasErrors: boolean
  processing: boolean
  progress: Inertia.Progress | null
  wasSuccessful: boolean
  recentlySuccessful: boolean
  setData: setDataByObject<TForm> & setDataByMethod<TForm> & setDataByKeyValuePair<TForm>
  transform: (callback: (data: TForm) => TForm) => void
  setDefaults(): void
  setDefaults(field: keyof TForm, value: string): void
  setDefaults(fields: Record<keyof TForm, string>): void
  reset: (...fields: (keyof TForm)[]) => void
  clearErrors: (...fields: (keyof TForm)[]) => void
  setError(field: keyof TForm, value: string): void
  setError(errors: Record<keyof TForm, string>): void
  submit: (method: Inertia.Method, url: string, options?: Inertia.VisitOptions) => void
  get: (url: string, options?: Inertia.VisitOptions) => void
  patch: (url: string, options?: Inertia.VisitOptions) => void
  post: (url: string, options?: Inertia.VisitOptions) => void
  put: (url: string, options?: Inertia.VisitOptions) => void
  delete: (url: string, options?: Inertia.VisitOptions) => void
}

export function useForm<TForm = Record<string, any>>(initialValues?: TForm): InertiaFormProps<TForm>
export function useForm<TForm = Record<string, any>>(
  rememberKey: string,
  initialValues?: TForm,
): InertiaFormProps<TForm>

export type SetupOptions<ElementType, SharedProps> = {
  el: ElementType
  App: AppType
  props: {
    initialPage: Inertia.Page<SharedProps>
    initialComponent: PreactComponent
    resolveComponent: PageResolver
    titleCallback?: HeadManagerTitleCallback
    onHeadUpdate?: HeadManagerOnUpdate
  }
}

export type BaseInertiaAppOptions = {
  title?: HeadManagerTitleCallback
  resolve: PageResolver
}

export type CreateInertiaAppSetupReturnType = PreactInstance | void
export type InertiaAppOptionsForCSR<SharedProps> = BaseInertiaAppOptions & {
  id?: string
  page?: Inertia.Page | string
  render?: undefined
  setup(options: SetupOptions<HTMLElement, SharedProps>): CreateInertiaAppSetupReturnType
}

export type CreateInertiaAppSSRContent = { head: string[]; body: string }
export type InertiaAppOptionsForSSR<SharedProps> = BaseInertiaAppOptions & {
  id?: undefined
  page: Inertia.Page | string
  render: typeof renderToString
  setup(options: SetupOptions<null, SharedProps>): PreactInstance
}

export function createInertiaApp<SharedProps = Inertia.PageProps>(
  options: InertiaAppOptionsForCSR<SharedProps>,
): Promise<CreateInertiaAppSetupReturnType>
export function createInertiaApp<SharedProps = Inertia.PageProps>(
  options: InertiaAppOptionsForSSR<SharedProps>,
): Promise<CreateInertiaAppSSRContent>
