import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles/community.css'

function Community() {
    
    return (
    
        <>

            <section className='__section __section_community'>

                <div className='__content_section'>

                    <div className='__flex'>
                        <h2 className='__ttitle'>Nuestra comunidad en medios</h2>

                        <p className='__pparragrahp'>Somos más de 80 000 coders que nos gusta el mundo de la programación, estamos presentes en todas las redes sociales</p>

                        <div className="__redes">
                            <Link className="__red" to="https://www.youtube.com/channel/UC9fAeSPVw7mAAbexCS7gPqw" target="_blank">
                                <span className="__icon u-of-contain">
                                    <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/redes/icon_1.png" alt="icon_1"/>
                                </span>
                            </Link>
                            <Link className="__red" to="https://es-la.facebook.com/mitocode/" target="_blank">
                                <span className="__icon u-of-contain">
                                    <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/redes/icon_2.png" alt="icon_2"/>
                                </span>
                            </Link>
                            <Link className="__red" to="https://twitter.com/mitocode" target="_blank">
                                <span className="__icon u-of-contain">
                                    <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/redes/icon_3.png" alt="icon_3"/>
                                </span>
                            </Link>
                            <Link className="__red" to="https://www.tiktok.com/@mitocode?lang=es" target="_blank">
                                <span className="__icon u-of-contain">
                                    <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/redes/icon_4.png" alt="icon_4"/>
                                </span>
                            </Link>
                            <Link className="__red" to="https://pe.linkedin.com/company/mitocode-network?trk=public_profile_topcard-current-company" target="_blank">
                                <span className="__icon u-of-contain">
                                    <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/redes/icon_5.png" alt="icon_5"/>
                                </span>
                            </Link>
                            <Link className="__red" to="https://www.instagram.com/mitocode/?hl=es" target="_blank">
                                <span className="__icon u-of-contain">
                                    <img src="https://mitocode.com/wp-content/themes/teampicol-mitocode-cb5b240fd7ed/img/redes/icon_6.png" alt="icon_6"/>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className='__imgs'>
                        <img width="1575" height="1096" src="https://mitocode.com/wp-content/uploads/2022/08/Medios.png" className="" alt="" decoding="async" srcSet="https://mitocode.com/wp-content/uploads/2022/08/Medios.png 1575w, https://mitocode.com/wp-content/uploads/2022/08/Medios-510x355.png 510w, https://mitocode.com/wp-content/uploads/2022/08/Medios-300x209.png 300w, https://mitocode.com/wp-content/uploads/2022/08/Medios-1024x713.png 1024w, https://mitocode.com/wp-content/uploads/2022/08/Medios-768x534.png 768w, https://mitocode.com/wp-content/uploads/2022/08/Medios-1536x1069.png 1536w" sizes="(max-width: 1575px) 100vw, 1575px"/>
                    </div>

                </div>

            </section>

            <section className='__section __section_comments'>

                <div className='__content_section'>

                    <h2 className='__ttitle'>Testimonios</h2>

                    <div className='__content_comments'>

                        <Swiper 
                            className='__comments' 
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
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='__comment'>
                                <div className='__comment_body'>
                                    <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia</p>
                                </div>
                                <div className='__comment_info'>
                                    <div className='__avatar'>
                                        <img src='https://mitocode.com/wp-content/uploads/2021/11/1643507698020-510x510.jpg' alt='Avatar de programador web' />
                                    </div>
                                    <div className='__info'>
                                        <h3>Jorde F. Pomaza Lautano</h3>
                                        <p>Desarrollador web</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>

                </div>

            </section>

        </>
    
    )

}

export default Community