import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    return <>
        <div className={style.footer}>
            <p className='foot'>© 2023 <span class='text-danger fs-5'>Mo.Ashraf</span>, All Right Reserved</p>
        </div>
    </>
}
