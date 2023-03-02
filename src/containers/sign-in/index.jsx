import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import "yup-phone-lite";
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import { useDispatch } from 'react-redux';
import authLoginOperations from '../../redux/thunk/thunk'
// identifier can be deleted 
const SignupSchema = yup.object({
    identifier: yup.string()
        .required("Заполните поле"),
    phoneNumber: yup.string()
        .phone("KG", "Пожалуйста, введите корректный номер телефона.")
        .required("Поле 'Телефон' обязательно к заполнению"),
    password: yup.string()
        .required("Поле 'Пароль' обязательно к заполнению")
});

const SignIn = () => {
    const dispatch = useDispatch()
    const { authLoginUser } = authLoginOperations
    const {
        register,
        handleSubmit,
        formState: { errors } }
        = useForm({
            resolver: yupResolver(SignupSchema)
        });
    const onSubmit = async (data) => {
        await dispatch(authLoginUser(data))
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.containerLabel}>Вход </div>
                <div>
                    <input
                        className={styles.inputForm}
                        {...register("identifier")}
                        placeholder="Логин" />
                    {errors.identifier && <p>{errors.identifier.message}</p>}
                </div>
                <div>
                    <input
                        className={styles.inputForm}
                        {...register("phoneNumber")}
                        placeholder="Телефон" />
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                </div>
                <div className={styles.passwordWrap}>
                    <input
                        className={styles.inputForm}
                        {...register("password")}
                        placeholder="Пароль"
                        type="password" />
                    {errors.password && <p>{errors.password.message}</p>}
                    {/* <RemoveRedEyeSharpIcon className={styles.eyeVisible}/>
                    <VisibilityOffSharpIcon className={styles.eyeVisible}/> */}

                </div>
                <button
                 type="submit"
                 className={styles.submitButton}
                 >Войти</button>
                <div className={styles.cancelButton}>
                    <Link to="/">Отмена</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;