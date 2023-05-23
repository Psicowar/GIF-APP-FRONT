import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HOME, LOGIN, REGISTER, SEARCH, UPLOAD } from './path'
import * as pages from '../pages/index'
import { Navbar } from '../components/Navbar/Navbar'
import { UploadThrowPc } from '../components/Upload/UploadThrowPc/UploadThrowPc'
import { UploadThrowUrl } from '../components/Upload/UploadThrowUrl/UploadThrowUrl'



export const MyRouter = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={HOME} element={<pages.HomePage />} />
                <Route path={SEARCH} element={<pages.SearchPage />} />
                <Route path={LOGIN} element={<pages.LoginPage />} />
                <Route path={REGISTER} element={<pages.RegisterPage />} />
                <Route path={UPLOAD} element={<pages.UploadPage />} />
                <Route path={`${UPLOAD}/URL`} element={<UploadThrowUrl />} />
                <Route path={`${UPLOAD}/PC`} element={<UploadThrowPc />} />


            </Routes>
        </Router>
    )
}
