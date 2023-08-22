// Components
import MyComponent from "./MyComponent";

// Arquivo de Estilo

const FirstComponent = () => {
    // Esta funcao faz isso

    /*
        Comentario em Multi Line
    */ 
   
     return (
        <div>
            {/* Algum Comentario*/}
            <h1>Meu Primeiro Componente</h1>
            <p className="teste">Meu Texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;