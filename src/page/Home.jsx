import { Link } from "react-router-dom";
import '../App.css';
const Home = () => {
    return ( 
        <div>
            <h1>Home 입니다</h1>
            <div>
                <button className="move-btn">
                <Link to="/memo" style={{textDecorationLine:'none', color:'brown'}}>
                    방명록 쓰러 가기</Link>
                </button>
                <p>위 버튼을 눌러 이동하세요!</p>
            </div>
            
        </div>
    );
}

export default Home;