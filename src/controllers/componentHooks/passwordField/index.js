import {useState} from "react";

const usePasswordField = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);


    return {
        handleClickShowPassword,
        showPassword
    }

};

export default usePasswordField;
