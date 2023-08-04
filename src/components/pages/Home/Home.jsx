import React, { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import BlogCard from '../../Lib/Blog/BlogCard'
import axios from 'axios'
import { apiUrl } from '../../../config'
import Header from '../../Layout/Header'

function Home() {

    const [list, setList] = useState([])

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        axios.get(`${apiUrl}/blogs`).then(res => {
            setList(res.data)
        })
    }

    return (
        <>
            <Header />
            <div className='home py-4'>
                <Container>
                    <Row>
                        {
                            list.map(item => (
                                <div
                                    key={item.id}
                                    className="col-md-12"
                                >
                                    <BlogCard />
                                </div>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home