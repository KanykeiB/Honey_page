import React, {useState} from 'react';
import styles from './styles.module.css'

const WishlistButton = (props) => {
    const [isFavourite, setIsfavourite] = useState(false)
    const {
        onClick,
        className
    } = props
    const [like, setLike] = useState(false)
    const handleLikeButton = () => {
        setLike (!like)
    }

    const handleLike = () => {
        setIsfavourite(!isFavourite)
        onClick()
    }

    return (
        <div className={styles.wishlist_main_button}>

            <button onClick={handleLike} className={styles.wishlist_button_favourite}>
                { !isFavourite ?
                    <svg width="38" height="38" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g mask="url(#mask0_1002_649)">
                            <path d="M18 31.5494L15.825 29.5994C13.3 27.3244 11.2125 25.3619 9.5625 23.7119C7.9125 22.0619 6.6 20.5804 5.625 19.2674C4.65 17.9554 3.969 16.7494 3.582 15.6494C3.194 14.5494 3 13.4244 3 12.2744C3 9.92441 3.7875 7.96191 5.3625 6.38691C6.9375 4.81191 8.9 4.02441 11.25 4.02441C12.55 4.02441 13.7875 4.29941 14.9625 4.84941C16.1375 5.39941 17.15 6.17441 18 7.17441C18.85 6.17441 19.8625 5.39941 21.0375 4.84941C22.2125 4.29941 23.45 4.02441 24.75 4.02441C27.1 4.02441 29.0625 4.81191 30.6375 6.38691C32.2125 7.96191 33 9.92441 33 12.2744C33 13.4244 32.8065 14.5494 32.4195 15.6494C32.0315 16.7494 31.35 17.9554 30.375 19.2674C29.4 20.5804 28.0875 22.0619 26.4375 23.7119C24.7875 25.3619 22.7 27.3244 20.175 29.5994L18 31.5494ZM18 27.4994C20.4 25.3494 22.375 23.5054 23.925 21.9674C25.475 20.4304 26.7 19.0934 27.6 17.9564C28.5 16.8184 29.125 15.8054 29.475 14.9174C29.825 14.0304 30 13.1494 30 12.2744C30 10.7744 29.5 9.52441 28.5 8.52441C27.5 7.52441 26.25 7.02441 24.75 7.02441C23.575 7.02441 22.4875 7.35541 21.4875 8.01741C20.4875 8.68041 19.8 9.52441 19.425 10.5494H16.575C16.2 9.52441 15.5125 8.68041 14.5125 8.01741C13.5125 7.35541 12.425 7.02441 11.25 7.02441C9.75 7.02441 8.5 7.52441 7.5 8.52441C6.5 9.52441 6 10.7744 6 12.2744C6 13.1494 6.175 14.0304 6.525 14.9174C6.875 15.8054 7.5 16.8184 8.4 17.9564C9.3 19.0934 10.525 20.4304 12.075 21.9674C13.625 23.5054 15.6 25.3494 18 27.4994Z" fill="#202020"/>
                        </g>
                    </svg>
                    :
                    <div className={styles.favorite_div
                    }>
                        <svg width="38" height="38" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g mask="url(#mask0_1002_649)">
                                <path d="M18 31.5494L15.825 29.5994C13.3 27.3244 11.2125 25.3619 9.5625 23.7119C7.9125 22.0619 6.6 20.5804 5.625 19.2674C4.65 17.9554 3.969 16.7494 3.582 15.6494C3.194 14.5494 3 13.4244 3 12.2744C3 9.92441 3.7875 7.96191 5.3625 6.38691C6.9375 4.81191 8.9 4.02441 11.25 4.02441C12.55 4.02441 13.7875 4.29941 14.9625 4.84941C16.1375 5.39941 17.15 6.17441 18 7.17441C18.85 6.17441 19.8625 5.39941 21.0375 4.84941C22.2125 4.29941 23.45 4.02441 24.75 4.02441C27.1 4.02441 29.0625 4.81191 30.6375 6.38691C32.2125 7.96191 33 9.92441 33 12.2744C33 13.4244 32.8065 14.5494 32.4195 15.6494C32.0315 16.7494 31.35 17.9554 30.375 19.2674C29.4 20.5804 28.0875 22.0619 26.4375 23.7119C24.7875 25.3619 22.7 27.3244 20.175 29.5994L18 31.5494ZM18 27.4994C20.4 25.3494 22.375 23.5054 23.925 21.9674C25.475 20.4304 26.7 19.0934 27.6 17.9564C28.5 16.8184 29.125 15.8054 29.475 14.9174C29.825 14.0304 30 13.1494 30 12.2744C30 10.7744 29.5 9.52441 28.5 8.52441C27.5 7.52441 26.25 7.02441 24.75 7.02441C23.575 7.02441 22.4875 7.35541 21.4875 8.01741C20.4875 8.68041 19.8 9.52441 19.425 10.5494H16.575C16.2 9.52441 15.5125 8.68041 14.5125 8.01741C13.5125 7.35541 12.425 7.02441 11.25 7.02441C9.75 7.02441 8.5 7.52441 7.5 8.52441C6.5 9.52441 6 10.7744 6 12.2744C6 13.1494 6.175 14.0304 6.525 14.9174C6.875 15.8054 7.5 16.8184 8.4 17.9564C9.3 19.0934 10.525 20.4304 12.075 21.9674C13.625 23.5054 15.6 25.3494 18 27.4994Z" fill="#202020"/>
                            </g>
                        </svg>
                    </div>
                }
            </button>

        </div>

    )
};

export default WishlistButton;