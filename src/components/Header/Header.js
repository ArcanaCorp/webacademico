import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconChevronDown, IconMenu, IconSearch, IconX } from '@tabler/icons-react'
import CurrencyFlag from 'react-currency-flags'

import './header.css'

function Header() {

    const [ isMenu, setIsMenu ] = useState(false);
    const [ toogleSubMenu, setToogleSubMenu ] = useState(false);

    return (
    
        <header className='__header' id='header'>

            <div className='__content'>
                    
                <div className='__row __row_A'>

                    <div className='__box'>

                        <div className='__bnn'>
                            <p>No postergues más tu futuro, aprendiendo las nuevas tendencias de TI</p>
                        </div>

                    </div>

                </div>

                <div className='__row __row_B'>

                    <div className='__box'>

                        <div className='__col __col_A'>

                            <div className='__content_col'>

                                <button className='__btn __btn_menu' onClick={() => setIsMenu(!isMenu)}><IconMenu/></button>
                                <div className='__logo'>
                                    <Link to={'/'}>
                                        <img src='https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/logo.png' alt='Logo de la empresa' />
                                    </Link>
                                </div>
                                <nav className='__nav_header'>
                                    <ul className='__list_nav_header'>
                                        <li className='__item'>
                                            <Link to={'#'}>
                                                <span>Cursos</span>
                                                <IconChevronDown size={18}/>
                                            </Link>
                                        </li>
                                        <li className='__item'>
                                            <Link to={'#'}>
                                                <span>Webinars</span>
                                            </Link>
                                        </li>
                                        <li className='__item'>
                                            <Link to={'#'}>
                                                <span>Promociones</span>
                                            </Link>
                                        </li>
                                        <li className='__item'>
                                            <Link to={'#'}>
                                                <span>Mis Certificados</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>

                            </div>

                        </div>

                        <div className='__col __col_B'>

                            <div className='__content_col'>

                                <div className='__search'>
                                    <input type='text' className='__entry __entry_search' placeholder='¿Qué quieres aprender?' aria-placeholder='¿Qué quieres aprender?' />
                                    <span className='__ico __ico_search'><IconSearch/></span>
                                </div>

                                <div className='__line_vertical'></div>

                                <div className='__currency'>
                                    <ul className='__list_currency'>
                                        <li className={`__item_currency __item_currency--active`}>
                                            <CurrencyFlag currency='PEN' />
                                            <span className='__txt_currency'>PEN</span>
                                        </li>
                                        <li className={`__item_currency`}>
                                            <CurrencyFlag currency='USD' />
                                            <span className='__txt_currency'>USD</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className='__line_vertical'></div>

                                <div className='__login'>
                                    <Link to={'#'}>Acceder</Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className={`__menu_elevated ${isMenu ? '__menu_elevated--active' : ''}`}>
                <div className='__overlay'>
                    <div className='__menu'>
                        <div className='__search_box'>
                            <div className='__search'>
                                <input type='text' className='__entry __entry_search' placeholder='¿Qué quieres aprender?' aria-placeholder='¿Qué quieres aprender?' />
                                <span className='__ico __ico_search'><IconSearch/></span>
                            </div>
                        </div>
                        <div className='__line'></div>
                        <ul className='__nav'>
                            <li className='__item_nav'>
                                <Link style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} onClick={() => setToogleSubMenu(!toogleSubMenu)}>
                                    <span>Cursos</span>
                                    <span><IconChevronDown size={18}/></span>
                                </Link>
                                <ul className={`__subnav ${toogleSubMenu ? '__subnav--active' : ''}`}>
                                    <p>Cursos Online</p>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>Backend</span>
                                        </Link>
                                    </li>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>Frontend</span>
                                        </Link>
                                    </li>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>Cloud e infraestructura</span>
                                        </Link>
                                    </li>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>DevOps</span>
                                        </Link>
                                    </li>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>Ver todos</span>
                                        </Link>
                                    </li>
                                    <p>Cursos Presenciales</p>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>Backend</span>
                                        </Link>
                                    </li>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>Cloud e infraestructura</span>
                                        </Link>
                                    </li>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>DevOps</span>
                                        </Link>
                                    </li>
                                    <li className='__item_subnav'>
                                        <Link to={'#'}>
                                            <span>Ver todos</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='__item_nav'>
                                <Link to={'#'}>
                                    <span>Webinars</span>
                                </Link>
                            </li>
                            <li className='__item_nav'>
                                <Link to={'#'}>
                                    <span>Promociones</span>
                                </Link>
                            </li>
                            <li className='__item_nav'>
                                <Link to={'#'}>
                                    <span>Mis certificados</span>
                                </Link>
                            </li>
                            <li className='__item_nav'>
                                <Link to={'#'}>
                                    <span>Acceder</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className='__btn __btn_close_menu' onClick={() => setIsMenu(!isMenu)}><IconX/></button>
                </div>
            </div>

        </header>
    
    )

}

export default Header