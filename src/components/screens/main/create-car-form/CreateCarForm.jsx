
import styles from './CreateCarFrom.module.css'
import  '../../../../styles/global.css'
import {defaultCars} from '../cars.data.js';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const CreateCarForm = ({cars, setCars}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const createCar = (data) => {
        setCars(prev => [
            {
                id: prev.length + 1,
                ...data,
            },
            ...prev
        ])
        reset();
    }
    const resetCars = (e) => {
        e.preventDefault();
        setCars(() => [...defaultCars]);
    }
    const removeLastAdded = (e) => {
        e.preventDefault();
        let max = cars[0].id;
        cars.forEach(car => {if (max < car.id) max = car.id});
        setCars(prev => {
            if (prev.length > defaultCars.length){
                return cars.filter(car => car.id !== max);
            }    
            return prev;
        });
    }
    const returnLastCar = (e) => {
        e.preventDefault();
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <p>Create new car</p>
            <input type = "text" {...register('name', {required: "true" })} placeholder="Name" />
            {errors?.name?.message && (<p>Name is required</p>)}
            <input type ="number" {...register('price', {required: "true"})} placeholder="Price" />
            {errors?.price?.message && (<p>Price is required</p>)}
            <input type = "url"{...register('image', {required: "true"})} placeholder="Image" />
            {errors?.image?.message && (<p>Image is required</p>)}
            
            <div className = {styles.btnGroup}>
                <button className='btn'>Create</button>
                <button className='btn' onClick={e => resetCars(e)}>Reset</button>
                <button className='btn' onClick={e => removeLastAdded(e)}>Remove last added car</button>
                <button className='btn' onClick={e => returnLastCar(e)}>Return</button>
            </div>
        </form>
    )
}
export default CreateCarForm;