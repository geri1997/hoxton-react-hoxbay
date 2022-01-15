import { useState } from "react";
import "../styles/modal.css";

export default function Modal({
  modal,
  setUser,
  setModal,
  isWrong,
  setIsWrong,
}) {
  function signIn(e) {
    fetch("http://localhost:3000/users?username=" + e.target.username.value)
      .then((resp) => resp.json())
      .then((user) => {
        if (user.length !== 0 && user[0].password === e.target.passw.value) {
          setUser(user[0]);
          setModal((prevModal) => (prevModal = ""));
        } else {
          setIsWrong(true);
        }
      });
  }

  function signUp(user) {
    fetch(`http://localhost:3000/users/?username=${user.username}`)
      .then((resp) => {
        return resp.json();
      })
      .then((serverUser) => {
        if (serverUser.length === 0) {
          createNewUserOnServer(user)
            .then((resp) => resp.json())
            .then((user) => setUser((prevUser) => (prevUser = user)));
          setModal((prevModal) => (prevModal = ""));
        }
      });
  }
  function createNewUserOnServer(user) {
    return fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  return (
    modal && (
      <section
        onClick={(e) => {
          // @ts-ignore
          if (e.target.classList.contains("modal-wrapper")) {
            setModal((prevModal) => (prevModal = ""));
            setIsWrong(false);
          }
        }}
        className="modal-wrapper"
      >
        <div
          // onClick={e=>e.stopPropagation()}
          className="modal"
        >
          <h2>{modal === "login" ? "Sign in" : "Sign up"}</h2>
          <form
            style={{ display: "grid" }}
            onSubmit={(e) => {
              e.preventDefault();
              if (modal === "login") {
                signIn(e);
              } else {
                signUp({
                  // @ts-ignore
                  username: e.target.username.value,
                  // @ts-ignore
                  password: e.target.passw.value,
                  basket: [],
                });
              }
            }}
          >
            <label htmlFor="username">Username</label>
            <input required type="text" name="username" id="username" />
            <label htmlFor="username">Password</label>
            <input required type="password" name="passw" id="passw" />
            <button className="ok-button">Submit</button>
            {modal === "login" ? (
              <p>
                or{" "}
                <b
                  onClick={() => {
                    setModal("sign up");
                    setIsWrong(false);
                  }}
                >
                  Sign Up
                </b>
              </p>
            ) : (
              <p>
                or{" "}
                <b
                  onClick={() => {
                    setModal("login");
                    setIsWrong(false);
                  }}
                >
                  Log in
                </b>
              </p>
            )}
            {modal === "login" && isWrong && (
              <p style={{ color: "red" }}>Wrong username or password</p>
            )}
            {modal === "sign up" && isWrong && (
              <p style={{ color: "red" }}>Username already exists</p>
            )}
          </form>
          <button
            // @ts-ignore
            onClick={(e) => {
              setModal((prevModal) => (prevModal = ""));
              setIsWrong(false);
            }}
            className="close-modal-btn"
          >
            X
          </button>
        </div>
      </section>
    )
  );
}
