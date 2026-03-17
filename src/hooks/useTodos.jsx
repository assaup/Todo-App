import { useState, useEffect } from "react"

const useTodos = () => {
    const [todos, setTodos] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    
    useEffect(() => {
        let urls = [
            'https://jsonplaceholder.typicode.com/todos?_limit=15',
            'https://jsonplaceholder.typicode.com/users'
        ]
        let request = urls.map(url => fetch(url))

        Promise.all(request)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(([todos, users])=> {
                setTodos(todos)
                setUsers(users) 
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })

    }, [])
    return {todos, users, loading, error}
}

export default useTodos