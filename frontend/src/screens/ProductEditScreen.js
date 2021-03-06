import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {listProductDetails, updateProduct} from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({match, history}) => {

    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)
    
    const dispatch = useDispatch()
    
    const userDetails = useSelector(state => state.userDetails)
    const {userLogin: {userInfo}} = userDetails

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const {loading: loadingUpdate, error: errorUpdate, success:successUpdate} = productUpdate

    useEffect(()=>{

            if(successUpdate){
                dispatch({ type: PRODUCT_UPDATE_RESET })
                history.push('/admin/productlist')
            } else {
                if(!product.name || product._id !== productId){
                    dispatch(listProductDetails(productId))
                } else {
                    setName(product.name)
                    setPrice(product.price)
                    setImage(product.image)
                    setBrand(product.brand)
                    setCategory(product.category)
                    setCountInStock(product.countInStock)
                    setDescription(product.description)
                }
            }


    }, [dispatch, history, productId, product, successUpdate])

    const uploadFileHandler = async(e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }
            const {data} = await axios.post('/api/upload', formData, config)
            setImage(data)
            setUploading(false)
            
        }catch(error){
            console.log(error)
            setUploading(false)
        }
    } 

    const submitHandler = (e)=> {
        e.preventDefault()
     
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock
        }))
    }

    return (
        <>
            <Link to='/admin/productList' className='btn btn-light my-3'>Go Back</Link>

            <FormContainer>
            <h1>Edit Product</h1>
            {loadingUpdate && <Loader/>}
            {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
            {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : (
                <Form onSubmit={submitHandler}>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Price" value={price} onChange={(e)=> setPrice(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter Image URL" value={image} onChange={(e)=> setImage(e.target.value)}></Form.Control>
                    <Form.File id="image-file" label="Choose File" custom onChange={uploadFileHandler}></Form.File>
                    {uploading && <Loader/>}
                </Form.Group>

                <Form.Group controlId="brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Enter Brand Name" value={brand} onChange={(e)=> setBrand(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="countInStock">
                    <Form.Label>Count In Stock</Form.Label>
                    <Form.Control type="number" placeholder="Enter Count In Stock" value={countInStock} onChange={(e)=> setCountInStock(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category" value={category} onChange={(e)=> setCategory(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e)=> setDescription(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type="Submit" variant="primary">Update</Button>
            </Form>
            )}
            </FormContainer>
        </>
    )
}

export default ProductEditScreen
