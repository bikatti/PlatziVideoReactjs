import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({ textCategory, children }) => {
    return (
        <div className="categories">
            <h3 className="categories__title">{ textCategory }</h3>
            {children}
        </div>
    )
}

export default Categories
