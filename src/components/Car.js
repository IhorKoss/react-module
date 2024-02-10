import {carService} from "../services/carService";
import {useEffect} from "react";

const Car = ({car,setCarForUpdate,setTrigger}) => {
    const {id,brand,price,year} =car
    const deleting=async ()=>{
        await carService.deleteById(car.id);
        setTrigger(prev=>!prev);
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>UPDATE</button>
            <button onClick={deleting}>DELETE</button>
        </div>
    );
};

export {Car};