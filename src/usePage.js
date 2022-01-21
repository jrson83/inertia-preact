import PageContext from './PageContext'
import { useContext } from 'preact/hooks'

export default function usePage() {
	const page = useContext(PageContext)

	if (!page) {
		throw new Error('usePage must be used within the Inertia component')
	}

	return page
}
