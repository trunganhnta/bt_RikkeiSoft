var content = document.querySelector('.content')

function Component(){

    const [userJava,setUserJava] = React.useState([
        {name: 'Nam', age: 20},
        {name: 'Anh', age: 23},
        {name: 'Loan', age: 20}
    ])
    const [userReact,setUserReact] = React.useState([
        {name: 'Hai', age: 20},
        {name: 'Phong', age: 20}
    ])
    
    return(
        <div>
            <h1>List Member of Java Class</h1>
            {
                userJava.length == 0 ? (
                    <span>Class is Empty</span>
                ) :
                userJava.map((item) => {
                    return(
                        <div key={item.name}>
                            <span>Name: {item.name}, Age: {item.age}</span>
                            <button type="button" onClick={()=>{
                                var newarr = userJava.filter((a) => a.name !== item.name)
                                setUserJava([...newarr])

                                userReact.push(item)
                                setUserReact([...userReact])
                            }}>Transfer</button><br/>
                        </div>
                    )})
            }
            <h1>List Member of React Class</h1>
            {
                userReact.length == 0 ? <span>Class is Empty</span> :
                userReact.map((item) => {
                    return(
                        <div key={item.name}>
                            <span>Name: {item.name}, Age: {item.age}</span>
                            <button type="button" onClick={()=>{
                            var newarr = userReact.filter((a) => a.name !== item.name)
                            setUserReact([...newarr])

                            userJava.push(item)
                            setUserJava([...userJava])

                            }}>Transfer</button><br/>
                        </div>
                    )})
            }
            <h1>Form add new member</h1>
            Name: <input type="text" id="ten"></input><br/><br/>
            Age: <input type="text" id="tuoi"></input><br/><br/>
            Class: <select name="lop" id="class-select">
                        <option value="react">React</option>
                        <option value="java">Java</option>
                    </select>
                    <br/><br/>
            <button type="button" onClick={()=>{}}>Add member</button>
        </div>
    )
}
    
ReactDOM.render(<div>
    <Component/>
</div>,content)