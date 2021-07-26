import './App.css';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'; 
import Notes from './pages/Notes';
import Create from './pages/Create';
import {createMuiTheme , ThemeProvider} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';

const themes = createMuiTheme({
  palette:{
    primary:{
      main:'#fefefe'
    },
    secondary:purple  

  }
})


function App() {
  return (
    <ThemeProvider theme={themes}>
      
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/"  >
                <Notes/>
              </Route> 
              <Route exact path="/create"  >
                <Create/>
              </Route>
            </Switch>
          </Layout>
        </Router>
    
    </ThemeProvider>
  );
}

export default App;
