import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import "yup-phone-lite";
import styles from './styles.module.css';
import { Link, useHistory } from 'react-router-dom';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import { useDispatch, useSelector } from 'react-redux';
import authLoginOperations from '../../redux/thunk/thunk'
import { useSelect } from '@mui/base';
import { errorMessage } from '../../redux/selectors/selectors';

const SignupSchema = yup.object({
    username: yup.string()
        .required("Заполните поле"),
    password: yup.string()
        .required("Поле 'Пароль' обязательно к заполнению")
});

const SignIn = () => {
    const dispatch = useDispatch()
    const router = useHistory()
    const errorMsg = useSelector(errorMessage)
    const [visibility, setVisibility] = useState(false);
    const { authLoginUser } = authLoginOperations
    const handleVisibility = () => {
        setVisibility(!visibility)
    }
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors } }
        = useForm({
            resolver: yupResolver(SignupSchema)
        });
    const onSubmit = async (data) => {
        try {
            await dispatch(authLoginUser(data))
            router.push('/')
            console.log(data)
        } catch (e) {
            console.log(e)
        }

    };

    useEffect(() => {
        if (errorMsg) {
            setError("password", {
                type: 'custom',
                message: errorMsg
            })
            setTimeout(()=>{
                setError("password", {
                    type: 'custom',
                    message: ''
                })
            }, 2000)
        }
    }, [errorMsg])
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.containerLabel}>Вход </div>
                <div>
                    <input
                        className={styles.inputForm}
                        {...register("username")}
                        placeholder="Логин" />
                    {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                </div>

                <div className={styles.passwordWrap}>
                    <input
                        className={styles.inputForm}
                        {...register("password")}
                        placeholder="Пароль"
                        type={visibility ? 'text' : 'password'} />
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                    <RemoveRedEyeSharpIcon
                        className={visibility ? styles.eyeNotVisible : styles.eyeVisible}
                        onClick={handleVisibility}
                    // size="large"
                    // sx={{ fontSize: "25px" }}
                    />
                    <VisibilityOffSharpIcon
                        className={visibility ? styles.eyeVisible : styles.eyeNotVisible}
                        onClick={handleVisibility}
                    // size="large"
                    // sx={{ fontSize: "25px" }}
                    />

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