import React, {useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";



export const Profile = props => {

    const { auth, history } = props;
    const { request } = useHttp();
    const message = useMessage()

    const [input, setInput] = useState({
        firstName: "",
        secondName: ""
    });

    const changeHandler = (event) => {
        console.log(input);
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const setProfileHandler = async () => {
        try {
            console.log(input)
            const data = await request(
                "/api/auth/profile",
                "POST",
                {name: input.firstName + " " + input.secondName},
                { Authorization: `Bearer ${auth.token}` }
            );
            message(data.message);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="profile">
            <div className="profile-input-block">
                <div className="profile-input-field">
                    <input
                        placeholder="Фамилия"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={input.firstName}
                        onChange={changeHandler}
                    />
                </div>
                <div className="profile-input-field">
                    <input
                        placeholder="Имя"
                        type="text"
                        id="secondName"
                        name="secondName"
                        value={input.secondName}
                        onChange={changeHandler}
                    />
                </div>
                <button className="enter-button" onClick={setProfileHandler}>Сохранить</button>


            </div>
        </div>
    )
}