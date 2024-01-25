
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import UploadPhotos from './pages/UploadPhotos'
import ControlPanel from './pages/ControlPanel'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/controlpanel" element={<ControlPanel />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/wedding/:id/upload" element={<UploadPhotos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App