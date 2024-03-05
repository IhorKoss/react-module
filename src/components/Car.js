import {useDispatch, useSelector} from "react-redux";
import {triggerActions} from "../store/slices/triggerSlice";
import {carService} from "../services/carService";
import {carsActions} from "../store/slices/carsSlice";

const Car = ({car}) => {
    const dispatch=useDispatch();
    const {id,brand,price,year}=car
    const deleting=async ()=>{
        await carService.deleteById(id);
        dispatch(triggerActions.triggerChange())
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carsActions.setCarForUpdate(car))}>UPDATE</button>
            <button onClick={deleting}>DELETE</button>
            <hr/>
        </div>
    );
};

export {Car};