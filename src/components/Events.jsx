const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Posso tambem renderizar isso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>
                    Clique aqui tambem!!
                </button>
                <button 
                    onClick={() => {
                        if (true) {
                            console.log("Isso nao deveria exisitir!")
                        }
                    }}
                    >Clica aqui tambem, por favor
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events