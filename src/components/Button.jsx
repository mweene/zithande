export default function Button({onClick, children, type, styles}) {
    const customStyles = type === 'primary' ?
        'primary'
        : 'border border-[#c1cbab] text-[#2f3b0d] bg-[#dbe4c7]';
    return (
        <button
            className={`${customStyles} ${styles} py-4 px-6 rounded-full`}
            onClick={onClick}
        >
        {children}
        </button>
    )
}
