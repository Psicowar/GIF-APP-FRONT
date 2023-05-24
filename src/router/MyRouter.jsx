import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ALLGIFS, CARSGIFS, DOGSGIFS, HOME, LOGIN, REGISTER, SPORTSGIFS, UPLOAD, USERGIFS } from './path'
import * as pages from '../pages/index'
import { Navbar } from '../components/Navbar/Navbar'
import { ErrorPage } from '../components/ErrorPage/ErrorPage'
import { PrivateRoute } from './PivateRoute/PrivateRoute'



export const MyRouter = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={HOME} element={<pages.HomePage />} >
                    <Route path={ALLGIFS} element={<pages.AllGifsPage />} />
                    <Route path={SPORTSGIFS} element={<pages.HomePage />} />
                    <Route path={CARSGIFS} element={<pages.HomePage />} />
                    <Route path={DOGSGIFS} element={<pages.HomePage />} />
                </Route>
                <Route path={LOGIN} element={<pages.LoginPage />} />
                <Route path={REGISTER} element={<pages.RegisterPage />} />

                <Route path={UPLOAD} element={
                    <PrivateRoute>
                        <pages.UploadPage />
                    </PrivateRoute>
                } />

                <Route path={USERGIFS} element={
                    <PrivateRoute>
                        <pages.UserGifsPage />
                    </PrivateRoute>
                } />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
