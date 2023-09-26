import React, { useState } from "react";
import "./Authentification.scss";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = async (ev) => {
    ev.preventDefault();
    await fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify({ name, lastname, job, email, password }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <main className="register-page">
      <div className="register-container-info">
        <h2>Inscription</h2>
        <span>Veuillez remplir les champs suivants :</span>
      </div>
      <div className="register-container-form">
        <form onSubmit={register}>
          <div className="user-box">
            <input
              type="text"
              id="username"
              name=""
              required={true}
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <label htmlFor="username">Prénom</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              id="last-name"
              name=""
              required={true}
              value={lastname}
              onChange={(ev) => setLastname(ev.target.value)}
            />
            <label htmlFor="last-name">Nom</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name=""
              id="job"
              required={true}
              value={job}
              onChange={(ev) => setJob(ev.target.value)}
            />
            <label htmlFor="job">Profession</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              id="email"
              name=""
              required={true}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name=""
              required={true}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <label htmlFor="password">Mot de passe</label>
          </div>
          <div className="button-form">
            <button>Devenir membre</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
