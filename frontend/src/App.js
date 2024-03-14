import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login'
import Signup from './components/SignUp'
import  Dashboard from './components/Dashboard'
import Account from './components/Account'
import AddQuiz from './components/AddQuiz'
import UserQuizes from './components/UserQuizes';
import ViewQuiz from './components/ViewQuiz'
import QuizLibrary from './components/QuizLibrary';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<Signup />} />
          <Route path="Dashboard" element={<Dashboard/>}/>
          <Route path='/Account' element = {<Account/>}/>
          <Route path='/AddQuiz' element = {<AddQuiz/>}/>
          <Route path='/AddQuiz' element = {<AddQuiz/>}/>
          <Route path='/UserQuizes' element = {<UserQuizes/>} />
          <Route path='/viewQuiz' element = {<ViewQuiz/>} />
          <Route path='/QuizLibrary' element = {<QuizLibrary/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
