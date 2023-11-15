import React from 'react'
import style from './contact.module.css'
import Lottie from 'lottie-react'
import contactAnmi from '../../Animation/Animation - 1700007353460.json'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mrgwvqze");
    return <>
        <div className={style.contact + ' px-4'} id='contact'>
            <h1 className='mb-4' >Contact Us</h1>
            <p className='mb-2'>Contact us for more information and Get notified when I publish something new.</p>
            <div className='row align-items-center'>
                <div className='col-md-7'>
                    <div className=''>
                        <form onSubmit={handleSubmit} >
                            <div className={style.email + ' mb-3'}>
                                <label htmlFor="email" className='me-3 fs-5 d-block mb-4'>Email Address : </label>
                                <input type="text" placeholder='Enter Your Email ..' name='email' id='email' />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className={style.email + ' mb-3'}>
                                <label htmlFor="message" className='me-3 fs-5 d-block mb-4'>Message : </label>
                                <textarea required type="text" placeholder='Enter Your Message ..' name='message' id='message' />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div className={style.myBtn}>
                                <button type="submit" disabled={state.submitting} className='btn btn-lg btn-secondary my-4'>
                                    {state.submitting ? 'Submitting ..' : 'Submit'}
                                </button>
                                {state.succeeded ? <h2> ✔ Thanks for joining 👌</h2> : ''}
                            </div>

                        </form>



                    </div>
                </div>
                <div className='col-md-5'>
                    <div className=''>
                        <Lottie animationData={contactAnmi} />
                    </div>
                </div>
            </div>
        </div>
    </>
}
