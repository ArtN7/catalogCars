
import {useNavigate } from 'react-router-dom';
import styles from './CarItem.module.css'
const CarItem = ({car}) => {
    const nav = useNavigate();
    return (
        <div key={car.id} className={styles.listItem}>
            <div className={styles.image} style={{
                backgroundImage:`url(${car.image})`,
            }}/>
            <div className={styles.info}>
                <h2>{car.name}</h2>    
                <p>{new Intl.NumberFormat('en-US', {
                    style: 'currency', currency: 'USD',
                }).format(car.price)}</p>   
                <button onClick={()=> nav(`car/${car.id}`)}className='btn'>Read More</button>
            </div>
        </div>
    )
}
export default CarItem;