import styles from './Filters.module.css'
const Filters = (props) => {
    const {
        search,
        onSearchChange,
        statusFilter,
        onStatusChange
    } = props
    return (
        <div className={styles.container}>
            <label className={styles.label}>
                Поиск:
                <input 
                    className={styles.input}
                    type="text" 
                    value={search}
                    onChange={onSearchChange}
                />
            </label>
            <label className={styles.label}>
                Отфильтровать по статусу:
                <select 
                    className={styles.select}
                    name="status" 
                    value={statusFilter} 
                    onChange={onStatusChange}
                >
                    <option value={'all'}>Все</option>
                    <option value={'completed'}>Выполненные</option>
                    <option value={'active'}>Невыполненные</option>
                </select>
            </label>
            
        </div>
    )
}
export default Filters