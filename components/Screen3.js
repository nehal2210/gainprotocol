import Screen3Flip from "./Screen3Flip"

function Screen3() {
    const data =  [{title:'ssfsddgdhfgh',p1title:'1.50%',p2title:'0.10%',p3title:'1.50%',p1:'sjdfjsdf',p2:'sdsdfsdfsdf',p3:'sfdgfhgjklhkfghfgjhh'},{title:'ssfsddgdhfgh',p1title:'1.50%',p2title:'0.10%',p3title:'1.50%',p1:'sjdfjsdf',p2:'sdsdfsdfsdf',p3:'sfdgfhgjklhkfghfgjhh'}]
    return (
        <div>
            {data.map((box,i)=>{
    return(
    <Screen3Flip key={i} title={box.title} p1title={box.p1title} p2title={box.p2title} p3title={box.p3title} p1={box.p1} p2={box.p2} p3={box.p3}/>

)})}
        </div>
    )
}

export default Screen3
