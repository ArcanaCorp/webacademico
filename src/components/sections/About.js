import React from 'react'

import './styles/about.css'

function About() {
    
    return (
    
        <section className='__section __section_about'>

            <div className='__content_section'>

                <h2 className='__ttitle'>¿Quienes somos?</h2>

                <div className='__content_card'>

                    <div className='__card'>

                        <div className='__card_img'>
                            <img width="241" height="239" src="https://mitocode.com/wp-content/uploads/2022/08/1.png" className="" alt="" decoding="async" srcSet="https://mitocode.com/wp-content/uploads/2022/08/1.png 241w, https://mitocode.com/wp-content/uploads/2022/08/1-100x100.png 100w, https://mitocode.com/wp-content/uploads/2022/08/1-150x150.png 150w" sizes="(max-width: 241px) 100vw, 241px"/> 
                        </div>

                        <div className='__card_txt'>
                            <h4>El Inicio</h4>
                            <p>Nacimos con una cámara y una Laptop dictando cursos para Youtube.</p>
                        </div>

                    </div>
                    <div className='__card'>

                        <div className='__card_img'>
                            <img width="238" height="238" src="https://mitocode.com/wp-content/uploads/2022/08/nuestro-gran-equipo-1.png" className="" alt="" decoding="async" srcSet="https://mitocode.com/wp-content/uploads/2022/08/nuestro-gran-equipo-1.png 238w, https://mitocode.com/wp-content/uploads/2022/08/nuestro-gran-equipo-1-100x100.png 100w, https://mitocode.com/wp-content/uploads/2022/08/nuestro-gran-equipo-1-150x150.png 150w" sizes="(max-width: 238px) 100vw, 238px"/> 
                        </div>

                        <div className='__card_txt'>
                            <h4>Nuestro gran equipo</h4>
                            <p>Amamos la programación y generamos comunidad.</p>
                        </div>

                    </div>
                    <div className='__card'>

                        <div className='__card_img'>
                            <img width="238" height="238" src="https://mitocode.com/wp-content/uploads/2022/08/Aprendes-y-ayudamos.png" className="" alt="" decoding="async" srcSet="https://mitocode.com/wp-content/uploads/2022/08/Aprendes-y-ayudamos.png 238w, https://mitocode.com/wp-content/uploads/2022/08/Aprendes-y-ayudamos-100x100.png 100w, https://mitocode.com/wp-content/uploads/2022/08/Aprendes-y-ayudamos-150x150.png 150w" sizes="(max-width: 238px) 100vw, 238px"/>
                        </div>

                        <div className='__card_txt'>
                            <h4>Aprende y ayudanos</h4>
                            <p>Un porcentaje de las ventas va destinado a obras sociales.</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    
    )

}

export default About