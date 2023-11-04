import { useState } from 'react';
import styles from './CreateCarFrom.module.css'
import  '../../../../styles/global.css'
const CreateCarForm = ({setCars}) => {
    const [data, setData] = useState({
        name: "What's name?",
        price: '1',
        image: '#',
    })
    const createCar = (e) => {
        e.preventDefault();
        setCars(prev => [{
            id: prev.length + 1, ...data
        }, ...prev])
    }
    return(
        <form className={styles.form}>
            <p>Create new car</p>
            <input placeholder="Name" onChange={e => setData(prev => ({...prev, name: e.target.value}))}/>
            <input placeholder="Price" onChange={e => setData(prev => ({...prev, price: e.target.value}))}/>
            <input placeholder="Image" onChange={e => setData(prev => ({...prev, image: e.target.value}))}/>
            <button className='btn' onClick={e => createCar(e)}>Create</button>
        </form>
    )
}
export default CreateCarForm;