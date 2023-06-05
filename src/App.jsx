import { Header } from './components/Header'
import { GlobalCSS } from './styles/global'
import { ResetCSS } from './styles/reset'

export const App = () => {
  	return (
		<>
			<ResetCSS />
			<GlobalCSS />
			<Header />
    	</>
  	)
}