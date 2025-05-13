import Button from '../components/Button'
import styles from './Header.module.css';
import useSearchStore from '../store/useSearchStore';
import SearchIcon from '../assets/Search.png';
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../context/CategoryContext';

function Header() {
    const { setSearchQuery, resetSearch } = useSearchStore();
    const { setSelectedCategory } = useCategory();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            const query = e.target.value || e.currentTarget.previousElementSibling.value;
            setSearchQuery(query);
        }
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleTitleClick = () => {
        window.location.href = '/?utm_source=reload';
        // setSelectedCategory(null); // 카테고리 초기화
        // resetSearch(); // 검색어와 검색 결과 초기화
        // navigate('/'); // 메인 페이지로 이동
    };

    return (
        <header>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title} onClick={handleTitleClick} style={{ cursor: 'pointer' }}>모일래</h1>
                <p className={styles.des}>스터디·챌린지 찾는 중이라면👀</p>
            </div>
            <div className={styles.searchWrapper}>
                <input 
                    className={styles.searchInput}
                    placeholder="검색어를 입력하세요"
                    onKeyPress={handleSearch}
                    onChange={handleInputChange}
                />
                <button 
                    className={styles.searchButton}
                    onClick={handleSearch}
                >
                    <img src={SearchIcon} alt="검색" width={24} height={24} />
                </button>
            </div>
            {/* <div className={styles.loginWrapper}>
                <Button className={styles.login}>로그인</Button>
                <Button className={styles.signIn}>회원가입</Button>
            </div> */}
        </header>
    )
}

export default Header
