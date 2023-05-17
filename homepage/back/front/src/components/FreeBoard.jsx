import axios from "axios";
import { useEffect } from "react";

const FreeBoard = () => {
    const titleRef = useRef();
    const contentRef = useRef();
    const writerRef = useRef();
    const doSave = () => {
        axios.post(`http://localhost:5001/freeboard/insert`, {
            title: titleRef.current.value,
            content: contentRef.current.value,
            writer: writerRef.current.value
        })
        .then(result => {
            titleRef.current.value = "";
            contentRef.current.value = "";
            writerRef.current.value = "";
        })
    }
    useEffect( () => {
        axios.get(`http://localhost:5001/freeboard/list`)
        .then(result=> {
            console.log(result.data);
        }) 
    }, []);
    return (
        <>
            <h1>FreeBoard</h1>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <button onClick={doSave}>저장</button>
        </>
    );
}
 
export default FreeBoard;