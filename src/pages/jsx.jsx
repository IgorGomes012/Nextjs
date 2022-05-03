export default function jsx(){
    const a = 3
    const b = 3

     function aprendendo(){
         return <h2>{'alo galera'}</h2>
     }

    return(
        <div>
            <h1>jsx e um conceito central</h1>
            {a * b}
            {aprendendo()}
        </div>
    )
}