import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HOME, LOGIN, REGISTER, SEARCH, UPLOAD } from './path'
import * as pages from '../pages/index'
import { Navbar } from '../components/Navbar/Navbar'



export const MyRouter = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={HOME} element={<pages.HomePage />} />
                <Route path={UPLOAD} element={<pages.UploadPage />} />
                <Route path={SEARCH} element={<pages.SearchPage />} />
                <Route path={LOGIN} element={<pages.LoginPage />} />
                <Route path={REGISTER} element={<pages.RegisterPage />} />
            </Routes>
        </Router>
    )
}
