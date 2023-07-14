import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Home } from './page/Home';
import Beer from './components/Beer/Beer';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/:id' element={<Beer />} />
      </Route>
      <Route path="*" element={<div>ERROR</div>} />
    </Routes>
  );
}

export default App;
