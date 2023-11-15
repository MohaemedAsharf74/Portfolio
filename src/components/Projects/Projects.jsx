import React from 'react'
import style from './Projects.module.css'
import commerce from '../../Images/Projects/e-commerce.png'
import notes from '../../Images/Projects/Notes.png'
import Noxe from '../../Images/Projects/noxe.png'
import first from '../../Images/Projects/first.png'
import crud from '../../Images/Projects/crud.png'
import yummy from '../../Images/Projects/yummy.png'
import templet1 from '../../Images/Projects/templet1.png'
import templet2 from '../../Images/Projects/templet2.png'
import templet3 from '../../Images/Projects/templet3.png'

export default function Projects() {
    return <>
        <div className={style.projects + ' px-4 mb-5'} id='projects'>
            <h1 className='mb-4' >Projects</h1>
            <div className="row d-flex justify-content-center">
                <div className='col-lg-3'>
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className={style.navbtn + " nav-link active"} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All Projects</button>
                        <button className={style.navbtn + " nav-link"} id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">React Js</button>
                        <button className={style.navbtn + " nav-link"} id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">JavaScript</button>
                        <button className={style.navbtn + " nav-link"} id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Html & Css</button>
                    </div>
                </div>
                <div className='col-md-9'>
                    <div className="tab-content text-white" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                            <div className='row px-3 g-4'>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={first} alt="" />
                                        <div className='my-1'>
                                            <h3>First react app</h3>
                                            <p>The First app is a comprehensive design solution using Reactjs react-router-dom</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Start-FrameWork" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/Start-FrameWork/" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={Noxe} alt="" />
                                        <div className='my-1'>
                                            <h3>Noxe-Movie</h3>
                                            <p>The Noxe is a comprehensive Movie solution using Reactjs Redux-toolkit</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Noxe-Movie" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/Noxe-Movie/#/login" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={templet3} alt="" />
                                        <div className='my-1'>
                                            <h3>Templet3</h3>
                                            <p>The Templet3 is a comprehensive design solution using html css</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Templet3" target='blank'>
                                                <i className="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={commerce} alt="" />
                                        <div className='my-1'>
                                            <h3 >Fresh Cart</h3>
                                            <p>Fresh cart is a comprehensive e-commerce solution using Reactjs formik yup context</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/E-commerce" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/E-commerce/" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={templet2} alt="" />
                                        <div className='my-1'>
                                            <h3>Templet2</h3>
                                            <p>The Templet2 is a comprehensive design solution using html css</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Templet2" target='blank'>
                                                <i className="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={crud} alt="" />
                                        <div className='my-1'>
                                            <h3>CRUDS</h3>
                                            <p>The CRUDS is a comprehensive crud system solution using html css bootstrap JavaScript</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/CRUDS" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/CRUDS/" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={yummy} alt="" />
                                        <div className='my-1'>
                                            <h3>Yummy</h3>
                                            <p>The Yummy is a comprehensive recipes system solution using html css bootstrap JavaScript</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Yummy-Js" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/Yummy-Js/" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={notes} alt="" />
                                        <div className='my-1'>
                                            <h3 >Notes</h3>
                                            <p>The Notes is a comprehensive Notes App solution using Reactjs formik</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Notes-React-App" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/Notes-React-App/#/login" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={templet1} alt="" />
                                        <div className='my-1'>
                                            <h3>Templet1</h3>
                                            <p>The Templet1 is a comprehensive design solution using html css</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Templet1" target='blank'>
                                                <i className="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            <div className='row px-3 g-4'>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={commerce} alt="" />
                                        <div className='my-1'>
                                            <h3 >Fresh Cart</h3>
                                            <p>Fresh cart is a comprehensive e-commerce solution using Reactjs formik yup context</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/E-commerce" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/E-commerce/" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={notes} alt="" />
                                        <div className='my-1'>
                                            <h3 >Notes</h3>
                                            <p>The Notes is a comprehensive Notes App solution using Reactjs formik</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Notes-React-App" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/Notes-React-App/#/login" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={Noxe} alt="" />
                                        <div className='my-1'>
                                            <h3>Noxe-Movie</h3>
                                            <p>The Noxe is a comprehensive Movie solution using Reactjs Redux-toolkit</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Noxe-Movie" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/Noxe-Movie/#/login" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={first} alt="" />
                                        <div className='my-1'>
                                            <h3>First react app</h3>
                                            <p>The First app is a comprehensive design solution using Reactjs react-router-dom</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Start-FrameWork" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/Start-FrameWork/" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                            <div className='row px-3 g-4'>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={crud} alt="" />
                                        <div className='my-1'>
                                            <h3>CRUDS</h3>
                                            <p>The CRUDS is a comprehensive crud system solution using html css bootstrap JavaScript</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/CRUDS" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/CRUDS/" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={yummy} alt="" />
                                        <div className='my-1'>
                                            <h3>Yummy</h3>
                                            <p>The Yummy is a comprehensive recipes system solution using html css bootstrap JavaScript</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Yummy-Js" target='blank'>
                                                <i class="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://mohaemedasharf74.github.io/Yummy-Js/" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                            <div className='row px-3 g-4'>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={templet1} alt="" />
                                        <div className='my-1'>
                                            <h3>Templet1</h3>
                                            <p>The Templet1 is a comprehensive design solution using html css</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Templet1" target='blank'>
                                                <i className="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={templet2} alt="" />
                                        <div className='my-1'>
                                            <h3>Templet2</h3>
                                            <p>The Templet2 is a comprehensive design solution using html css</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Templet2" target='blank'>
                                                <i className="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className={style.proj}>
                                        <img className=' w-100 ' src={templet3} alt="" />
                                        <div className='my-1'>
                                            <h3>Templet3</h3>
                                            <p>The Templet3 is a comprehensive design solution using html css</p>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74/Templet3" target='blank'>
                                                <i className="fa-brands fa-github text-white fs-4"></i>
                                            </a>
                                            <a className='text-primary' href="https://github.com/MohaemedAsharf74" target='blank'>
                                                Demo
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
