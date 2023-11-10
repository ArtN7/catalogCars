
import styles from '../Main.module.css'
const CarItem = ({car}) => {
    const link = `catalogCars/car/${car.id}`;
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
                <a href={link} className = 'link'><button className='btn'>Read More</button></a>
            </div>
        </div>
    )
}
export default CarItem;