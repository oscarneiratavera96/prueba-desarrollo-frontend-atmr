//Importación del compente ModalInfo
import ModalInfo from "./modal";

//Creación del componente TableData
const TableData = (Sawpi) => {
  //Desestructuración de lo traido del componente Sawpi
  const { person, registers, count } = Sawpi;

  return (
    <div className="table-responsive">
      <table className="table table-hover ">
        <thead>
          {/* Título de las características de los personajes */}
          <tr className="bg-warning letter-star ">
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Hair color</th>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
            <th scope="col">Acctions</th>
          </tr>
        </thead>
        <tbody>
          {/* person que proviene del componente Sawpi, trae dentro de un array todos los datos de los personajes de la pagina actual, con el metodo map se carga el nombre y cuatro datos de información de ellos  */}
          {person.map((data, index) => {
            return (
              <tr className="letter-star-contet" key={index}>
                <td>{data.name}</td>
                <td>{data.gender}</td>
                <td>{data.hair_color}</td>
                <td>{data.height}</td>
                <td>{data.mass}</td>
                <td>
                  {/*Se hace el llamado al componente ModalInfo y se le envia person que contiene personajes de la pagina actual e index que contiene su índice  */}
                  <ModalInfo index={index} person={person} />
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            {/* Se encarga de mostrar la paginación actual con la total */}
            <th className="letter-star ">
              Pages:{count}/{registers}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableData;
