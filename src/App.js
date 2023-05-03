// import logo from './logo.svg';
import Flashcard from './FlashCard/FlashCard';
import AddFlashcardForm from './CreateCard/CreateCard'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 

function App() {

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
