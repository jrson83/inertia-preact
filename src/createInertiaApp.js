import App from './App'
import { h } from 'preact'

export default async function createInertiaApp({ id = 'app', resolve, setup, title, visitOptions, page, render }) {
	const isServer = typeof window === 'undefined'
	const el = isServer ? null : document.getElementById(id)
	const initialPage = page || JSON.parse(el.dataset.page)
	const resolveComponent = name => Promise.resolve(resolve(name)).then(module => module.default || module)

	let head = []

	const preactApp = await resolveComponent(initialPage.component).then(initialComponent => {
		return setup({
			el,
			App,
			props: {
				initialPage,
				initialComponent,
				resolveComponent,
				titleCallback: title,
				onHeadUpdate: isServer ? elements => (head = elements) : null,
				visitOptions
			}
		})
	})

	if (isServer) {
		const body = await render(
			h(
				'div',
				{
					id,
					'data-page': JSON.stringify(initialPage)
				},
				preactApp
			)
		)

		return { head, body }
	}
}
