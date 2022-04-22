import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';  
import DisplayUsers from './Components/DisplayUsers';
import { ShowUser } from './Components/DisplayUser';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.usersReducer.user);
  
  return (
      <div class = "container">
      <h3 class = "p-3 mb-2 bg-dark text-light text-center rounded">Users </h3><br/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayUsers/>} />
          <Route path="/displayUser/:userId" element={<ShowUser user = {user}/>} />
          <Route path = "/editUser/:userId" element={<ShowUser user = {user}/>} /> 
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;