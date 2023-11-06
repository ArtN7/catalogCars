import { useState } from 'react';
import styles from './CreateCarFrom.module.css'
import  '../../../../styles/global.css'
import {cars} from '../cars.data.js'
import {defaultCars} from '../cars.data.js'
const clearData = {
    name: '',
    price: '',
    image: '',
};
const CreateCarForm = ({setCars}) => {
    const [data, setData] = useState(clearData);
    const createCar = (e) => {
        e.preventDefault();
        setCars(prev => [
            {
                id: prev.length + 1,
                ...data,
            }, 
            ...prev,
        ])
        cars.push({
            id: cars.length + 1,
            ...data,
        })
        setData(clearData);
    }
    const removeAddedCars = (e) => {
        e.preventDefault();
        setCars(() => [...defaultCars]);
        cars.splice(defaultCars.length, cars.length);
        console.log(cars);
        
    }

    return(
        <form className={styles.form}>
            <p>Create new car</p>
            <input placeholder="Name" onChange={e => setData(prev => ({...prev, name: e.target.value}))} value={data.name}/>
            <input placeholder="Price" onChange={e => setData(prev => ({...prev, price: e.target.value}))} value={data.price}/>
            <input placeholder="Image" onChange={e => setData(prev => ({...prev, image: e.target.value}))} value={data.image}/>
            
            <div className = {styles.btnGroup}>
                <button className='btn' onClick={e => createCar(e)}>Create</button>
                <button className='btn' onClick={e => removeAddedCars(e)}>Remove added cars</button>
            </div>
        </form>
    )
}
export default CreateCarForm;