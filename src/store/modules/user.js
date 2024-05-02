import {createSlice} from "@reduxjs/toolkit";
import {request} from "../../utils";


const userStore = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token_key') || ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            //持久化存储
            localStorage.setItem('token_key', action.payload)
        }
    }

})

const {setToken} = userStore.actions

const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setToken(res.data.token))
    }
}

export {fetchLogin}

export {setToken}
export default userReducer