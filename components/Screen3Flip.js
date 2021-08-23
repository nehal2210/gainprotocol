function Screen3Flip({title, p1title, p2title, p3title, p1, p2, p3}) {
    return (
        <div>
        <div style={{ backgroundImage: 'linear-gradient(to right, black , white)',width:'300px',color:'white',borderRadius:'10px' }}>
            <div><p>{title}</p></div>
            <div>
                <p>{p1title}{p1}</p>
                <p>{p2title}{p2}</p>
                <p>{p3title}{p3}</p>

            </div>

        </div>
            
        </div>
    )
}

export default Screen3Flip
