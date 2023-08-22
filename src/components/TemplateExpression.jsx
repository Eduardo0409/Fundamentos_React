const TemplateExpression = () => {

    const name = "Eduardo";
    const data = {
        age: 25,
        job: "Develop",
    }

    return (
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Voce atua como: {data.job}</p>
            <p>{ 4 + 4 }</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpression;