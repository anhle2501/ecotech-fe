
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const customerSlice = createSlice({
    name: 'customer',
    // it name is state on reducer below

    initialState: {
        customerList: [{}]
},
    reducers: {
    addCustomer: (state, action) => {
        state.customerList.push(action.payload)
    },
    deleteCustomer: (state, action) => {
        state.customerList.filter((s) => s.id != action.payload)
    },
    updateCustomer: (state, action) => {
        // state.customerList.map(
    },

    //state is initial state
    getCustomerPage: (state) => {
        let { NODE_ENV, API_NAME, HOST_NAME } = process.env;
        console.log(NODE_ENV)
        if (NODE_ENV === 'development') {
            console.log('123')
            state.customerList = [{
                // id: 1,
                // code: 'test code',
                // name: 'test name',
                // address: 'test address',
                // phone: 'test phone',
                // taxCode: 'test taxCode',
                // createBy: 1,
                // createAt: new Date().getTime(),
                // description: 'test description',
                // lastModifiedBy: 1,
                // lastModifiedDate: new Date().getTime(),

                id: "1",
                code: "KH00001",
                fullName: "Nhựt Anh",
                title: "Giám đốc",
                phone: "0374749933",
                email: "nhut.anh2501@gmail.com",
                address: "40/20 Lữ Gia",
                organization: "CTY A",
                createBy: "Nhựt Anh",
            }]
        } else if (NODE_ENV == 'test_api') {
            console.log(API_NAME, NODE_ENV)
            let authToken = "Bearer " + localStorage.getItem("accessToken")
            axios({
                method: 'get',
                url:  `${HOST_NAME}/${API_NAME}/customers`,
                headers: {
                    "Authorization" : authToken
                }
              }).then(function (response) {
                console.log('test')
                console.log(response)
              }).catch(err => console.log(err));
        }
    },
    getOne: (state, action, test) => {
        state.value += 1,
            state.string1 = action.payload,
            console.log(test)
    },

    add: (state, action) => {
        state.push(action.payload)
    },

    update: (state, action) => {
        state.push(action.payload)
    },

    delete: (state, action) => {
        state.value += action.value
    }

}
})



export const { getPage, getOne, getTwo, getCustomerPage } = customerSlice.actions
export const selectCustomer = state => state.customer
export default customerSlice.reducer