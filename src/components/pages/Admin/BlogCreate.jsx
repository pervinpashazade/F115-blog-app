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
import { errorMessages } from '../../../utils/renderMessage'
import { checkIsValidUrl } from '../../../utils/regex'

function BlogCreate() {

    const [userList, setUserList] = useState([])
    const [validationErrors, setValidationErrors] = useState({})

    useEffect(() => {
        axios.get(`${apiUrl}/users`).then(res => setUserList(res.data))
    }, [])

    const validate = (data) => {
        const errors = {
            user_id: "",
            title: "",
            img_url: "",
            description: ""
        };

        if (!data.user_id) {
            errors.user_id = errorMessages.required("Author")
        }
        if (!data.title) {
            errors.title = errorMessages.required("Title")
        }
        if (!data.img_url) {
            errors.img_url = errorMessages.required("Image url")
        } else if (!checkIsValidUrl(data.img_url)) {
            errors.img_url = errorMessages.invalidType("Image url", "URL")
        }
        if (!data.description) {
            errors.description = errorMessages.required("Description")
        }

        return errors
    }

    const handleCreate = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {}

        for (const [key, value] of formData.entries()) {
            data[key] = value
        }

        const errors = validate(data)
        setValidationErrors(errors)

        // console.log("errors", Object.values(errors).filter(string => string));

        if (Object.values(errors).filter(string => string).length) {
            return
        }

        axios.post(`${apiUrl}/blogs`, {
            title: data.title,
            description: data.description,
            img_url: data.img_url,
            user_id: Number(data.user_id)
        }).then(res => {
            console.log(res.data);
        })
    }

    return (
        <div className="my-5">
            <Container>
                <Row>
                    <div className="col-md-6">
                        <div>
                            <Form onSubmit={e => handleCreate(e)}>
                                <div className="form-group mb-4">
                                    <Label htmlFor='author'>Author</Label>
                                    <Select
                                        isClearable
                                        name='user_id'
                                        options={userList}
                                        getOptionValue={option => option.id}
                                        getOptionLabel={option => option.fullname}
                                    />
                                    {
                                        validationErrors.user_id &&
                                        <p className='mt-2 text-danger fw-bold'>{validationErrors.user_id}</p>
                                    }
                                </div>
                                <div className="form-group mb-4">
                                    <Label htmlFor='title'>Title</Label>
                                    <Input
                                        type='text'
                                        id='title'
                                        name='title'
                                        placeholder='Enter title'
                                        className={`${validationErrors.title ? "border border-danger" : ""}`}
                                    />
                                    {
                                        validationErrors.title &&
                                        <p className='mt-2 text-danger fw-bold'>{validationErrors.title}</p>
                                    }
                                </div>
                                <div className="form-group mb-4">
                                    <Label htmlFor='img_url'>Image url</Label>
                                    <Input
                                        type='text'
                                        id='img_url'
                                        name='img_url'
                                        placeholder='Enter image url'
                                    />
                                    {
                                        validationErrors.img_url &&
                                        <p className='mt-2 text-danger fw-bold'>{validationErrors.img_url}</p>
                                    }
                                </div>
                                <div className="form-group mb-4">
                                    <Label htmlFor='description'>Description</Label>
                                    <Input
                                        type='textarea'
                                        id='description'
                                        name='description'
                                        placeholder='Enter blog description'
                                        rows={7}
                                    />
                                    {
                                        validationErrors.description &&
                                        <p className='mt-2 text-danger fw-bold'>{validationErrors.description}</p>
                                    }
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default BlogCreate