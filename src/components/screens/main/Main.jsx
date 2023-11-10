import { useState } from 'react';
import styles from './Main.module.css'
import CarItem from './car-item/CarItem.jsx';
import {cars as carsData} from './cars.data.js';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import CarSorts from './car-sorts/CarSorts.jsx';
import CarSearch from './car-search/CarSearch.jsx';
// const carsBD = require('./bd.js');
const Main = () => {

    const [cars, setCars] = useState(carsData);
    return (
        <div>
            <h1 className={styles.h1}>Cars catalog</h1>
            <div className={styles.interactive}>
                <CarSorts cars={cars} setCars={setCars}/>
                <CarSearch cars={cars} setCars={setCars}/>
                <CreateCarForm setCars={setCars}/>
            </div>
            <div className={styles.listItems}>
                {cars.length > 0 ? cars.map((car) => (
                    <CarItem key = {car.id} car = {car}/>
                )) : <p className={styles.notFound}>Cars not found</p>}  
            </div>
        </div>
    )
}
export default Main;