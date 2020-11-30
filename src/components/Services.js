import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'


import React, { Component } from 'react'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktail",
                info: "lorem ipsum text.lorem ipsum text.lorem ipsum text.lorem ipsum text."
            },
            {
                icon: <FaHiking/>,
                title: "Free Cocktail",
                info: "lorem ipsum text.lorem ipsum text.lorem ipsum text.lorem ipsum text."
            },{
                icon: <FaShuttleVan/>,
                title: "Free Cocktail",
                info: "lorem ipsum text.lorem ipsum text.lorem ipsum text.lorem ipsum text."
            },{
                icon: <FaBeer/>,
                title: "Free Cocktail",
                info: "lorem ipsum text.lorem ipsum text.lorem ipsum text.lorem ipsum text."
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title }</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        );
    }
}
