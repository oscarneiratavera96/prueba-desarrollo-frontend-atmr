//Importación de hooks
import React, { useState } from "react";

//Importación a componentes de React-Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//Creación del componente ModalInfo
const ModalInfo = (TableData) => {
  //Desestructuración de lo traido del componente TableData
  const { person, index } = TableData;

  //Variable de estado
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Componente de React-Bootstrap Button el cual el usuario dará clic para obtener toda la información de los personajes */}
      <Button variant="primary" onClick={handleShow}>
        🤖
      </Button>

      {/* Componente Modal el cual se mostrará cuando el usuario de clic en el componente Button de React-Bootstrap */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* Título el cual contendrá el nombre del personaje  */}
          <Modal.Title className="box-shadow-card">
            {person[index].name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* La tabla es la encargada de mostrar todos los datos del personaje */}
          <table className="table table-hover ">
            <thead>
              {/* Título de las características de los personajes */}
              <tr className="box-letter-input">
                <th>Birth Year</th>
                <th>Gender</th>
                <th>Hair color</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Skin color</th>
              </tr>
            </thead>
            <tbody>
              {/* person que proviene del componente TableData, trae dentro de un array todos los datos de los personajes de la pagina actual, mediante el index que también proviene del mismo componente, se obtiene el el personaje especificado por el usuario  */}
              {
                <tr className="letter-star-contet">
                  <td>{person[index].birth_year}</td>
                  <td>{person[index].gender}</td>
                  <td>{person[index].hair_color}</td>
                  <td>{person[index].height}</td>
                  <td>{person[index].mass}</td>
                  <td>{person[index].skin_color}</td>
                </tr>
              }
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          {/* Componente Button de React-Bootstrap que permitirá cerrar el modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInfo;
