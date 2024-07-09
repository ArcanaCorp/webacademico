import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles/courses.css'

function Courses() {

    return (
    
        <section className='__section __section_courses'>

            <div className='__content_section'>

                <h2 className='__ttitle'>Nuestros cursos</h2>

                <ul className='__slide_courses'>
                    <li className='__slide_course'>
                        <span>Backend</span>
                    </li>
                    <li className='__slide_course'>
                        <span>Frontend</span>
                    </li>
                    <li className='__slide_course'>
                        <span>DevOps</span>
                    </li>   
                    <li className='__slide_course'>
                        <span>Cloud</span>
                    </li>
                    <li className='__slide_course'>
                        <span>Móviles</span>
                    </li>
                </ul>

                <div className='__content_courses'>
                    <Swiper 
                        className='__courses' 
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            }
                        }} 
                        loop={true} 
                        spaceBetween={30} 
                        centeredSlides={true} 
                        autoplay={{delay: 3000, disableOnInteraction: false}} 
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='__course'>
                            <div className='__course_img'></div>                            
                            <div className='__course_txt'>
                                <h4>Name course</h4>
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            </div>
                            <div className='__course_cta'>
                                <Link to={'#'}>Ver detalles del curso</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                <div style={{width: '100%', textAlign: 'center'}}>
                    <Link to={'#'} className='__course_seeall'>Ver más cursos</Link>
                </div>

            </div>

        </section>
    
    )

}

export default Courses