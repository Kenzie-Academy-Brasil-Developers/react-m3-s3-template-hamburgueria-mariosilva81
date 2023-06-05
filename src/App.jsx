import { GlobalCSS } from './styles/global'
import { ResetCSS } from './styles/reset'

export const App = () => {
  	return (
		<>
			<ResetCSS />
			<GlobalCSS />
			<h1>Teste</h1>
    	</>
  	)
}