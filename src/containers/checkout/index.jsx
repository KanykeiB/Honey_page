import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useHistory } from 'react-router-dom';
import { shoppingCartList, userData } from '../../redux/selectors/selectors';
import styles from './styles.module.css'
import checkoutOperations from '../../redux/thunk/thunk'
import SignInPage from '../../pages/SignInPage';

const Checkout = () => {
    const cart = useSelector(shoppingCartList)
    const dispatch = useDispatch()
    const userDataTest = useSelector(userData)
    const router = useHistory()
    const { checkout } = checkoutOperations
    const userDataFromLocalStorage = localStorage.getItem('user_data')
    const dataObj = JSON.parse(userDataFromLocalStorage)
    console.log(dataObj, 'data')
    const name = dataObj?.username
    const phone = dataObj?.phone_number

    const [value, setValue] = useState({ fullname: name, phone_number: phone, address: '' })
    const totalPrice = cart.reduce((acc, c) => acc + c.quantity * c.price, 0);
    // delete unnesseccary data from cart array
    const orderTest = cart.map((item) => {
        return item.id
        // const { name, category, description, weight, main_image, price, ...orderData } = item;
        // // rename ID to item to match backend 
        // orderData['item'] = orderData['id']
        // delete orderData['id'];
        // return orderData
    })


    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        setValue({
            fullname: event.target.fullname.value.trim(),
            phone_number: event.target.phone_number.value.trim(),
            address: event.target.address.value.trim()
        })
        const data = Object.assign(value, { order_item: orderTest })
        console.log(data, 'final data')
        dispatch(checkout(data))
        router.push('/')
    }

    if (dataObj) {
        return (

            <Container>
                {cart.count === 0 && <Link to="/shopping-cart" />}
                <h1>Оформление заказа</h1>
                <Form noValidate onSubmit={handleSubmit}>

                    <Table bordered hover size="sm" className="mt-3">
                        {cart.map(item =>
                            <div className={styles.cardWrap} >
                                <div className={styles.itemName}>
                                    <p>{item.name}</p>
                                    <p>Вес: {item.weight} кг</p>
                                </div>
                                <div className={styles.itemQuantity}>{item.quantity} шт</div>
                                <div className={styles.itemPrice}> {item.price * item.quantity} сом </div>
                            </div>
                        )}
                        <div className={styles.priceWrap}>
                            <p>Итого:</p>
                            <p>{totalPrice} сом</p>
                        </div>
                    </Table>
                    {/* две формы с именем и телефоном можно удалить если брать данные из user */}
                    <Form.Control
                        name="fullname"
                        value={value.fullname}
                        onChange={e => handleChange(e)}
                        // isValid={valid.fullname === true}
                        // isInvalid={valid.fullname === false}
                        className={styles.checkoutForm}
                        placeholder="Введите имя"
                    />
                    <Form.Control
                        name="phone_number"
                        value={value.phone_number}
                        onChange={e => handleChange(e)}
                        // isValid={valid.phone_number === true}
                        // isInvalid={valid.phone_number === false}
                        className={styles.checkoutForm}
                        placeholder="Введите номер телефона"
                    />
                    <Form.Control
                        name="address"
                        value={value.address}
                        onChange={e => handleChange(e)}
                        className={styles.checkoutForm}
                        placeholder="Адрес"
                    />
                    <Button
                        className={styles.checkoutButton}
                        type="submit">Оформить заказ</Button>
                </Form>
            </Container>
        )
    }
    {
        return (
            <div className={styles.askForAuthText}>
                <p>Упс, кажется вы еще не авторизованы. </p>
                <p> 
                    <Link to='/sign-in' >Войдите</Link> или <Link to='/sign-up'>зарегистрируйтесь</Link>, чтобы оформить заказ 
                    </p>
            </div>
        )

    }

};

export default Checkout;


    // const [valid, setValid] = useState({fullname: null, phone_number: null})

    // const isValid = (input) => {
    //     let pattern
    //     switch (input.name) {
    //         case 'fullname':
    //             return input.value.trim() !== ''
    //         case 'phone_number':
    //             pattern = /^[0-9]$/i
    //             return pattern.test(input.value.trim())
    //     }
    // }

            // setValid({
        //    fullname: isValid(event.target.fullname),
        //    phone_number: isValid(event.target.phone_number)
        // })
        // console.log(valid, 'valid')

        // if (valid.name && valid.phone) {
        //     let comment = event.target.comment.value.trim()
        //     comment = comment ? comment : null
        //     const userInfo = {...value, comment}
        //     const create = user.isAuth ? userCreate : guestCreate
        //     create(userInfo)
        //         .then(
        //             data => {
        //                 setOrder(data)
        //                 basket.products = []
        //             }
        //         )
        // }