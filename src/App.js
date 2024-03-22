import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Homepage from './Pages/HomePage';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage';
import WorkPage from './Pages/WorkPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<Homepage/>}
                    />
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/about"
                        element={<About/>}
                    />
                    {/* This route is for work component 
          with exact path "/workpage", in component 
          props we passes the imported component*/}
                    <Route
                        path="/workpage"
                        element={<WorkPage/>}
                    />
                    
                    {/* This route is for contactpage component
          with exact path "/contactpage", in 
          component props we passes the imported component*/}
                    <Route
                        path="/contactpage"
                        element={<ContactPage/>}
                    />
 
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Homepage/>}
                    />
                </Routes>
            </Router>
      
      {/* <Homepage/> */}
      {/* <ContactPage/> */}
      {/* {<WorkPage/>} */}
    </div>
  );
}

export default App;
