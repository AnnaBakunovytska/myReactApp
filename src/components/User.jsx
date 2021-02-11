import React from "react";

export default ({ user }) => (
  <li>
    <div>
      <p>first name: <span class='lable'>{user.firstName}</span></p>
      <p>last name: <span class='lable'>{user.lastName}</span></p>
      <p>full name: <span class='lable'>{`${user.firstName} ${user.lastName}`}</span></p>
      <p>age: <span class='lable'>{user.age + 5}</span></p>
      <p>job: <span class='lable'>{user.job}</span></p>
    </div>
  </li>
);
