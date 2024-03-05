import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../services/carService";
import {triggerActions} from "../store/slices/triggerSlice";
import {carsActions} from "../store/slices/carsSlice";

const CarForm = () => {
    const {register,reset,handleSubmit,formState:{isValid,errors},setValue} =useForm({
        mode:'all'
    })
    const dispatch=useDispatch();
    const {carToUpd}=useSelector(state => state.cars)
    const save= async (car)=>{
        await carService.create(car);
        dispatch(triggerActions.triggerChange());
        reset();
    }
    const update= async (car)=>{
        await carService.updateById(carToUpd.id,car)
        dispatch(triggerActions.triggerChange());
        dispatch(carsActions.setCarForUpdate({}));
        reset();
    }
    console.log(Object.keys(carToUpd).length !== 0);

    useEffect(() => {
        if(Object.keys(carToUpd).length !== 0){
            setValue('brand', carToUpd.brand, {shouldValidate:true})
            setValue('price', carToUpd.price, {shouldValidate:true})
            setValue('year', carToUpd.year, {shouldValidate:true})
        }
    }, [carToUpd]);
    return (
        <form onSubmit={handleSubmit(Object.keys(carToUpd).length !== 0?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message:"At least 1 and up to 20 characters"
                }
            })}/>
            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'min 0'},
                max: {value: 1_000_000, message: 'max 1 000 000'}
            })}/>
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'min 1990'},
                max: {value: new Date().getFullYear(), message: 'max current year'}
            })}/>
            <button disabled={!isValid}>{Object.keys(carToUpd).length !== 0?'UPDATE':'SAVE'}</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export {CarForm};