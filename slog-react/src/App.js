import axios from "axios";
import "./style.css"

function App() {
  
  const sssss = async({}) => {
   
    await axios.get("")



  }

  axios.get("")
  return (
    <div className="container" onClick={()=>{sssss({id:12})}}>
      
      <body>
        <table>
          <thead>
            <tr>
              <th>나이</th>
              <th>이름</th>
              <th>번호</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>홍길동</td> 
              <td>20220001</td>
            </tr>
            <tr>
              <td>21</td>
              <td>김철수</td>
              <td>20220002</td>
            </tr>
            <tr>
              <td>19</td>
              <td>이영희</td>
              <td>20220003</td>
            </tr>
          </tbody>
        </table>
      </body>
    </div>
  );
}

export default App;
