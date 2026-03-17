import styles from './TodoItem.module.css'
const TodoItem = (props) => {
    const {
        todo,
        onClick
    } = props

    return (
        <div 
            className={`${styles.card} ${todo.completed ? styles.completed : styles.notCompleted}`}
            onClick={onClick}
        >
            <h2 className={styles.title}>{todo.title}</h2>
            <strong>{todo.completed ? 'Выполнена' : 'В работе'}</strong>
            <p>Задача пользователя: {todo.userId}</p>
        </div>
    )
}

export default TodoItem