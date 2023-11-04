
import styles from '../Main.module.css'
const CarItem = ({car}) => {
    
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
                <button className='btn'><a>Read More</a></button>  
            </div>
        </div>
    )
}
export default CarItem;