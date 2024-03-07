import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services/episodeService";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null
};
const getAll=createAsyncThunk(
    'episodesSlice/getAll',
    async  (page,thunkAPI)=>{
        try{
            const {data} = await episodeService.getAll(page);
            return data
        }catch (e){
            const error = e.response.data;
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info:{prev,next},results} = action.payload;
                state.episodes = results
                state.prevPage = prev
                state.nextPage = next
            })
})

const {reducer: episodeReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll

}

export {
    episodesActions,
    episodeReducer
}