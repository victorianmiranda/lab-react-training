function Greeting(props) {
    function verLang(idioma, nome){
        if (idioma === "de"){
            return `Hallo, ${nome}`
        }
        else if (idioma === "en"){
            return `Hello, ${nome}`
            }
        else if (idioma === "fr"){
            return `Salut, ${nome}`
            }
        else if (idioma === "es"){
            return `Hola, ${nome}`
            }
        }
    
    
    return (
        <div>
           <p>{verLang(props.lang, props.children)}</p> 
        </div>
    )
}

export default Greeting;

