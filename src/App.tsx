import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import NotFound from './pages/not-found'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>  {/* Common Layout rendering */}
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;