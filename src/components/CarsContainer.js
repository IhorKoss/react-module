import {Cars} from "./Cars";
import {CarForm} from "./CarForm";

const CarsContainer = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsContainer};