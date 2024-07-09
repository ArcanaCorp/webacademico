import React from 'react'

import './styles/learnhow.css'

function LearnHow() {

    return (
    
        <section className='__section __section_learn_how'>

            <div className='__content_section'>

                <h2 className='__ttitle'>¿Cómo aprenderas <span>en MitoCode?</span></h2>

                <div className='__content_wrap'>

                    <div className='__wrap'>
                        <div className='__wrap_img'>
                            <img src='https://mitocode.com/wp-content/uploads/2022/08/Aprendizaje.png' loading='lazy' alt='Cómo aprenderas con MitoCode' />
                        </div>                        
                        <div className='__wrap_txt'>
                            <p>Aprendizaje basado en proyectos desde cero</p>
                        </div>
                    </div>
                    
                    <div className='__wrap'>
                        <div className='__wrap_img'>
                            <img src='https://mitocode.com/wp-content/uploads/2022/08/Cursos-practicos.png' loading='lazy' alt='Cómo aprenderas con MitoCode' />
                        </div>                        
                        <div className='__wrap_txt'>
                            <p>Cursos 100% prácticos con casos laborales</p>
                        </div>
                    </div>

                    <div className='__wrap'>
                        <div className='__wrap_img'>
                            <img src='https://mitocode.com/wp-content/uploads/2022/08/Conecta-en-tiempo-real.png' loading='lazy' alt='Cómo aprenderas con MitoCode' />
                        </div>                        
                        <div className='__wrap_txt'>
                            <p>Conecta, interactúa y aprende con docentes en tiempo real.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    
    )

}

export default LearnHow