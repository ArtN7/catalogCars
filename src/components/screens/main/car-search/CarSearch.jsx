import { useState } from 'react';
import styles from './CarSearch.module.css';
import {cars as allCars} from '../cars.data.js'
const CarSearch = ({cars, setCars}) => {
    const [data, setData] = useState({
        carName: '',
    });
    
    const search = (e) => {
        e.preventDefault();
        reset(e);
        const filterCars = allCars.filter((car) => {
            const expression1 = car.name.split(' ')[0] === data.carName.split(' ')[0];
            if (car.name === data.carName) return car;
            else if (data.carName.split(' ').length === 1 && expression1) return car;
            else if (data.carName.split(' ')[1] === '' && expression1) return car;
            else if (data.carName.split(' ')[0] === car.name.split(' ')[1]) return car;
            return;
        })
        setCars(()=>[...filterCars])

    }
    const reset = (e) => {
        e.preventDefault();
        setCars(() => [...allCars]);
    }
    return (
        <div className={styles.container}>
            <input type="text" placeholder="What's name of car" onChange={e => setData(() => ({carName: e.target.value}))} value={data.carName}/>
            <div className={styles.btnContainer}>
                <button className='btn' onClick={(e) => search(e)}>Search</button>
                <button className='btn' onClick={(e) => reset(e)}>Reset</button>
            </div>
        </div>
    );
}
export default CarSearch;