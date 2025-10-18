function Card() {
    const user = 'Sushant'
    const age = 21;
    return (
        <div>
            <div className="card">
                <h1>Hi I am {user}</h1>
                <h2>And I am {age} years old</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, omnis?</p>
            </div>
        </div>
    )
}
export default Card