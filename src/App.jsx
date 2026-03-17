import { useState, useMemo } from "react"
import useTodos from "./hooks/useTodos"
import TodoItem from "./components/TodoItem"
import Filters from "./components/Filters"
import TodoModal from "./components/TodoModal"
import styles from './App.module.css';

function App() {
  const {
    todos,
    users,
    error,
    loading,
  } = useTodos()

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedTodo, setSelectedTodo] = useState(null)

  
  const filteredTask = useMemo(()=>{
    return todos.filter(todo => {
      const matchesSearch = todo.title.includes(search)
      let matchesStatus
      if (statusFilter === 'all') matchesStatus = true
      if (statusFilter === 'completed') matchesStatus = todo.completed
      if (statusFilter === 'active') matchesStatus = !todo.completed
      else null
      return matchesStatus && matchesSearch
    })
  }, [todos, search, statusFilter])


  const showDetail = (todo) => setSelectedTodo(todo)
  const selectedUser = selectedTodo ? users.find(user => user.id === selectedTodo.userId) : null


  if (loading) return <p>Загрузка...</p>
  if (error) return <p>{error.message}</p>



  return (
    <div className={styles.app}>
      <h1>Todo App</h1>
      <p>Задачи загружены: {todos.length}</p>
      <Filters 
        search={search}
        statusFilter={statusFilter}
        onSearchChange={e => setSearch(e.target.value)}
        onStatusChange={e => setStatusFilter(e.target.value)}
      />
      {loading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : filteredTask.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Ничего не найдено</p>
          <p>Попробуйте изменить поиск или фильтр</p>
        </div>
      ) : (
        <div className={styles.todo_list}>
          {filteredTask.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onClick={()=>showDetail(todo)}/>
        ))}
        </div>
      )} 
      {selectedTodo !== null ? (<TodoModal user={selectedUser} todo={selectedTodo} onClose={() => setSelectedTodo(null)}/>) : null}
    </div>
  )
}

export default App