import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResetCss } from './ResetCss'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <ResetCss />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
