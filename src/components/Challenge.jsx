const Challenger = () => {

    const x = 15;
    const y = 30;
    const total = x + y;


    return (
        <div>
            <h2>Valor de X = {x}</h2>
            <h2>Valor de Y = {y}</h2>
            <button onClick={() => console.log({total})}>Clique aqui para somar!</button>
        </div>
    );
};

export default Challenger