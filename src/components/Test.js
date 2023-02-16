import React from 'react'
import axios from 'axios'
import { Context } from "../context/ContextProvider";

export default function Test() {
    const { token } = React.useContext(Context);
    const getData = async (e) => {
        e.preventDefault();
        // let config = {
        //     withCredentials: true,
        //     headers: {
        //         "content-type": "aplication/json"
        //     }
        // }
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        };

        const data = await axios.post(
            "http://localhost:5002/test",
            { sessionToken: token, },
            config,
        );
        // const data = axios({
        //     url: '/test',
        //     method: "post",
        //     baseURL: "http://localhost:5002",
        //     data: {
        //         sessionToken: token,
        //     },
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     withCredentials: true,
        // });
        console.log(data);
    }

    const getData2 = async (e) => {
        e.preventDefault();
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const data = await axios.post("http://localhost:5002/test2", {}, config);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <button onClick={e => getData(e)}>Fetch Data</button>
            <button onClick={e => getData2(e)}>test2</button>
        </div>
    )
}
