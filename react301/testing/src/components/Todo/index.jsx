import { useState } from 'react';

const defaultItems = [
    {
        name: "item a",
    },
    {
        name: "item b",
    },
    {
        name: "item c",
    }
]


const Todo = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);
    const addTodo = () => {
        setItems(prev => [...prev, { name: text }])
        setText("");
    }

    return (
        <div>
            <label>
                Text
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button onClick={addTodo}>Add</button>
            <br /><br />
            {
                items.map(item => (
                    <div key={item.name}>{item.name}</div>
                ))
            }
        </div>
    )
}

export default Todo