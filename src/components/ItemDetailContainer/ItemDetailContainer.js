import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getproductById } from '../../asyncMock'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId} = useParams()

    useEffect(() => {
        getproductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer' >
            <Item {...product} />
        </div>
    )
}

export default ItemDetailContainer