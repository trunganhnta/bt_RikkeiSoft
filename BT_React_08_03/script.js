const content = document.querySelector(".content");

function Component() {
  const [usersJava, setUserJava] = React.useState([
    { name: "Anh", age: 20, classType: "java" },
    { name: "Nam", age: 20, classType: "java" },
  ]);
  const [usersReact, setUserReact] = React.useState([
    { name: "Phong", age: 20, classType: "react" },
    { name: "Van", age: 20, classType: "react" },
  ]);

  const transferJavaToReactClass = (item, index) => {
    usersReact.push(item);
    usersJava.splice(index, 1);
    setUserReact([...usersReact]);
    setUserJava([...usersJava]);
  };
  const transferReactToJavaClass = (item, index) => {
    usersJava.push(item);
    usersReact.splice(index, 1);
    setUserReact([...usersReact]);
    setUserJava([...usersJava]);
  };

  const User = (props) => {
    const { name, age, handleTransfer, handleUpdate } = props;
    return (
      <div>
        <span>
          Name: {name}, Age: {age}
        </span>
        <button type="button" onClick={() => handleUpdate()}>
          Update
        </button>
        <button type="button" onClick={() => handleTransfer()}>
          Transfer
        </button>
      </div>
    );
  };

  React.useEffect(() => {
    if (usersReact.length === 0) {
      alert("Class is empty!");
    } else if (usersJava.length === 0) {
      alert("Class is empty!");
    }
  }, [usersJava.length, usersReact.length]);

  const INIT_DATA = {
    name: "",
    age: "",
    classType: "react",
  };

  const [formData, setFormData] = React.useState(INIT_DATA);

  //xu li input
  const handleInput = (e) => {
    const value = e.target.value;
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  //xu li submit
  const handleSubmit = () => {
    if (formData.classType === "react") {
      usersReact.push(formData);
      setUserReact([...usersReact]);
    } else {
      usersJava.push(formData);
      setUserJava([...usersJava]);
    }
    setFormData(INIT_DATA);
  };

  var curent
  //sua du lieu
  const updateData = (item) => {
    setFormData({
      ...formData,
      name: item.name,
      age: item.age,
      classType: item.classType,
    });
  };
  return (
    <div>
      <h1>List member of Java Class</h1>
      {usersJava.length > 0 ? (
        usersJava.map((item, index) => {
          return (
            <User
              key={index}
              name={item.name}
              age={item.age}
              handleTransfer={() => transferJavaToReactClass(item, index)}
              handleUpdate={() => updateData(item)}
            />
          );
        })
      ) : (
        <span>Class is empty</span>
      )}

      <h1>List member of React Class</h1>
      {usersReact.length > 0 ? (
        usersReact.map((item, index) => {
          return (
            <User
              key={index}
              name={item.name}
              age={item.age}
              handleTransfer={() => transferReactToJavaClass(item, index)}
              handleUpdate={() => updateData(item)}
            />
          );
        })
      ) : (
        <span>Class is empty</span>
      )}

      <h1>Add a new user</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Name{" "}
        <input
          name="name"
          value={formData.name}
          onChange={(e) => handleInput(e)}
          type="text"
        />
        Age{" "}
        <input
          name="age"
          value={formData.age}
          onChange={(e) => handleInput(e)}
          type="text"
        />
        Type{" "}
        <select
          name="classType"
          value={formData.classType}
          onChange={(e) => handleInput(e)}
        >
          <option value="react">React</option>
          <option value="java">Java</option>
        </select>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Component props />
  </div>,
  content
);
