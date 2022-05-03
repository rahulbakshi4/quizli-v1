
export const Alert = ({ message, variant }) => {
    return (
        <div className={`alert alert--${variant}`}>
            {message}
        </div>
    )
}
