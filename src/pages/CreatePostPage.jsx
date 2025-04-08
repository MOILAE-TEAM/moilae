import React from 'react';
import styles from './CreatePostPage.module.css';
import Banner from '../components/Banner';
import useCreatePostStore from '../stores/useCreatePostStore.js';

const studyTypes = ['인증형', '웹캠형'];
const platforms = ['카카오톡', '디스코드', '줌']; // 예시로 몇 개 더 넣어볼게요

const CreatePostPage = () => {
  const { title, category, type, platform, setField } = useCreatePostStore();

  return (
    <>
      <Banner />
      <section>
        <p>같이하면 성공확률이 2배</p>
        <h2>목표를 혼자 품지말고 사람들을 모아보세요</h2>

        <div>
          <div>스터디 이름</div>
          <input type='text' value={title} onChange={(e) => setField('title', e.target.value)} />

          <div>카테고리</div>
          <input type='text' value={category} onChange={(e) => setField('category', e.target.value)} />
        </div>

        <div>스터디 한 줄 소개(제목)</div>
        <input type='text' />

        <div>세부 설명</div>
        <input type='text' />

        <div>스터디 형태 (하나 선택)</div>
        <div>
          {studyTypes.map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="studyType"
                value={item}
                checked={type === item}
                onChange={(e) => setField('type', e.target.value)}
              />
              {item}
            </label>
          ))}
        </div>

        <div>활용하는 플랫폼을 모두 선택하세요</div>
        <p>1개 이상 선택 필수</p>
        <div>
          {platforms.map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="platform"
                value={item}
                checked={platform === item}
                onChange={(e) => setField('platform', e.target.value)}
              />
              {item}
            </label>
          ))}
        </div>
      </section>
    </>
  );
};

export default CreatePostPage;
