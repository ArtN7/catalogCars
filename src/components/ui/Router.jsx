import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../screens/main/Main";
import CarDeatil from "../screens/main/car-detail/CarDetail";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/catalogCars' element={<Main />} />
                <Route path='/catalogCars/car/:id' element={<CarDeatil />} />
                <Route path='*' element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;