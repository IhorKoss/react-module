import {useEffect, useState} from "react";
import {axiosService} from "../../services/axiosServices";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        axiosService().then(({data})=>setLaunches(data.filter(value => value.launch_year !=='2020')))
    }, []);
    return (
        <div>
            {launches.map((launch)=><Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {Launches};