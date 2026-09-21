# 개인 홈페이지 개편 — 최종 승인 상태

2026-09-21 대화에서 순차 승인한 화면과 기능을 반영했다. 마지막 “전부 진행해줘” 요청으로 홈페이지 변경의 커밋·GitHub push를 승인받았다.

- 정적 HTML, 공통 site.css·site.js. 흰 배경, 검정·회색 글씨, 파란 링크 반응. 밑줄 효과 없음.
- 상단 Kyuewon Kim / About / Publications / Projects는 스크롤 중에도 유지.
- 첫 화면: Human-centered eXtended Reality, XR · Human Factors · Digital Therapeutics. 제목은 8초 주기로 페이드, 넓은 첫 화면 여백 유지.
- 홈페이지는 About → News. Publications·Projects 미리보기는 최종 요청으로 제거.
- About은 작은 사진과 이름·소속·이메일. 연구 관심 문장과 Email/Scholar 버튼 없음.
- News 날짜는 YYYY.MM.DD, 점·세로선 유지, 날짜 박스 없음. 항목 간격 52px, 최대 5개 높이 내부 스크롤. 최신 날짜 제목에 파란 NEW 배지.
- News 예시 3개는 사용자 요청으로 유지하며 Sample 표시만 제거했다. 실제 소식으로 교체할 내용이다. Displays 소식은 원문 PDF의 온라인 공개일 2026-02-11 기준.
- News 그림은 글 아래 최대 3장, 클릭 확대·이전/다음·Esc 닫기. 예시 그림은 기존 연구 그림과 부분 확대본.
- Publications는 All/Journals/Conferences 및 연도 필터. Displays와 IEEE VR 2027은 일반 굵기의 기울임체. 버튼 표기는 PDF / DOI / Website.
- IEEE VR 논문 제목은 공통 스타일 상세로 연결하고 Website는 기존 독립 페이지로 연결한다. 미제공 PDF·DOI는 비활성 상태 유지.
- 목록 대표 그림은 데스크톱 300px, 태블릿 251px, 모바일 전체 폭. 제목 상단 정렬.
- 프로젝트 설명: Investigating how video motion and brightness relate to visual fatigue and brain functional connectivity.
- 상세 그림·본문은 가운데 배치. 논문은 Abstract, 프로젝트는 Overview. 프로젝트 속페이지에는 저자·저널·Citation을 넣지 않는다.
- Displays Abstract는 원문 PDF 대조. IEEE VR 독립 페이지의 미완성 문구는 제거하고 BibTeX는 미출판 제출 원고로 유지.
- Personal 및 기존 styles.css 보존. 과거 독립 페이지의 noindex 설정 유지.
- 사진 적용 시 원본 보존, 위치에 맞춰 크기·비율·여백 조정. 논문 그림 내용은 잘리지 않도록 유지.

출처: https://doi.org/10.1016/j.displa.2026.103393
