import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/Landing.jsx'
import SignIn from '@/pages/SignIn';
import OrderTracking from '@/pages/OrderTracking';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<LandingPage />} />
          <Route path='login' element={<SignIn />} />
          <Route path='ordertracking' element={<OrderTracking />} />
        </Route>
        <Route path='/admin'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
