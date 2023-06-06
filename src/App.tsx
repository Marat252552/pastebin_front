import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainPage from "./components/Pages/MainPage"
import ViewPage from "./components/Pages/ViewPage"
import NotFoundPage from "./components/Pages/NotFoundPage"
import CompletedPinPage from "./components/Pages/CompletedPinPage"



const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/#/view/:pin_id' element={<ViewPage />} />
      <Route path='/#/create' element={<MainPage />} />
      <Route path='/#/notfound' element={<NotFoundPage />} />
      <Route path='/#/completed/:pin_id' element={<CompletedPinPage />} />
      <Route path='/#/*' element={<Navigate to='/#/create' />} />
    </Routes>
  </BrowserRouter>
}

export default App