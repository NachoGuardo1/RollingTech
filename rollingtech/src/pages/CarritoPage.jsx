import React, { useContext } from "react";
import { Carritocontext } from "../hooks/CarritoContext";

export const CarritoPage = () => {
  const { carrito, total } = useContext(Carritocontext);
  return (
    <div>
      <h3>Listado de productos en carrito:</h3>
      <table className="table table-dark table-sm striped bordered hover">
        <tbody>
          {carrito.map((item) => (
            <tr>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
            </tr>
          ))}
          <div className=" d-flex justify-content-end bg-primary">
            Total de su compra:${total.toFixed(2)}
          </div>
        </tbody>
      </table>
      <form className="row col-6">
        <h5 className="my-3">Datos del comprador</h5>
        <label htmlFor="">Nombre completo</label>
        <input type="text" className="my-1 form-control" />
        <label htmlFor="">Numero de contacto</label>
        <input type="number" className="my-1 form-control" />
        <label htmlFor="">Direccion de entrega</label>
        <input type="text" className="my-1 form-control" />
        <h5 className="my-3">Datos de Pago</h5>
        <label htmlFor="">Forma de pago</label>
        <input type="" className="my-1 form-control" />
        <label htmlFor="">
          Ingrese nombre completo que figura en la tarjeta
        </label>
        <input type="number" className="my-1 form-control" />
        <label htmlFor="">
          Ingrese numeros que figuran al frente de su tarjeta
        </label>
        <input type="number" className="my-1 form-control" />
        <label htmlFor="">
          Ingrese codigo de seguridad de 3 digitos de su tarjeta
        </label>
        <input type="number" className="my-1 form-control" />
        <button className="btn btn-success my-3">Finalizar compra</button>
      </form>
    </div>
  );
};
