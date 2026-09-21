# Homepage Redesign Implementation Plan

**Goal:** 승인된 이미지 기반 개인 홈페이지 개편. 최종 상태는 연결된 spec을 따른다.
**Architecture:** 정적 HTML과 공통 site.css, 분류·연도 필터와 이미지 확대·News 표시를 site.js에서 처리.
**Tech Stack:** HTML, CSS, vanilla JavaScript.
**Spec:** ../specs/2026-09-21-homepage-redesign.md

- [x] 기존 파일·Git 변경 상태·공개 자료 확인.
- [x] index.html: 큰 문구, 소개, 실제 게재 News.
- [x] publications.html: 2026 논문 목록 및 접근 가능한 연도 선택.
- [x] projects.html: 공개 연구 프로젝트 연결.
- [x] project-pages/visual-fatigue/{index,project}.html: 논문 및 프로젝트 상세.
- [x] site.css: 공통 내비게이션, 넓은 여백, 모바일 대응, 키보드 포커스.
- [x] 내부 링크·이미지·스크립트 문법 확인.
- [x] 데스크톱/모바일 렌더링 확인.
- [x] 변경 파일만 원래 저장소에 반영 후 git diff --check 검증.

Personal은 보존. 기존 IEEE VR 독립 페이지는 사용자 승인으로 다시 연결했다. 최종 커밋·push 요청에 따라 GitHub 반영을 진행한다.

검증: 로컬 링크·이미지·앵커 검사 통과, node --check 통과, Chrome 데스크톱·390px 모바일 화면 확인, 연도 필터 및 목록↔상세 이동 확인.
