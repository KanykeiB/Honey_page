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
import authOpertions from '../../redux/thunk/thunk'
import { errorMessage, userData } from '../../redux/selectors/selectors';

//  added one more package for phone validation by country code
const SignupSchema = yup.object({
    email: yup.string()
        .email("Пожалуйста, введите корректный электронный адрес.")
        .required("Поле 'Email' обязательно к заполнению"),
    username: yup.string()
        .required("Пожалуйста введите свое имя"),
    phone_number: yup.string()
        .phone("KG", "Пожалуйста, введите корректный номер телефона.")
        .required("Поле 'Телефон' обязательно к заполнению"),
    password: yup.string()
        .required("Поле 'Пароль' обязательно к заполнению")
        .min(6, "Пароль должен содержать не менее 6-ти символов"),
    password_2: yup.string()
        .required('Подтвердите новый пароль')
        .oneOf([yup.ref('password')], 'Пароль и подтверждение пароля должны быть одинаковы!'),
     
});

const SignUp = () => {
    const dispatch = useDispatch()
    const router = useHistory()
    const errorMsg = useSelector(errorMessage)
   
    const { authRegisterUser, authLoginUser } = authOpertions
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
        setError,
        formState: { errors } }
        = useForm({
            resolver: yupResolver(SignupSchema)
        });
    const onSubmit = async (data) => {
        const transformData = Object.assign(data,{"profile_image": null})
        try{
            await dispatch(authRegisterUser(transformData))
            await dispatch(authLoginUser(transformData))
            router.push('/')
            console.log(data)
        } catch(err){
            console.log(err) 
        }
    };
    useEffect(() => {
        if (errorMsg) {
            setError("username", {
                type: 'custom',
                message: errorMsg
            })
            setTimeout(()=>{
                setError("username", {
                    type: 'custom',
                    message: ''
                })
            }, 2000)
        }
    }, [errorMsg])

   
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.containerLabel}>Регистрация</div>
                <div>
                    <input
                        className={styles.inputForm}
                        {...register("email")}
                        placeholder="Email" />
                    {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
                </div>
                <div>
                    <input
                        className={styles.inputForm}
                        {...register("username")}
                        placeholder="Ваше имя" />
                    {errors.username && <p style={{color:"red"}}> {errors.username.message}</p>}
                </div>
                <div>
                    <input
                        className={styles.inputForm}
                        {...register("phone_number")}
                        placeholder="Телефон" />
                    {errors.phone_number && <p style={{color:"red"}}>{errors.phone_number.message}</p>}
                </div>
                <div className={styles.passwordWrap}>
                    <input
                        className={styles.inputForm}
                        {...register("password")}
                        placeholder="Пароль"
                        type={visibility ? 'text' : 'password'}/>
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
                <div className={styles.passwordWrap}>
                    <input
                        className={styles.inputForm}
                        {...register("password_2")}
                        placeholder="Повторите Пароль"
                        type={visibility2 ? 'text' : 'password'} />
                    {errors.password_2 && <p style={{color:"red"}}>{errors.password_2.message}</p>}
                    <RemoveRedEyeSharpIcon
                        className={visibility2 ? styles.eyeNotVisible : styles.eyeVisible}
                        onClick={handleVisibility2}
                    />
                    <VisibilityOffSharpIcon
                        className={visibility2 ? styles.eyeVisible : styles.eyeNotVisible }
                        onClick={handleVisibility2}
                         />
                </div>
                <div className={styles.alreadyHaveAccount}> 
                    <p>Уже есть аккаунт? <Link to="/sign-in">Войти</Link></p>
                </div>
                <button
                type="submit"
                className={styles.submitButton}
                 >Зарегистрироваться </button>
                <div className={styles.cancelButton}>
                    <Link to="/">Отмена</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
