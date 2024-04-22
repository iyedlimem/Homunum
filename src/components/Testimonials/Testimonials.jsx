import React from 'react'
import "./testimonials.css"
import TestimonialsContainer from './TestimonialsContainer'

const Testimonials = () => {
    return (
        <section className="Testimonials">
            <div className="section-tag">
                Testimonials
            </div>
            <h2 className='about-title'>
                Plus d'un million de clients dans le monde.
            </h2>

            <TestimonialsContainer/>

        </section>
    )
}

export default Testimonials