import { Container, Form, Button, Table } from 'react-bootstrap'
import { useState, useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from './AppContext.js'
import { userCreate, guestCreate } from './API.js'
import { fetchBasket } from './API.js'
import { check as checkAuth } from './API.js'


// для форм имя, телефон
const isValid = (input) => {
    let pattern
    switch (input.name) {
        case 'name':
            return input.value.trim() !== ''
        case 'phone':
            pattern = /^[0-9]$/i
            return pattern.test(input.value.trim())
    }
}

const Checkout = () => {
    const { user, basket } = useContext(AppContext)

    const [fetching, setFetching] = useState(true)

    const [order, setOrder] = useState(null)

    const [value, setValue] = useState({name: '', phone: ''})
    const [valid, setValid] = useState({name: null, phone: null})

    useEffect(() => {
        fetchBasket()
            .then(
                data => basket.products = data.products
            )
            .finally(
                () => setFetching(false)
            )
        // проверка на авторизацию
        checkAuth()
            .then(data => {
                if (data) {
                    user.login(data)
                }
            })
            .catch(
                error => user.logout()
            )
    }, [])

    if (fetching) { 
        return <> </> 
        // вставить лоадер
    }

    // заказ оформлен
    if (order) { 
        return (
            <Container>
                <h1>Заказ оформлен</h1>
                <p>С вами скоро свяжуться</p>
            </Container>
        )
    }

    const handleChange = (event) => {
        setValue({...value, [event.target.name]: event.target.value})
        setValid({...valid, [event.target.name]: isValid(event.target)})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setValue({
            name: event.target.name.value.trim(),
            phone: event.target.phone.value.trim()
        })

        setValid({
            name: isValid(event.target.name),
            phone: isValid(event.target.phone)
        })

        if (valid.name && valid.phone) {
            let comment = event.target.comment.value.trim()
            comment = comment ? comment : null
            const userInfo = {...value, comment}
            const create = user.isAuth ? userCreate : guestCreate
            create(userInfo)
                .then(
                    data => {
                        setOrder(data)
                        basket.products = []
                    }
                )
        }
    }

    return (
        <Container>
            {basket.count === 0 && <Navigate to="/basket" replace={true} />}
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
                        {basket.products.map(item => 
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}</td>
                            </tr>
                        )}
                        <tr>
                            <td colSpan={2}>Итого</td>
                            <td>{basket.sum}</td>
                        </tr>
                    </tbody>
                </Table>


                {/* две формы с именем и телефоном можно удалить если брать данные из user */}
                <Form.Control
                    name="name"
                    value={value.name}
                    onChange={e => handleChange(e)}
                    isValid={valid.name === true}
                    isInvalid={valid.name === false}
                    className="mb-3"
                    placeholder="Введите имя"
                />
                <Form.Control
                    name="phone"
                    value={value.phone}
                    onChange={e => handleChange(e)}
                    isValid={valid.phone === true}
                    isInvalid={valid.phone === false}
                    className="mb-3"
                    placeholder="Введите номер телефона"
                />

                <Form.Control
                    name="comment"
                    className="mb-3"
                    placeholder="Комментарий к заказу..."
                />

                <Button type="submit">Отправить</Button>
            </Form>
        </Container>
    )
}

export default Checkout
