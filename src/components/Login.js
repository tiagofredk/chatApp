import React from "react";

export default function Login() {
    const inputName = React.useRef();

    const chat = (e) => {
        e.preventDefault();
        console.log("To login");
        console.log(inputName.current.value);
        inputName.current.value = ""
    }

    return (
        <div id="inputuser">
            <form onSubmit={e => chat(e)}>
                <div className="form">
                    <input
                        name="name"
                        type="text"
                        className="form__input"
                        id="name"
                        autoComplete="off"
                        required
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
    )
}
