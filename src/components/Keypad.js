// Code Keypad Component Here

function Keypad (){
    function handlePassword(e) {
        e.preventDefault();
        console.log('Entering password...');
    }

    return (
        <div>
            <input type="password" name="keypad" onChange={handlePassword}></input>
        </div>
    )
}

export default Keypad;