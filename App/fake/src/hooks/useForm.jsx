import { useState } from "react";

const useForm = (obj) => {
    const [state, setState] = useState(obj);
    return [state, (e) => {setState({...state, [e.target.name]: e.target.value})}];
}
 
export default useForm;