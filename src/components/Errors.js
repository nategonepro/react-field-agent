
function Errors({ errors }) {
    if (errors.length === 0) {
        return null;
    }

    return (
        <div className="errors">
            <p>The following errors were found:</p>
            <ul>
                {errors.map(error => (
                <li key={error}>{error}</li>
                ))}
            </ul>
        </div>
    );
}

export default Errors;
