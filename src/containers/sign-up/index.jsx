import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import "yup-phone-lite";
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import { useDispatch, useSelector } from 'react-redux';
import authOpertions from '../../redux/thunk/thunk'
import { errorMessage } from '../../redux/selectors/selectors';

//  added one more package for phone validation by country code
const SignupSchema = yup.object({
    email: yup.string()
        .email("Пожалуйста, введите корректный электронный адрес.")
        .required("Поле 'Email' обязательно к заполнению"),
    username: yup.string()
        .required("Пожалуйста введите свое имя"),
    phoneNumber: yup.string()
        .phone("KG", "Пожалуйста, введите корректный номер телефона.")
        .required("Поле 'Телефон' обязательно к заполнению"),
    password: yup.string()
        .required("Поле 'Пароль' обязательно к заполнению")
        .min(6, "Пароль должен содержать не менее 6-ти символов"),
    passwordConfirm: yup.string()
        .required('Подтвердите новый пароль')
        .oneOf([yup.ref('password')], 'Пароль и подтверждение пароля должны быть одинаковы!')
});

const SignUp = () => {
    const dispatch = useDispatch()
    const errorMsg = useSelector(errorMessage)
    const { authRegisterUser } = authOpertions
    const [visibility, setVisibility] = useState(false);
    const handleVisibility = () => {
        setVisibility(!visibility)
    }
    const [visibility2, setVisibility2] = useState(false);
    const handleVisibility2 = () => {
        setVisibility2(!visibility2)
    }
    const {
        register,
        handleSubmit,
        formState: { errors } }
        = useForm({
            resolver: yupResolver(SignupSchema)
        });
    const onSubmit = async (data) => {
        await dispatch(authRegisterUser(data))
        console.log(errorMsg)
    };
    

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.containerLabel}>Регистрация</div>
                <div>
                    <input
                        {...register("email")}
                        placeholder="Email" />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <input
                        {...register("username")}
                        placeholder="Ваше имя" />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>
                <div>
                    <input
                        {...register("phoneNumber")}
                        placeholder="Телефон" />
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                </div>
                <div className={styles.passwordWrap}>
                    <input
                        {...register("password")}
                        placeholder="Пароль"
                        type="password" />
                    {errors.password && <p>{errors.password.message}</p>}
                    {/* <RemoveRedEyeSharpIcon
                        className={visibility ? styles.eyeNotVisible : styles.eyeVisible}
                        onClick={handleVisibility}
                    />
                    <VisibilityOffSharpIcon
                        className={visibility ? styles.eyeVisible : styles.eyeVisible} /> */}
                </div>
                <div className={styles.passwordWrap}>
                    <input
                        {...register("passwordConfirm")}
                        placeholder="Повторите Пароль"
                        type="password" />
                    {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
                    {/* <RemoveRedEyeSharpIcon
                        onClick={handleVisibility2}
                        className={styles.eyeVisible} />
                    <VisibilityOffSharpIcon
                        onClick={handleVisibility2}
                        className={styles.eyeVisible} /> */}
                </div>
                <div>
                    <p>Уже есть аккаунт? <Link to="/sign-in">Войти</Link></p>
                </div>
                <button type="submit">Зарегистрироваться </button>
                <div>
                    <Link to="/">Отмена</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
