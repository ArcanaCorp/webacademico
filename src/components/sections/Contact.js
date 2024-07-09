import React from 'react'

import './styles/contact.css'
import { Link } from 'react-router-dom'

function Contact() {
    
    return (

        <section className='__section __section_contact'>

            <div className='__content_section'>

                <h2 className='__ttitle'>No postergues más tu educación</h2>

                <Link to={'#'} className='__a_cta'>Comienza ahora</Link>

                <div className='__rows'>

                    <div className='__cl'>

                        <div className='__picture'>
                            <img width="366" height="286" src="https://mitocode.com/wp-content/uploads/2022/08/Despega__.png" className="" alt="" decoding="async" srcSet="https://mitocode.com/wp-content/uploads/2022/08/Despega__.png 366w, https://mitocode.com/wp-content/uploads/2022/08/Despega__-300x234.png 300w" sizes="(max-width: 366px) 100vw, 366px"/>
                        </div>

                    </div>

                    <div className='__cl __cl_B'>

                        <div className='__dta'>

                            <ul>
                                <li>
                                    <div className='__icon'>
                                        <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/whatsapp.png" alt="Habla con nosotros"/>
                                    </div>
                                    <div className='__txt'>
                                        <p className='__p1'>Habla con nosotros</p>
                                        <p className='__p2'>+51 987654321</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='__icon'>
                                        <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/write-us.png" alt="Habla con nosotros"/>
                                    </div>
                                    <div className='__txt'>
                                        <p className='__p1'>Escríbenos</p>
                                        <p className='__p2'>cursos@masinfo.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='__icon'>
                                        <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/question.png" alt="Habla con nosotros"/>
                                    </div>
                                    <div className='__txt'>
                                        <p className='__p1'>Preguntas frecuentes</p>
                                        <p className='__p2'>Te ayudamos en lo que necesites</p>
                                    </div>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    
    )

}

export default Contact