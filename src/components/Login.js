import React from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";

export default function Login() {
    const inputName = React.useRef();
    const navigate = useNavigate();
    const { user, setUser } = React.useContext(Context);

    // log the user
    const login = (e) => {
        e.preventDefault();
        // setUser(prevState => ({
        //     ...prevState,
        //     name: inputName.current.value
        // }));
        // console.log("To login");
        // console.log(inputName.current.value);
        // inputName.current.value = "";
        console.log("login");
        console.log(user);
        navigate("/chat");
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <div className="login-form-box" id="inputuser">
                    <form onSubmit={e => login(e)}>
                        <div className="form">
                            <input
                                name="name"
                                type="text"
                                className="form__input"
                                id="name"
                                autoComplete="off"
                                // required
                                ref={inputName}
                            />
                            <label className="form__label" htmlFor="name">
                                <span className="form__name">Name</span>
                            </label>
                        </div>

                        <div className="box_btn">
                            <button type="submit" className="box" id="btn" >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
