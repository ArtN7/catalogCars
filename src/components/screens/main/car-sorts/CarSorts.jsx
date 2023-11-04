
import styles from './CarSorts.module.css';
const CarSorts = ({cars, setCars}) => {

    const sortedToDesPrice = (e) => {
        e.preventDefault();
        cars.sort((car1, car2) => car1.price > car2.price ? 1 : -1);
        console.log(cars);
        setCars(() => [...cars]);
    }
    const sortedToAsPrice = (e) => {
        e.preventDefault();
        cars.sort((car1, car2) => car1.price > car2.price ? -1 : 1);
        setCars(() => [...cars]);
    }
    const sortedToAlphabetAZ = (e) => {
        e.preventDefault();
        cars.sort((car1, car2) => car1.name > car2.name ? 1 : -1);
        setCars(() => [...cars]);
    }
    const sortedToAlphabetZA = (e) => {
        e.preventDefault();
        cars.sort((car1, car2) => car1.name > car2.name ? -1 : 1);
        console.log(cars);
        setCars(() => [...cars]);
    }
    return (
        <div className={styles.sortedList}>
            <p>Sorting by</p>
            <button className={styles.btn} onClick={(e) => sortedToDesPrice(e)}>descending price</button>
            <button className={styles.btn} onClick={(e) => sortedToAsPrice(e)}>ascending price</button>
            <button className={styles.btn} onClick={(e) => sortedToAlphabetAZ(e)}>Alphabetically sorted(a-z)</button>
            <button className={styles.btn} onClick={(e) => sortedToAlphabetZA(e)}>Alphabetically sorted(z-a)</button>
        </div>
    )
}
export default CarSorts;