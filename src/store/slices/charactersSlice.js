import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodeService} from "../../services/episodeService";
import {characterService} from "../../services/characterService";

const initialState = {
    episode: [],
    characters:[],
    episodeName:null
};
const getById=createAsyncThunk(
    'charactersSlice/getById',
    async  (id,thunkAPI)=>{
        try{
            const {data} = await episodeService.byId(id);
            return data
        }catch (e){
            const error = e.response.data;
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const getCharacters=createAsyncThunk(
    'charactersSlice/getCharacters',
    async  (id,thunkAPI)=>{
        try{
            const {data} = await characterService.byId(id);
            return data
        }catch (e){
            const error = e.response.data;
            console.log(error);
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers:{
        setEpName:(state)=>{
            state.episodeName=null
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getById.fulfilled, (state, action) => {
                const {characters,name} = action.payload;
                state.episode = characters
                state.episodeName = name
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload
            })
})

const {reducer: characterReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions,
    getById,
    getCharacters

}

export {
    charactersActions,
    characterReducer
}