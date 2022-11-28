import React, { useState, /* useMemo, */ useCallback } from 'react'
import Header from './Header';
// import User from './User';

//gereksiz render önlemek için component dışına alınabilir
// const userData = {
//     id: 1,
//     name: "Burak"
// }

const Counter = () => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState("Ahmet");



    //name değeri değişirse o zaman User componenti render edilecek
    // const userData = useMemo(() => {
    //     return {
    //         id: 1,
    //         name
    //     }
    // }, [name])

    console.log("Counter re-rendered");

    const increment = useCallback(() => {
        setCount((prev) => prev + 1) // setCount(0 + 1)
    }, [])


    return (
        <div>
            {/* <User user={userData} /> */}
            <Header increment={increment} />
            <hr />

            <h2>{count}</h2>
            <button onClick={increment}>Arttır</button>
            <button onClick={() => setName(name === "Ahmet" ? "Burak" : "Ahmet")}>Name Değiştir</button>
        </div>
    )
}

export default Counter