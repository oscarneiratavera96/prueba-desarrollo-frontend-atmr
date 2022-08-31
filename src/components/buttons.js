//Importación a componentes de React-Bootstrap
import Button from "react-bootstrap/Button";

//Creación del componente Buttons
const Buttons = (Sawpi) => {
  //Desestructuración de lo traido del componente Sawpi
  const { count, setCount, setSearch } = Sawpi;

  //Función que disminuye el valor del contador del componente Sawpi y reinicia el valor de la variable de estado search del mismo componente mediante la función de la variable de estado.
  const handleClikPrevious = () => {
    if (count > 1) {
      setCount(count - 1);
      setSearch("");
    }
  };

  //Función que aumenta el valor del contador del componente Sawpi y reinicia el valor de la variable de estado search del mismo componente mediante la función de la variable de estado.
  const handleClikNext = () => {
    if (count < 9) {
      setCount(count + 1);
      setSearch("");
    }
  };
  return (
    <div className="button-star-wars">
      {/* Componente Button de React-Bootstrap que permitirá ir al usuario hacia una pagina anterior */}
      <Button variant="dark" size="lg" onClick={handleClikPrevious}>
        🔫PREVIOUS
      </Button>
      {/* Componente Button de React-Bootstrap que permitirá ir al usuario hacia una pagina siguiente */}
      <Button variant="warning" size="lg" onClick={handleClikNext}>
        🌌NEXT
      </Button>
    </div>
  );
};

export default Buttons;
