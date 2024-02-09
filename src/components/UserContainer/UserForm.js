import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
    const {reset, register,handleSubmit} = useForm()

    const save=(user)=>{
        userService.create(user).then(({data})=> setUsers(prev=>[...prev,data]))
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'street'} {...register('address.street')}/>
            <input type="text" placeholder={'suite'} {...register('address.suite')}/>
            <input type="text" placeholder={'city'} {...register('address.city')}/>
            <input type="text" placeholder={'zipcode'} {...register('address.zipcode')}/>
            <input type="text" placeholder={'lat'} {...register('address.geo.lat')}/>
            <input type="text" placeholder={'lng'} {...register('address.geo.lng')}/>
            <button>SAVE</button>
        </form>
    );
};

export {UserForm};