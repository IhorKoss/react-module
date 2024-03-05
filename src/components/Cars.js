import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../services/carService";
import {carsActions} from "../store/slices/carsSlice";
import {Car} from "./Car";

const Cars = () => {
    const dispatch=useDispatch();
    const {cars}=useSelector(state => state.cars)
    const {trigger}=useSelector(state => state.trigger)
    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carsActions.setResponse(data)))
    }, [trigger]);
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};