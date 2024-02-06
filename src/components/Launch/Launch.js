const Launch = ({launch}) => {
    const {mission_name, launch_year, mission_patch_small} = launch;
    return (
        <div>
            <div>{mission_name}, year: {launch_year}</div>
        </div>
    );
};

export {Launch};