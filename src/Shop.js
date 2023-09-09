import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';



function Shop() {
    const dispatch = useDispatch();
    // const actions = bindActionCreaters(actionCreators.dispatch);
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)

    return (
        <div className='container text-center my-5'>
            <h3 className='my-4'>Deposit/Withdraw Money</h3>

            {/* <button className="btn btn-primary mx-3" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }} > <strong> - </strong> </button>
            Update Balance
            <button className="btn btn-primary mx-3" onClick={() => { dispatch(actionCreators.depositMoney(100)) }} > <strong> + </strong></button> */}

            <button className="btn btn-primary mx-3" onClick={() => { withdrawMoney(100) }} > <strong> - </strong> </button>
            Update Balance
            <button className="btn btn-primary mx-3" onClick={() => { depositMoney(100) }} > <strong> + </strong></button>



        </div>
    )
}

export default Shop;
