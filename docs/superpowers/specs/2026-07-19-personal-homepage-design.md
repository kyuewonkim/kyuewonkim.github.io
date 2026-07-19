# 개인 연구자 홈페이지 설계 (2026-07-19)

## 목표

타인 홈페이지 사본을 참고용으로만 두고, 본인(Kyuewon Kim) 소유의 연구자 홈페이지를
`kyuewonkim.github.io` 저장소로 새로 만들어 `https://kyuewonkim.github.io` 에 배포한다.

## 결정 사항

- **배포**: 새 저장소 `kyuewonkim.github.io` (GitHub Pages user site, main 브랜치 루트)
- **디자인**: 기존 `kyuewonkim/kyuewonkim` 저장소의 주석 처리된 index.html 초안을 살리고 버그만 수정
- **섹션**: About, News, Publications, Education & Experience
- **콘텐츠**: 확인된 정보(경희대 HXR Lab 박사과정, 2026년 논문 2편)만 채우고 나머지는 `[...]` 플레이스홀더
- **기존 저장소 정리**: 타인 사본(깃허브페이지/)·논문 폴더·홈페이지 파일을 git에서 제거하고
  프로필 README만 유지. 로컬 파일은 보관 폴더로 이동. git 히스토리 재작성은 하지 않음.

## 구조

```
kyuewonkim.github.io/
├── index.html          # 단일 페이지
└── images/             # profile.jpg, logo.png(파비콘 겸용), Paper-1.png, Paper-2.png
```

논문 PDF/PPTX 원본은 사이트에 올리지 않는다 (PDF/DOI 버튼은 주석 유지).

## index.html 수정 내역

1. 문서 전체를 감싼 `<!-- -->` 주석 제거
2. Paper 2 저자 HTML 수정: `Uijong Ju, <strong>Kyuewon Kim</strong>`
3. 썸네일 경로 대소문자 수정: `paper-2.png` → `Paper-2.png` (GitHub Pages는 대소문자 구분)
4. 파비콘을 존재하는 `images/logo.png`로 교체
5. News 섹션 추가 (날짜순, 논문 2건 소식)
6. Education & Experience 섹션 추가 (타임라인, 플레이스홀더 포함)
7. 내비게이션에 News, Education 링크 추가

## 검증

- 로컬 브라우저 렌더링 확인, 이미지 경로와 실제 파일명 대조
- 푸시 후 https://kyuewonkim.github.io 접속 확인
