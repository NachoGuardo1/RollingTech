import React, { useContext, useEffect, useState } from 'react'
import { Carritocontext } from '../hooks/CarritoContext'
import productos from '../data/data';
import {Card} from 'react-bootstrap'
import { ModalCarrito } from './ModalCarrito';
import ModalInfo from './ModalInfoProd';

export const Productos = () => {
    const { agregarProductos, carrito } =useContext(Carritocontext);
    const [mostrarModal, setMostrarModal] =useState(true)

    useEffect(()=>{
      if(carrito.length > 0){
        setMostrarModal(true);
      }else{
        setMostrarModal(false)
      }
    })

  return (

      <div>
        <div className='sticky-top text-end mt-3 me-3'>
    {mostrarModal && (
  <ModalCarrito />
      )}
    </div>
        <h2 className='text-center'>Productos</h2>
    <div className='row d-flex gap-2 justify-content-center'>
            {productos.map((item)=>(
            <Card style={{ width: '14rem' }} key={item.id}>
            <Card.Img variant="top" src="https://images.fravega.com/f500/c93187b609899f51b11399d511cc117a.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>{item.nombre}</Card.Title>
              <div className='row'>
              <div className='bg-danger  text-light border border rounded'>${item.precio}</div>
              <div className='d-flex gap-2 justify-content-center'>
              <button className='btn btn-success' onClick={()=>agregarProductos(item)}>
              <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360'
    width="30"
    height="30"
    className="d-inline-block align-top">       
    </img>
              </button>
              <ModalInfo/>
              </div>
              </div>
            </Card.Body>
            </Card>))}
    </div>
    
      </div>
    
  )
}
