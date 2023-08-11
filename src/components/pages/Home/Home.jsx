import React, { useEffect, useState } from 'react'
import { Container, Row, Spinner } from 'reactstrap'
import BlogCard from '../../Lib/Blog/BlogCard'
import axios from 'axios'
import { apiUrl } from '../../../config'
import Header from '../../Layout/Header'
import Loader from '../../Lib/Loader'

function Home() {

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        setIsLoading(true)
        axios.get(`${apiUrl}/blogs`).then(res => {
            setList(res.data)
            setIsLoading(false)
        })
    }

    return (
        <>
            <Header />
            <div className='home py-4'>
                {
                    !isLoading ?
                        <Container>
                            <Row>
                                {
                                    list.map(item => (
                                        <div
                                            key={item.id}
                                            className="col-md-12"
                                        >
                                            <BlogCard
                                                blog_id={item.id}
                                                title={item.title}
                                                description={item.description}
                                                img_url={item.img_url}
                                                user_id={item.user_id}
                                            />
                                        </div>
                                    ))
                                }
                            </Row>
                        </Container>
                        :
                        <Loader />
                }

            </div>
        </>
    )
}

export default Home