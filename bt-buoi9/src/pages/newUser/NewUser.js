import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { javaMemberListState, reactMemberListState } from "../../productState";
import "./newUser.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const [javaMembers, setJavaMembers] = useRecoilState(javaMemberListState);
  const [reactMembers, setReactMembers] = useRecoilState(reactMemberListState);
  const INIT_DATA = {
    name: "",
    age: "",
    classType: "react",
  };
  const [formData, setFormData] = useState(INIT_DATA);
  const { name, age, classType } = formData;

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate()
  const handleSubmit = () => {
    if (classType === "react") {
        let reactList = [...reactMembers];
        reactList.push(formData);
        setReactMembers(reactList);
         navigate("/")
    }
    if (classType === "java") {
        let javaList = [...javaMembers];
        javaList.push(formData);
        setReactMembers(javaList);
         navigate("/")
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      Name: <input name="name" value={name} onChange={(e) => {handleInput(e)}} />
      Age: <input name="age" value={age} onChange={(e) => handleInput(e)} />
      ClassType:{" "}
      <select
        name="classType"
        value={classType}
        onChange={(e) => handleInput(e)}
      >
        <option value="react">React</option>
        <option value="java">Java</option>
      </select>
      <br />
      <button>Save</button>
    </form>
  );
}
