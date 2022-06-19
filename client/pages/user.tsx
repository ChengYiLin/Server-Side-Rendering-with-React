import React, { FC } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/useRedux";

const User: FC = () => {
    // const user = useAppSelector((state) => state.user.userName);
    // const dispatch = useAppDispatch();

    return (
        <div>
            <h1>User Page</h1>
            <p>User Name : {"user"}</p>
        </div>
    );
};

export default User;
