import styles from './TodoModal.module.css'
const TodoModal = (props) => {
    const {todo, user, onClose} = props

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <h2>{todo.title}</h2>
                <p>Id задачи: {todo.id}</p>
                <p>Статус: {todo.completed ? 'Выполнена' : 'Не выполнена'}</p>
                <p>Имя пользователь: {user?.name}</p>
                <p>User Id: {todo.userId}</p>
                <p>Почта: {user.email}</p>
                <button className={styles.button} onClick={onClose}>Закрыть</button>
            </div>
            
        </div>
    )
}

export default TodoModal