//Importación de hooks
import { useEffect, useState } from "react";

//Importación a componentes de React-Bootstrap
import Buttons from "./buttons";
import Loader from "./loader";
import TableData from "./TableData";

//Creación del componente Swapi
const Swapi = () => {
  //Variables de estado
  const [person, setPerson] = useState(null);
  const [search, setSearch] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [count, setCount] = useState(1);
  const [registers, setRegisters] = useState(1);

  //Efecto encargado de cargar la función loadInfo
  useEffect(() => {
    loadInfo();
  }, [count, search]);

  //función encargada de obtener los valores para realizar el filtro de búsqueda
  const handleChange = (e) => {
    setSearch(e.target.value);
    setIsSearch(true);
    loadInfo();
  };

  //Función encargada de obtener los valores de la api
  const loadInfo = async () => {
    try {
      const request = await fetch(`${process.env.REACT_APP_URL}?page=${count}`);
      const json = await request.json();
      const result = json.results;

      setRegisters(Math.ceil(json.count / 10));

      //Filtro de búsqueda
      if (isSearch && search.length > 0) {
        const filter = await result.filter(
          (datas) =>
            datas.hair_color === search ||
            datas.name === search ||
            datas.gender === search ||
            datas.mass === search ||
            datas.height === search
        );
        if (filter.length > 0) {
          setPerson(filter);
        }
      } else {
        //Ingresando los datos a la función de la variable de estado person
        setPerson(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {person !== null ? (
        // En caso de ser positivo se cargará lo siguiente
        <div>
          {/* Input de búsqueda */}
          <div className="search-input ">
            <input
              className="box-shadow-input"
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
          </div>

          {/* Se hace el llamado al componente TableData y se le envía person que contiene la información de los personajes, registers que contiene la cantidad de paginas que tiene la api y count que permite enviar el contador de la pagina en la que se encuentra */}
          <TableData
            person={person}
            registers={registers}
            count={count}
          ></TableData>

          {/* Se hace el llamado al componente Buttons y se le envía count y su función setSearch para establecer una suma o una resta a la variable de estado que controla la pagina en la que se encuentra, y se envía setSearch para poder restablecer los valores de búsqueda cuando se desplace hacia una pagina anterior o siguiente*/}
          <Buttons
            count={count}
            setCount={setCount}
            setSearch={setSearch}
          ></Buttons>
        </div>
      ) : (
        // En caso de ser negativo se cargará el Loader
        <Loader />
      )}
    </div>
  );
};

export default Swapi;
