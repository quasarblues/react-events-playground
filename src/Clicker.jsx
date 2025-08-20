
export default function Clicker({ message, btnTxt }) {
    function handleClick() {
        alert(message)
    }
    return (
        <div>
            <button onClick={handleClick}>{btnTxt}</button>
        </div>
    )
}