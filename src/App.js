// import logo from './logo.svg';
import Flashcard from './FlashCard/FlashCard';
import AddFlashcardForm from './CreateCard/CreateCard'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 

function App() {
  // let l = [
  //   {
  //     term: 'JavaScript',
  //     definition: 'A high-level, interpreted programming language used to create interactive effects within web browsers.'
  //   },
  //   {
  //     term: 'React',
  //     definition: 'A JavaScript library for building user interfaces.'
  //   },
  //   {
  //     term: 'Node.js',
  //     definition: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
  //   }
  // ]
  return (
    <BrowserRouter>
      {/* <> */}
      <Routes>
        <Route path='Flashcard' element={<Flashcard />}/>
          {/* <Flashcard /> */}
        {/* </Route> */}
        <Route path='/' element={<AddFlashcardForm/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
