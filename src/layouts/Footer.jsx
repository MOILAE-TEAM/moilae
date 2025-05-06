import styles from './Footer.module.css';

function Footer() {
    // const handleBlogClick = () => {
    //     alert('준비중입니다.');
    // };

    return (
        <footer className={styles.footer}>
            <section className={styles.teamSection}>
                <h2>모일래 팀</h2>
                <ul>
                    <li><a href="https://band-trapezoid-89a.notion.site/1ced2ed346f180a282a2dd5595fc374d" target="_blank" rel="noopener noreferrer">팀 소개</a></li>
                    {/* <li onClick={handleBlogClick}>블로그</li> */}
                </ul>
            </section>
            {/* <section className={styles.supportSection}>
                <h2>고객 지원</h2>
                <ul>
                    <li>광고 문의</li>
                    <li>자주 묻는 질문</li>
                    <li>신고</li>
                </ul>
            </section> */}
            <section className={styles.contactSection}>
                <h2>모일래</h2>
                <p>Contact     moilae@gmail.com</p>
                <p>Copyright   Moilae All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer
