export default function Button({onClick, children, type, styles}) {
    const customStyles = type === 'primary' ?
        'primary'
        : 'border';
    return (
        <button
            className={`${customStyles} ${styles}`}
            onClick={onClick}
        >
        {children}
        </button>
    )
}
