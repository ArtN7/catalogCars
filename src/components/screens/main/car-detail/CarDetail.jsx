import { useParams } from "react-router-dom";
import {carsInfo} from "../cars-info.data.js"
import {cars as allCars} from "../cars.data.js"
import { useState } from "react";
import styles from "./CarDetail.module.css"
import CarDetailDescription from "./CarDetailDescription.jsx";

const CarDeatil = () => {
    const { id } = useParams();
    for (let i = 0; i < allCars.length; i += 1){
        if (Number(id) === allCars[i].id) {
            return (
                <div className={styles.carDetail}>
                    <div className={styles.image} style={{
                        backgroundImage:`url(${allCars[i].image})`,
                        }}>
                        <a href = "../../catalogCars"><button className='btn btnBack'>Back</button></a>
                    </div>
                    <div className={styles.miniInfo}>
                        <h2>{allCars[i].name}</h2>    
                        <p>{new Intl.NumberFormat('en-US', {
                            style: 'currency', currency: 'USD',
                        }).format(allCars[i].price)}</p>   
                        <div>
                            <CarDetailDescription car={carsInfo[i]}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default CarDeatil;