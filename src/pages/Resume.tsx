const Resume = () => {
  const styles = {
    section: {
      marginBottom: '50px', // 각 <h2> 태그 사이에 16px의 마진 추가
    },
  };
  return (
    <div>
      <h2>안녕하세요 저는 수상경력인데요.</h2>
      <div style={styles.section}>2022년 주니어창의작품경진대회 3등!(장려상...)</div>
      <h2>자랑거리...</h2>
      <div style={styles.section}>긴 한데 자랑할게 없네용 하하....</div>
      <h2>학력</h2>
      <div style={styles.section}>충남대학교 컴퓨터융합학부 3학년 재학중!</div>
      <h2>경력</h2>
      <div style={styles.section}>내년의 제가 백마인턴을 하지 않을까요?</div>
    </div>
  );
};

export default Resume;
