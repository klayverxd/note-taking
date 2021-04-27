import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core';

import Notes from './pages/Notes.js';
import Create from './pages/Create.js';
import Layout from './components/Layout.js';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fefefe',
		},
		secondary: {
			light: '#B04EDF',
			main: '#8981D8',
			dark: '#6A61C0',
		},
		text: {
			// primary: '#fff',
			// secondary: '#000',
		},
		typography: {
			fontFamily: 'Quicksand',
			fontWeightLight: 400,
			fontWeightRegular: 500,
			fontWeightMedium: 600,
			fontWeightBold: 700,
		},
	},
});

const App = () => (
	<ThemeProvider theme={theme}>
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={Notes} />
					<Route path="/create" component={Create} />
				</Switch>
			</Layout>
		</Router>
	</ThemeProvider>
);

export default App;
