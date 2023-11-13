import {useNavigate, useParams } from "react-router-dom";
import {cars as allCars} from "../cars.data.js"
import { useState } from "react";
import styles from "./CarDetail.module.css"
import CarDetailDescription from "./CarDetailDescription.jsx";

const CarDeatil = () => {
    const nav = useNavigate();
    const { id } = useParams();
    for (let i = 0; i < allCars.length; i += 1){
        if (Number(id) === allCars[i].id) {
            return (
                <div className={styles.carDetail}>
                    <div className={styles.image} alt={allCars[i].name} style={{
                        backgroundImage:`url(${allCars[i].image})`,
                        }}>
                        <button onClick={()=> nav('/catalogCars')} className='btn btnBack'>Back</button>
                    </div>
                    <div className={styles.miniInfo}>
                        <h2>{allCars[i].name}</h2>    
                        <p>{new Intl.NumberFormat('en-US', {
                            style: 'currency', currency: 'USD',
                        }).format(allCars[i].price)}</p>
                        <p>{allCars[i].MainDescription}</p>
                        <div>
                            <CarDetailDescription car={allCars[i]}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className = {styles.error}>"Not found or insufficient data"</div>               
    )
}
export default CarDeatil;