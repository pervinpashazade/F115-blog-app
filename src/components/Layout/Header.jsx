import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

function Header() {

    const isAuth = true

    return (
        <div className='py-3'>
            <Container>
                <Link
                    to="/admin"
                    className={`btn btn-primary ${isAuth ? "true" : "false"}`}
                >
                    Blog əlavə et
                </Link>
                {/* <Link
                 to="/login"
                 className='btn btn-outline-primary'
                >
                    Login
                </Link> */}
            </Container>
        </div>
    )
}

export default Header