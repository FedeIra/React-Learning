import React from "react";

export default function CreateUser() {
  return (
    <div>
      <h1>Create User</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Lastname:</label>
        <input type="text" />
        <button>Create</button>
      </form>
    </div>
  );
}
