import ReactDOM from 'react-dom'

import './App.css'

import { ContextProvider } from './contexts/ContextProvider'
import App from './App'

ReactDOM.render(<ContextProvider><App /></ContextProvider>, document.getElementById('root'))