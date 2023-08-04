import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

function Header() {
    return (
        <div className='py-3'>
            <Container>
                <Link
                    to="/admin"
                    className='btn btn-primary'
                >
                    Blog əlavə
                </Link>
            </Container>
        </div>
    )
}

export default Header