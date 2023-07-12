import React from "react";
import { Dropdown } from "react-bootstrap";

export const DropdownCategoria = () => {
  return (
    <Dropdown className="text-center mb-3">
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Celulares</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Notebooks</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ofertas</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
