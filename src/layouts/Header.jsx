import Button from '../components/Button'
import styles from './Header.module.css';



function Header() {

    return (
        <header>
            <div  className={styles.titleWrapper}>
                <h1 className={styles.title}>모일래</h1>
                <p className={styles.des}>스터디·챌린지 찾는 중이라면👀</p>
            </div>
            <div className={styles.searchWrapper}>
                <input className={styles.searchInput}></input>
            </div>
            {/* <div className={styles.loginWrapper}>
                <Button className={styles.login}>로그인</Button>
                <Button className={styles.signIn}>회원가입</Button>
            </div> */}
        </header>
    )
}

export default Header
