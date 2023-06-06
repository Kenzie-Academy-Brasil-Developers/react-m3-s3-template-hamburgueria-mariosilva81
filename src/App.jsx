import { ResetStyle } from './styles/reset'
import { GlobalStyle } from './styles/global'

import { Home } from './pages/Home'

export const App = () => {
  	return (
		<>
			<ResetStyle />
			<GlobalStyle />
			<Home />
    	</>
  	)
}