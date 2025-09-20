import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import {GlobalStyles} from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
	<>
		<GlobalStyles/>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</>,
);
