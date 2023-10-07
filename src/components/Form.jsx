import {useState} from 'react'
import {collection, addDoc, getFirestore} from 'firebase/firestore'




const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)
    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("ingresar nombre") : alert( `Bienvenido, ${nombre} `)
        email === "" ? alert("ingresar email") : alert( `Registrado con el email, ${email} `)
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }

    const order = {
        nombre, email
    }

    const ordersCollection = collection(db, "orden")  

  return (
    <>
    <h1>FORMULARIO</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <button>Enviar</button>
    </form>

    <h3>Id de tu compra:{orderId}</h3>
    </>
  )
}

export default Form