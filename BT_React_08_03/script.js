const content = document.querySelector(".content");

function Component() {
  const [usersJava, setUserJava] = React.useState([
    { name: "Anh", age: 20, classType: "java" },
    { name: "Nam", age: 19, classType: "java" },
    { name: "Nam", age: 29, classType: "java" },
  ]);
  const [usersReact, setUserReact] = React.useState([
    { name: "Phong", age: 20, classType: "react" },
    { name: "Van", age: 18, classType: "react" },
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
    index: 0,
    name: "",
    age: "",
    classType: "react",
    nameSearch: "",
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

  //add data
  const addData = () => {
    if (formData.classType === "react") {
      usersReact.push(formData);
      setUserReact([...usersReact]);
    } else {
      usersJava.push(formData);
      setUserJava([...usersJava]);
    }
    setFormData(INIT_DATA);
  };

  // update data
  const updateChange = () => {
    if (formData.classType === "react") {
      usersReact[formData.index].name = formData.name;
      usersReact[formData.index].age = formData.age;
      setUserReact([...usersReact]);
    } else if (formData.classType === "java") {
      usersJava[formData.index].name = formData.name;
      usersJava[formData.index].age = formData.age;
      setUserJava([...usersJava]);
    }
    document.getElementById("submit").innerHTML = "Add";
    setFormData(INIT_DATA);
  };

  //xu li submit
  const handleSubmit = () => {
    if (document.getElementById("submit").innerHTML === "Add") {
      addData();
    } else {
      updateChange();
    }
  };

  //sua du lieu
  const updateData = (item, index) => {
    setFormData({
      ...formData,
      name: item.name,
      age: item.age,
      classType: item.classType,
      index: index,
    });
    document.getElementById("submit").innerHTML = "Update";
  };

  //search du lieu
  const handleInputSearch = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSearch = () => {
    const newArrUsersJava = usersJava.filter((user) => {
      return formData.nameSearch === user.name.toLowerCase();
    });
    setUserJava(newArrUsersJava);

    const newArrUserReact = usersReact.filter((user) => {
      return formData.nameSearch === user.name.toLowerCase();
    });
    setUserReact(newArrUserReact);
  };
  const handleSort = () => {
    const newusersJava = [...usersJava];
    const arrUsersJavaSorted = newusersJava.sort((a, b) =>
      a.age > b.age ? 1 : -1
    );
    const newusersReact = [...usersReact];
    const arrUserReactSorted = newusersReact.sort((a, b) =>
      a.age > b.age ? 1 : -1
    );
    setUserJava(arrUsersJavaSorted);
    setUserReact(arrUserReactSorted);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search by name"
        id="search"
        name="nameSearch"
        value={formData.nameSearch}
        onChange={(e) => {
          handleInputSearch(e);
        }}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <button type="button" onClick={handleSort}>
        SoftByAge
      </button>

      <h1>List member of Java Class</h1>
      {usersJava.length > 0 ? (
        usersJava.map((item, index) => {
          console.log(item);
          return (
            <User
              key={index}
              name={item.name}
              age={item.age}
              handleTransfer={() => transferJavaToReactClass(item, index)}
              handleUpdate={() => updateData(item, index)}
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
              handleUpdate={() => updateData(item, index)}
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
        <button id="submit" type="submit">
          Add
        </button>
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
