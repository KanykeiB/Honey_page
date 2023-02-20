import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShoppingCartList } from '../../redux/actions/actions';
import { shoppingCartList, shoppingCartListTest } from '../../redux/selectors/selectors';
import shoppingCartOperations from '../../redux/thunk/thunk' 

const ShoppingCart = () => {
    <div>jo</div>
//     const list = useSelector(shoppingCartListTest)
//     console.log(list)
//     // const {}
//     const dispatch = useDispatch()
//     useEffect(()=>{
//         dispatch(getShoppingCartList(list))
//     },[])
//     return (
//         <div>
//             hi
//             list
//         </div>
//     );
};

export default ShoppingCart;