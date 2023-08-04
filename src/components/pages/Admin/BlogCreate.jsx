import React, { useEffect, useState } from 'react'
import {
    Container,
    Form,
    Input,
    Label,
    Row
} from 'reactstrap'
import Select from 'react-select'
import axios from 'axios'
import { apiUrl } from '../../../config'

function BlogCreate() {

    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get(`${apiUrl}/users`).then(res => setUserList(res.data))
    }, [])

    const handleCreate = e => {
        e.preventDefault()
        alert("form submit oldu")
    }

    return (
        <div className="my-5">
            <Container>
                <Row>
                    <div className="col-md-6">
                        <div>
                            <Form onSubmit={e => handleCreate(e)}>
                                <div class="form-group mb-4">
                                    <Label htmlFor='author'>Author</Label>
                                    <Select
                                        isClearable
                                        name='user_id'
                                        options={userList}
                                        getOptionValue={option => option.id}
                                        getOptionLabel={option => option.fullname}
                                    />
                                </div>
                                <div class="form-group mb-4">
                                    <Label htmlFor='title'>Title</Label>
                                    <Input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter title'
                                    />
                                </div>
                                <div class="form-group mb-4">
                                    <Label htmlFor='img_url'>Image url</Label>
                                    <Input
                                        type='text'
                                        id='img_url'
                                        placeholder='Enter image url'
                                    />
                                </div>
                                <div class="form-group mb-4">
                                    <Label htmlFor='description'>Description</Label>
                                    <Input
                                        type='textarea'
                                        id='description'
                                        placeholder='Enter blog description'
                                    />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default BlogCreate