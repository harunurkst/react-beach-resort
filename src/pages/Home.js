import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'
import Button from '../components/StyledHero'

export const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="Luxurius room" subtitle="luxurious room at only $200">
                <Link to="/rooms" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
        </>
    )
}
