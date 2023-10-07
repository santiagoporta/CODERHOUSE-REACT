import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const Collection = () => {
    const { categoryId } = useParams()
    const [products,setProducts] = useState([])
    console.log(products)

    useEffect(()=> {
        const db = getFirestore()

        const itemsCollection = collection (db, "Cervezas", `${categoryId}`)
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) =>
            ({
            ...doc.data(), id:doc.id
            }))
            setProducts(docs)
        })
    }, [])

  return (
    <div>
        <h1>Collection</h1>
        {
            products.map((p) => (
                <div key={p.title}>
                    <h4>producto: {p.title}</h4>
                    <h5>categoria: {p.category}</h5>
                    <h6>${p.precio}</h6>
                </div>
            ))
        }
    </div>
  )
}

export default Collection