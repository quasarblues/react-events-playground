function handleFormSubmit(e) {
    e.preventDefault();
    alert('cheese bop')
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}