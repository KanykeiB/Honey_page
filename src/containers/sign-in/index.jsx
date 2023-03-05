import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import "yup-phone-lite";
import styles from './styles.module.css';
import { Link, useHistory } from 'react-router-dom';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import { useDispatch } from 'react-redux';
import authLoginOperations from '../../redux/thunk/thunk'
import { t } from 'i18next';
// identifier can be deleted 
const SignupSchema = yup.object({
    username: yup.string()
        .required("Заполните поле"),
    // phoneNumber: yup.string()
    //     .phone("KG", "Пожалуйста, введите корректный номер телефона.")
    //     .required("Поле 'Телефон' обязательно к заполнению"),
    password: yup.string()
        .required("Поле 'Пароль' обязательно к заполнению")
});

const SignIn = () => {
    const dispatch = useDispatch()
    const router = useHistory()
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
        router.push('/')
        console.log(data)
    };
    const [visibility, setVisibility] = useState(false);
    const handleVisibility = () => {
        setVisibility(!visibility)
    }
    

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.containerLabel}>{t("sign-in")} </div>
                <div>
                    <input
                        className={styles.inputForm}
                        {...register("username")}
                        placeholder="Логин" />
                    {errors.username && <p style={{color:"red"}}>{errors.username.message}</p>}
                </div>
            
                <div className={styles.passwordWrap}>
                    <input
                        className={styles.inputForm}
                        {...register("password")}
                        placeholder="Пароль"
                        type={visibility ? 'text' : 'password'} />
                    {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                    <RemoveRedEyeSharpIcon
                        className={visibility ? styles.eyeNotVisible : styles.eyeVisible}
                        onClick={handleVisibility}
                    />
                    <VisibilityOffSharpIcon
                        className={visibility ? styles.eyeVisible : styles.eyeNotVisible }
                        onClick={handleVisibility}
                         />

                </div>
                <button
                 type="submit"
                 className={styles.submitButton}
                 >{t("sign-in")}</button>
                <div className={styles.cancelButton}>
                    <Link to="/">{t("cancel")}</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;