import React from 'react'
import Img1 from '../../../assets/images/image-1.jpeg'
import { Link } from 'react-router-dom'

function BlogCard({
    title,
    description
}) {
    return (
        <div className='blog-card mb-4'>
            <div className="img-wrapper">
                <img src={Img1} alt='image' />
            </div>
            <div className="content">
                <h1>Cheerful Loving Couple Bakers Drinking Coffee</h1>
                <p>
                    It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving …
                </p>
                <Link
                    to="/blog/22"
                    className='btn btn-outline-warning'
                >
                    Continue Reading
                </Link>
            </div>
        </div>
    )
}

export default BlogCard