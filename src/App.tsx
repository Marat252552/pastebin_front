import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainPage from "./components/Pages/MainPage"
import ViewPage from "./components/Pages/ViewPage"



const App = () => {
  return <div style={{ fontFamily: 'Montserrat', height: '100vh' }}>
    <BrowserRouter>
      <Routes>
        <Route path='/view/:pin_id' element={<ViewPage />} />
        <Route path='/create' element={<MainPage />}/>
        <Route path='*' element={<Navigate to='create' />} />
      </Routes>
    </BrowserRouter>

  </div>
}

export default App