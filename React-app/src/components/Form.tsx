import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          value={person.age}
          onChange={(e) =>
            setPerson({ ...person, age: Number(e.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
