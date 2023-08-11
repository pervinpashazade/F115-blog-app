import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Container } from 'reactstrap'
import { apiUrl } from '../../../config'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../Lib/Loader'
import { errorMessages } from '../../../utils/renderMessage'

function BlogItem() {

    const { id } = useParams()

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setIsLoading(true)
        axios.get(`${apiUrl}/blogs/${id}`)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        console.log("effectttt");
        if (data?.user_id) {
            axios.get(`${apiUrl}/users/${data.user_id}`)
                .then(res => {
                    console.log("user resp", res.data);
                    setData({ ...data, author_name: res.data.fullname })
                })
        }
    }, [data?.id])

    return (
        <div className="blog-item">
            <Container>
                {
                    isLoading ? <Loader />
                        :
                        !data ?
                            <div className='my-4'>
                                <Alert color='danger'>
                                    {errorMessages.notFound(`Blog with id: ${id}`)}
                                </Alert>
                                <Link
                                    to="/"
                                    className='my-4'
                                >
                                    Go to home page
                                </Link>
                            </div>
                            :
                            <div className='my-4'>
                                <div className="img-wrapper">
                                    <img src={data.img_url} alt='img' />
                                </div>
                                <h1 className='text-center my-4'>{data.title}</h1>
                                <div className='my-2'>
                                    <span className='text-muted'>{data.author_name}</span>
                                </div>
                                <p>{data.description}</p>
                            </div>
                }
            </Container>
        </div>
    )
}

export default BlogItem