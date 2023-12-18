
import { createSlice } from '@reduxjs/toolkit'

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
        let { NODE_ENV } = process.env;
        console.log(NODE_ENV)
        if (NODE_ENV === 'development') {
            console.log('123')
            state.customerList = [{
                id: 1,
                code: 'test code',
                name: 'test name',
                address: 'test address',
                phone: 'test phone',
                taxCode: 'test taxCode',
                createBy: 1,
                createAt: new Date().getTime(),
                description: 'test description',
                lastModifiedBy: 1,
                lastModifiedDate: new Date().getTime(),
            }]
        } else if (NODE_ENV == 'production') {

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