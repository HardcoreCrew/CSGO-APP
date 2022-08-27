import React, { FC } from "react";
import { ErrorSpanWRapper } from "./style";

interface IProps {
    children: React.ReactNode;
};

const index:FC<IProps> = ({children} : IProps) => {
    return <ErrorSpanWRapper>
        {children}
    </ErrorSpanWRapper>
};

export default index;