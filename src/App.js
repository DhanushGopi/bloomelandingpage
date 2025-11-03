import './App.css';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';



function App() {

  // const paths = [{
  //   path:"/",
  //   element:<HomePage/>
  // }] 

  // const navpaths = new createHashRouter(paths)

  return (
    <div className="App">
      {/* <RouterProvider router={navpaths}/> */}
      <HomePage/>
    </div>
  );
}

export default App;
