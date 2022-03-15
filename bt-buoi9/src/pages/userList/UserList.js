import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { javaMemberListState, reactMemberListState } from "../../productState";
import "./userList.css";

export default function UserList() {
  const [javaMembers, setJavaMembers] = useRecoilState(javaMemberListState);
  const [reactMembers, setReactMembers] = useRecoilState(reactMemberListState);

  const User = (props) => {
    const { name, age, onTransfer } = props;
    return (
      <div>
        <span>
          Name: {name}, Age: {age}
        </span>
        <button onClick={() => onTransfer()}>Transfer</button>
        <br />
        <br />
      </div>
    );
  };
  //xu li transfer giua cac lop
  const handleTransferJavaToReact = (item, index) => {
    let javaList = [...javaMembers];
    let reactList = [...reactMembers];
    reactList.push(item);
    setReactMembers(reactList);
    javaList.splice(index, 1);
    setJavaMembers(javaList);
  };
  const handleTransferReactToJava = (item, index) => {
    let javaList = [...javaMembers];
    let reactList = [...reactMembers];
    javaList.push(item);
    setJavaMembers(javaList);
    reactList.splice(index, 1);
    setReactMembers(reactList);
  };
  return (
    <>
      <br />
      <Link to="/addNewUSer">
        <button>Add new User</button>
      </Link>
      <h1>Member of class Java</h1>
      {javaMembers.map((item, index) => {
        return (
          <User
            key={index}
            name={item.name}
            age={item.age}
            onTransfer={() => handleTransferJavaToReact(item, index)}
          />
        );
      })}
      <h1>Member of class React</h1>
      {reactMembers.map((item, index) => {
        return (
          <User
            key={index}
            name={item.name}
            age={item.age}
            onTransfer={() => handleTransferReactToJava(item, index)}
          />
        );
      })}
    </>
  );
}
