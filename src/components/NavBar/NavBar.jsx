import React, { useState } from 'react'
import style from './Navbar.module.css'

export default function NavBar() {
    let [themBtn, setThemBtn] = useState(localStorage.getItem('mode'))
    let mod = localStorage.getItem('mode')
    document.body.classList.add(mod)
    function sunBtn() {
        document.body.classList.add('light')
        localStorage.setItem('mode', 'light')
        console.log('sun');
        setThemBtn("light")
    }

    function moonBtn() {
        document.body.classList.remove('light')
        console.log('moon');
        localStorage.setItem('mode', 'dark')
        setThemBtn("dark")
    }
    return <>
        <div className='d-flex justify-content-center ' >
            <div className='d-flex my-3 w-100 justify-content-between align-items-center'>
                <button className={style.menu + ' btn '} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className=" fa-solid fa-bars"></i></button>
                <div />
                <ul className={style.nav}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div> {themBtn !== "light" ? <button onClick={sunBtn} className={style.moon + ' btn'}><i className="fa-regular fa-moon"></i></button> :
                    <button onClick={moonBtn} className={style.moon + ' btn'}><i className="fa-regular fa-sun"></i></button>}
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className={style.menuNav + " modal-content"}>
                        <div className="modal-body">
                            <ul className='m-0 p-0'>
                                <li>
                                    <button type="button" className={style.closeBtn + " btn p-0"} data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#skills">Skills</a>
                                </li>
                                <li>
                                    <a href="#projects">Projects</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
