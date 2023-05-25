import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ALLGIFS, CARSGIFS, DOGSGIFS, HOME, LOGIN, REGISTER, SPORTSGIFS, UPLOAD, USERGIFS } from './path'
import { AllGifsPage, HomePage, LoginPage, RegisterPage, UploadPage, UserGifsPage } from '../pages/index'
import { CarsGifs, DogsGifs, ErrorPage, Navbar, SportsGifs } from '../components/index'
import { PrivateRoute } from './PivateRoute/PrivateRoute'



export const MyRouter = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={HOME} element={<HomePage />} >
                    <Route path={ALLGIFS} element={<AllGifsPage />} />
                    <Route path={SPORTSGIFS} element={<SportsGifs />} />
                    <Route path={CARSGIFS} element={<CarsGifs />} />
                    <Route path={DOGSGIFS} element={<DogsGifs />} />
                </Route>
                <Route path={LOGIN} element={<LoginPage />} />
                <Route path={REGISTER} element={<RegisterPage />} />

                <Route path={UPLOAD} element={
                    <PrivateRoute>
                        <UploadPage />
                    </PrivateRoute>
                } />

                <Route path={USERGIFS} element={
                    <PrivateRoute>
                        <UserGifsPage />
                    </PrivateRoute>
                } />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
