import { atom } from "recoil";

const javaMemberListState = atom({
  key: "javaMemberListState",
  default: [
    { name: "Anh", age: 20, "classType":"java"},
    { name: "Nam", age: 22, "classType":"java" },
    { name: "Phong", age: 19, "classType":"java" },
  ],
});
const reactMemberListState = atom({
  key: "reactMemberListState",
  default: [
    { name: "Huy", age: 20, "classType":"react" },
    { name: "Lan", age: 22, "classType":"react" },
  ],
});
export {javaMemberListState,reactMemberListState}
