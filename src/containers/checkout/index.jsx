import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { shoppingCartList, userData } from '../../redux/selectors/selectors';
import styles from './styles.module.css'

const Checkout = () => {
    
    const cart = useSelector(shoppingCartList)
    const userDataTest = useSelector(userData)
    const name = userDataTest.username
    const phone = userDataTest.phone_number
    const [value, setValue] = useState({ fullname: name , phone_number: phone, address: '' })
    const totalPrice = cart.reduce((acc, c) => acc + c.quantity * c.price, 0);
    // delete unnesseccary data from cart array
    const orderTest = cart.map((item) => {
        const { name, category, description, weight, main_image, price, ...orderData } = item;
        // rename ID to item to match backend 
        orderData['item'] = orderData['id']
        delete orderData['id'];
        return orderData
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
    }
    const data = Object.assign(value, { order_item: orderTest})
    console.log(data, 'final data')

    return (
        <Container>
            {cart.count === 0 && <Link to="/shopping-cart" />}
            <h1>Оформление заказа</h1>
            <Form noValidate onSubmit={handleSubmit}>
                {/* Таблица с сожержимым корзины */}
                <Table bordered hover size="sm" className="mt-3">
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Кол-во</th>
                            <th>Сумма</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item =>
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}</td>
                            </tr>
                        )}
                        <tr>
                            <td colSpan={2}>Итого</td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tbody>
                </Table>
                {/* две формы с именем и телефоном можно удалить если брать данные из user */}
                <Form.Control
                    name="fullname"
                    value={value.fullname}
                    onChange={e => handleChange(e)}
                    // isValid={valid.fullname === true}
                    // isInvalid={valid.fullname === false}
                    className="mb-3"
                    placeholder="Введите имя"
                />
                <Form.Control
                    name="phone_number"
                    value={value.phone_number}
                    onChange={e => handleChange(e)}
                    // isValid={valid.phone_number === true}
                    // isInvalid={valid.phone_number === false}
                    className="mb-3"
                    placeholder="Введите номер телефона"
                />
                <Form.Control
                    name="address"
                    value={value.address}
                    onChange={e => handleChange(e)}
                    className="mb-3"
                    placeholder="Комментарий к заказу..."
                />
                <Button type="submit">Отправить</Button>
            </Form>
        </Container>
    )

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