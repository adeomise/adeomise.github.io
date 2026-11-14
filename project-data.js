window.PORTFOLIO_PROJECTS = [
  {
    "id": "project-01",
    "name": "뉴스 기사 인기 예측",
    "category": "AI / ML",
    "status": "구현 기록",
    "summary": "기사 특성 분석, 다양한 전처리 실험, 머신러닝 모델·앙상블 비교와 인기 기사 패턴 해석",
    "body": "<p><b>뉴스 기사에 포함된 정보로 인기 여부를 예측하고, 어떤 특징이 인기와 관련 있는지 분석한 머신러닝 프로젝트</b></p>\n<p><b>프로젝트 성격:</b> 학회 머신러닝 프로젝트 · 데이터 분석 · 예측 모델 비교 및 개선</p>\n<h3>프로젝트 소개</h3>\n<p>뉴스 기사의 <b>키워드, 주제, 이미지 수, 링크 수, 게시 시점</b> 등의 정보를 분석해 어떤 기사가 인기를 얻을 가능성이 높은지 예측했습니다. 정확한 예측 모델을 만드는 것뿐 아니라, 인기 기사에서 어떤 공통점이 나타나는지도 분석하는 프로젝트입니다.</p>\n<h3>프로젝트에서 진행한 작업</h3>\n<ol><li><b>데이터 점검</b> — 약 2만 3천 건의 학습용 기사와 8천 건의 평가 데이터를 검토하고, 결측치·이상치 및 기사 특성 58개의 분포를 확인했습니다.</li><li><b>전처리 방법 비교</b> — 수치 범위를 조정하거나 Log·분위수 변환을 적용하는 방식을 비교했습니다. 데이터에 변환을 많이 적용하는 것보다 <b>원본 특성을 그대로 사용하는 편이 적절하다는 판단</b>을 실험으로 확인했습니다.</li><li><b>여러 예측 모델 학습·비교</b> — Random Forest, XGBoost, LightGBM, CatBoost를 비교하고 서로 다른 모델의 예측을 결합하는 <b>앙상블</b>을 적용했습니다.</li><li><b>모델 튜닝·검증</b> — Optuna를 사용해 모델 설정을 탐색하고, 교차검증과 서로 다른 학습 조건의 예측값 결합을 통해 결과를 검토했습니다. Early Stopping과 탐색 범위 조정으로 학습 과정도 효율화했습니다.</li><li><b>인기 기사 패턴 분석</b> — 키워드 관련 특성, 기사 주제, 주말 게시 여부, 이미지와 외부 링크 수 등을 분석해 <b>인기와 관련 있는 요인</b>을 정리했습니다. 단순한 상관관계를 인과관계로 단정하지 않았습니다.</li></ol>\n<h3>결과물</h3>\n<ul><li>뉴스 기사 인기 여부를 예측하는 머신러닝 모델 및 모델 조합</li><li>전처리 방식·모델 구조·튜닝 방법별 비교 실험</li><li>기사 특성 중요도 및 인기 기사 패턴을 해석한 발표자료</li></ul>\n<h3>이 프로젝트에서 기른 역량</h3>\n<ul><li><b>데이터 분석:</b> 데이터를 처음부터 점검하고 전처리의 필요성을 검증하는 능력</li><li><b>머신러닝 모델링:</b> 여러 알고리즘을 비교하고 적합한 모델을 선정하는 능력</li><li><b>실험 설계:</b> 설정을 바꿔가며 결과를 비교하고 효율적으로 모델을 개선하는 방법</li><li><b>결과 해석:</b> 예측 성능 외에 어떤 요소가 결과와 관련 있는지 설명하는 능력</li></ul>\n<h3>사용한 기술</h3>\n<p>Python · LightGBM · XGBoost · CatBoost · Random Forest · Optuna · 교차검증 · 앙상블</p>\n<h3>참고 자료</h3>\n<ul><li><b>「뉴스 기사 인기 예측」</b> 학회 머신러닝 프로젝트 발표자료 (16페이지)</li><li>주요 분석: 기사 키워드·주제·이미지·링크·게시 시점</li></ul>\n<p><span class=\"source-note\">발표자료에 개인별 구현 담당이 명시되어 있지 않아 프로젝트 전체 수행 내용을 기반으로 정리했습니다. 실제 담당 세부 역할과 별도 코드는 확인 후 보강할 수 있습니다.</span></p>"
  },
  {
    "id": "project-02",
    "name": "Computer Graphics · Stereo / Anaglyph",
    "category": "Software",
    "status": "구현 기록",
    "summary": "양안 카메라 투영과 Anaglyph 렌더링 실습",
    "body": "<p><b>양안 카메라 투영과 Anaglyph 렌더링 실습</b></p>\n<h3>What I worked on</h3>\n<p>좌우 View 및 비대칭 Projection, Red/Cyan 색상 채널 결합, Depth of Field 및 Eccentricity 관련 과제.</p>\n<h3>Tools &amp; Methods</h3>\n<p>JavaScript, WebGL, Stereo Camera, Anaglyph Shader</p>\n<h3>Evidence / Deliverables</h3>\n<p>WebGL 코드·시각화 결과·보고서</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-03",
    "name": "Tetris Game",
    "category": "Games",
    "status": "구현 기록",
    "summary": "테트리스 게임 제작",
    "body": "<p><b>테트리스 게임 제작</b></p>\n<h3>What I worked on</h3>\n<p>Tetris 게임을 직접 제작한 경험. 블록 회전/충돌 등의 개별 기능과 사용 언어는 실제 코드 확인 후 기재.</p>\n<h3>Tools &amp; Methods</h3>\n<p>게임 구현 · 언어 미확인</p>\n<h3>Evidence / Deliverables</h3>\n<p>게임 프로젝트(소스 및 실행 화면 추가 필요)</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-04",
    "name": "SIT Paper Study · IndEgo",
    "category": "Research",
    "status": "스터디·발표",
    "summary": "산업 현장 1인칭 영상 데이터셋 논문 분석·발표",
    "body": "<p><b>산업 현장 1인칭 영상 데이터셋 논문 분석·발표</b></p>\n<h3>What I worked on</h3>\n<p>IndEgo 논문에서 산업 데이터셋 구성, 행동·작업 단계 인식, 실수탐지, Video QA 및 협업 평가를 읽고 논문 스터디 발표.</p>\n<h3>Role / Contribution</h3>\n<p>Sogang Intelligence Team의 논문 읽기·발표 활동. 연구 논문 저자 실적 아님.</p>\n<h3>Tools &amp; Methods</h3>\n<p>Egocentric Video, Action Recognition, Industrial AI</p>\n<h3>Evidence / Deliverables</h3>\n<p>논문 발표자료·발표문</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-05",
    "name": "Computer Graphics · 3D Viewer & Shading",
    "category": "Software",
    "status": "구현 기록",
    "summary": "카메라 Transform과 조명 Shader를 구현한 그래픽스 과제",
    "body": "<p><b>카메라 Transform과 조명 Shader를 구현한 그래픽스 과제</b></p>\n<h3>What I worked on</h3>\n<p>Model/View/Projection Matrix, Viewer Navigation, Clipping, Phong/Multi-Phong Shader, Point Light Attenuation 등 구현.</p>\n<h3>Tools &amp; Methods</h3>\n<p>JavaScript, WebGL, Matrix Transform, Phong Shading</p>\n<h3>Evidence / Deliverables</h3>\n<p>WebGL 실행 화면·JS 코드·보고서</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-06",
    "name": "Word Orbit · Semantic Word Guessing Game",
    "category": "Games",
    "status": "구현 기록",
    "summary": "단어의 의미를 비교하는 AI 점수 엔진을 담당한 3D 단어 추론 게임",
    "body": "<p><b>Word Orbit — 단어의 의미가 얼마나 비슷한지 힌트를 보고 정답을 맞히는 3D 단어 게임</b></p>\n<p><b>내 담당:</b> 한국어 단어 데이터와 AI 유사도 점수 계산(Embedding) 파트</p>\n<h3>내가 맡은 역할</h3>\n<p><b>게임에서 ‘두 단어가 의미적으로 얼마나 가까운지’를 판단하는 핵심 기능을 맡았습니다.</b> 화면에 보이는 별과 우주는 팀이 만든 게임의 표현 방식이고, 제가 맡은 일은 그 별의 거리와 순위를 결정하는 단어 분석·점수 계산 부분입니다.</p>\n<h4>실제로 한 작업</h4>\n<ol><li><b>게임에 사용할 한국어 단어 데이터 준비</b> — 약 6만 개의 한국어 단어를 정리하고, 사용 빈도 등을 살펴 플레이어가 맞힐 수 있는 정답 후보 약 4,800개를 추렸습니다.</li><li><b>단어의 의미가 얼마나 비슷한지 계산</b> — 한국어 FastText Embedding 모델을 검토하고, 추측한 단어와 정답 단어의 의미적 유사도와 순위를 계산하는 기능을 만들었습니다.</li><li><b>게임이 빠르게 반응하도록 개선</b> — 모든 추측마다 복잡한 계산을 반복하지 않도록 유사도·순위 정보를 미리 계산해 저장하고, 게임에서는 필요한 결과를 바로 불러오도록 구성했습니다.</li><li><b>더 효율적인 단어 탐색 방법 연구</b> — 사용자가 받은 힌트만으로 다음 단어를 어떻게 선택할지 여러 전략을 비교하는 실험을 설계했습니다. 이 부분은 구현 완료 성과가 아닌 탐색 연구 단계입니다.</li></ol>\n<h4>이 프로젝트에서 기른 역량</h4>\n<ul><li><b>NLP / AI 활용:</b> 단어를 숫자 벡터로 표현하는 모델을 실제 게임 기능으로 연결</li><li><b>데이터 구성:</b> 좋은 게임 경험을 위해 단어 데이터를 수집·정리하고 정답 선정 기준 설계</li><li><b>알고리즘·효율화:</b> 대량의 점수를 정확하게 계산하고 서비스에서 빠르게 사용할 수 있도록 처리</li><li><b>문제 해결:</b> 모델 성능만이 아니라 사용자 경험과 실행 속도를 함께 고려</li></ul>\n<p><b>역할 구분:</b> 제 주 담당은 Embedding·단어 데이터·유사도 계산이며, 3D 화면과 웹 서비스 전체는 팀이 함께 완성한 결과물입니다.</p>\n<h3>사용한 기술</h3>\n<p><b>담당:</b> Python · FastText · NumPy · 자연어처리(NLP) · Cosine Similarity</p>\n<p><b>팀 프로젝트:</b> Next.js · React · Three.js · FastAPI</p>\n<h3>결과물</h3>\n<ul><li><a href=\"https://word-orbit-mu.vercel.app/\" target=\"_blank\" rel=\"noreferrer\">웹 게임 직접 해보기</a></li><li><a href=\"https://github.com/ssomda04/word-orbit\" target=\"_blank\" rel=\"noreferrer\">GitHub 소스코드</a></li><li><a href=\"https://word-orbit-production.up.railway.app/docs\" target=\"_blank\" rel=\"noreferrer\">Backend API 문서</a></li></ul>"
  },
  {
    "id": "project-07",
    "name": "DArTi · DART Filing AI Agent",
    "category": "Software",
    "status": "구현 기록",
    "summary": "기업 공시 AI 서비스의 API·사용자 화면 연결과 응답 검증 담당",
    "body": "<p><b>DArTi — 기업 공시자료를 질문으로 쉽게 찾아보고, 답변의 출처까지 확인할 수 있는 AI 서비스</b></p>\n<p><b>내 담당:</b> API / 화면 연결 / 서비스 평가</p>\n<h3>프로젝트 소개</h3>\n<p>기업의 재무제표나 사업보고서를 직접 뒤지지 않아도 “이 회사의 작년 매출은 얼마야?”처럼 질문하면, 공시에서 관련 정보를 찾아 답변과 출처를 보여주는 서비스입니다.</p>\n<h3>내가 맡은 역할</h3>\n<p><b>팀에서 다른 팀원이 개발한 공시 분석 기능이 실제 사용자 화면까지 이어지고, 답변이 제대로 나오는지 확인하는 일을 맡았습니다.</b></p>\n<h4>실제로 한 작업</h4>\n<ol><li><b>AI 답변과 출처를 화면에 연결</b> — 질문 API(<code>/api/ask</code>)의 답변과 출처 문서 정보(<code>source_documents</code>)가 사용자 화면까지 전달되도록 연결·검토했습니다. 답변뿐 아니라 어느 공시를 참고했는지 확인할 수 있도록 한 부분입니다.</li><li><b>질문·답변 기능 테스트</b> — 실제 공시 데이터에 질문을 던져 응답을 평가하고, Q02 등 Live Agent 평가 작업과 오류 확인에 참여했습니다. 예상대로 동작하지 않는 경우 원인을 추적하고 수정 사항을 검증했습니다.</li><li><b>팀별 기능 통합과 서비스 점검</b> — 공시를 읽고 데이터를 뽑는 파트, 질문을 분석해 답변하는 파트가 공통된 데이터 형식으로 연결되는지 확인했습니다. API 응답 형식과 서버·화면 연결을 점검했습니다.</li></ol>\n<h4>이 프로젝트에서 기른 역량</h4>\n<ul><li><b>API·서비스 연동:</b> AI 분석 결과를 실제 사용자가 확인할 수 있는 웹 서비스 기능으로 연결</li><li><b>테스트·디버깅:</b> 실제 질문과 데이터를 이용해 오류를 재현하고 수정 결과를 확인</li><li><b>데이터 신뢰성:</b> 답변의 숫자뿐 아니라 출처와 근거를 함께 전달하는 구조 이해</li><li><b>팀 협업:</b> 서로 다른 기능을 개발한 팀원들의 작업을 하나의 서비스로 통합</li></ul>\n<p><b>역할 구분:</b> 공시 XML 파싱이나 AI 질문 분석 기능 전체를 혼자 구현한 것이 아니라, 그 결과가 API·사용자 화면·평가 과정에서 제대로 연결되고 검증되도록 하는 팀 3 역할에 집중했습니다.</p>\n<h3>사용한 기술</h3>\n<p>Python · FastAPI · REST API · DART 공시 데이터 · 테스트 / Evaluation</p>\n<h3>결과물</h3>\n<ul><li><a href=\"https://github.com/adeomise/mirae-disclosure-agent.git\" target=\"_blank\" rel=\"noreferrer\">DArTi GitHub 프로젝트</a></li></ul>\n<h3>추가하면 좋은 자료</h3>\n<ul><li>내가 담당한 API·화면 연결 부분의 실제 실행 화면</li><li>담당 코드나 Pull Request 링크</li></ul>"
  },
  {
    "id": "project-08",
    "name": "PVD Deposition Rate Prediction | 반도체 증착률 예측",
    "category": "AI / ML",
    "status": "진행 기록",
    "summary": "PVD 공정 예측 프로젝트를 기획하고 학회원 참여 전 증착률 예측 과정을 직접 사전 검증",
    "body": "<p><b>반도체 박막을 만드는 공정 조건을 분석하고, AI로 증착률을 예측하는 프로젝트</b></p>\n<p><b>내 담당:</b> 프로젝트 직접 기획 · 공정 데이터 분석 · 증착률 예측</p>\n<h3>프로젝트 소개</h3>\n<p>반도체 박막 증착(PVD) 공정에서는 장비의 출력과 압력 등 조건에 따라 박막이 쌓이는 속도가 달라집니다. 공정 데이터를 분석하고 Machine Learning으로 <b>조건별 증착률(Deposition Rate)</b>을 예측해, 실제 실험 조건을 결정하는 데 활용하는 프로젝트입니다.</p>\n<h3>내가 맡은 역할</h3>\n<p><b>프로젝트 주제부터 진행 방식까지 직접 기획하고, 학회원들이 실제로 따라 할 수 있는 프로젝트인지 사전에 확인했습니다.</b> 공개 공정 데이터로 증착률 예측 과정을 먼저 진행해 보면서 데이터와 분석 방법을 점검하고, 그 경험을 바탕으로 학회원용 진행 흐름과 가이드를 준비했습니다.</p>\n<h4>실제로 한 작업</h4>\n<ol><li><b>프로젝트 기획</b> — 반도체 공정 중 PVD를 선정하고, 출력(Power)과 압력(Pressure)을 입력해 증착률을 예측하는 문제를 정의했습니다.</li><li><b>데이터 분석 및 직접 예측</b> — Sandia의 공개 Sputtering 데이터를 살펴보고, 공정 조건과 증착률 사이의 관계를 분석한 뒤 회귀 기반 방식으로 조건별 증착률을 예측했습니다.</li><li><b>예측값을 활용할 방법 설계</b> — 예측된 증착률을 바탕으로 원하는 박막 두께를 얻기 위해 필요한 증착 시간과 실험 조건(Recipe)을 결정하는 흐름을 구상했습니다.</li><li><b>학회원 참여 전 사전 검증</b> — 데이터 준비부터 예측값 산출까지의 과정을 직접 확인하고, 학회원들이 같은 흐름을 따라갈 때 필요한 입력 데이터·분석 단계·주의점을 점검했습니다.</li><li><b>프로젝트 진행 과정 설계</b> — 데이터 분석 → 모델 예측 → 실험 조건 선정 → 실제 측정 → 모델 보완 순서로 실행 단계를 정리하고, 참가자 가이드에 반영했습니다.</li></ol>\n<h4>이 프로젝트에서 기른 역량</h4>\n<ul><li><b>문제 정의 및 기획:</b> 공정 현장에서 활용할 수 있는 AI 프로젝트를 처음부터 설계하는 능력</li><li><b>Machine Learning:</b> 실제 산업 데이터를 바탕으로 물리적 특성을 예측하는 경험</li><li><b>데이터 분석:</b> 공정 조건과 예측 결과의 관계를 해석하는 능력</li><li><b>실무 연계:</b> 모델의 결과가 실험 계획과 공정 조건 선정에 어떻게 사용되는지 고민한 경험</li><li><b>사전 검증·교육 설계:</b> 다른 학회원도 프로젝트를 진행할 수 있도록 분석 절차를 먼저 확인하고 학습·실습 과정을 체계화</li></ul>\n<p><b>기록 범위:</b> 직접 기획한 내용과 공개 데이터 기반 분석·예측 경험을 중심으로 정리했습니다. 실제 장비의 Wet-lab 실험까지 모두 완료했다고 표현하지는 않았습니다.</p>\n<h3>사용한 기술</h3>\n<p>Python · Regression · PVD / Sputtering · Sandia Dataset · GPR·Bayesian Optimization(검토한 방법)</p>\n<h3>결과물 및 자료</h3>"
  },
  {
    "id": "project-09",
    "name": "PARROT Alumni Talk · Event Website",
    "category": "Community",
    "status": "구현 기록",
    "summary": "동문 연사 행사 홈페이지 기획·정보 구성·웹페이지 제작",
    "body": "<p><b>동문 연사 행사를 소개하고 참가자가 행사 정보를 편리하게 확인할 수 있도록 기획·제작한 웹사이트</b></p>\n<p><b>내 담당:</b> 행사 홈페이지 기획 · 정보 구성 · 웹페이지 제작</p>\n<h3>프로젝트 소개</h3>\n<p>학회 동문 연사 행사를 알리고, 참가자가 행사 취지와 필요한 안내를 한눈에 확인할 수 있도록 제작한 행사 홈페이지입니다.</p>\n<h3>내가 맡은 역할</h3>\n<p><b>행사 운영자의 관점에서 어떤 정보를 어떻게 보여주어야 하는지 기획하고, 이를 실제 웹사이트로 구현했습니다.</b> 단순히 페이지를 만드는 것을 넘어 행사에 관심 있는 사람이 핵심 정보를 빠르게 이해할 수 있도록 정보의 전달 순서를 고민했습니다.</p>\n<h4>실제로 한 작업</h4>\n<ol><li><b>행사 홈페이지 기획</b> — 행사 목적과 방문자에게 전달해야 할 내용을 정리하고 웹사이트의 역할과 구성 방향을 기획했습니다.</li><li><b>정보 구조와 사용자 흐름 구성</b> — 처음 방문하는 사람이 행사 소개와 필요한 안내를 자연스럽게 찾아볼 수 있도록 콘텐츠 배치와 페이지 흐름을 고민했습니다.</li><li><b>웹페이지 제작</b> — 행사 안내 콘텐츠를 웹에서 확인할 수 있도록 페이지를 제작하고 실제 홈페이지로 연결했습니다.</li><li><b>행사 운영과 연결</b> — 학회 행사 기획 경험을 바탕으로, 웹사이트를 오프라인 행사와 연결되는 정보 전달 수단으로 활용했습니다.</li></ol>\n<h4>이 프로젝트에서 기른 역량</h4>\n<ul><li><b>서비스 기획:</b> 사용자에게 필요한 정보를 파악해 웹페이지의 목적과 구조를 설계</li><li><b>Web Development:</b> 행사 안내 페이지를 실제 웹 결과물로 제작</li><li><b>UX / 정보 전달:</b> 방문자의 입장에서 내용을 빠르고 이해하기 쉽게 배치</li><li><b>운영·커뮤니케이션:</b> 학회 행사 기획과 온라인 안내 채널을 연계</li></ul>\n<h3>사용한 기술</h3>\n<p>Web Planning · HTML · CSS · JavaScript</p>\n<h3>결과물</h3>\n<ul><li><a href=\"https://parrot-alumni-2026.netlify.app/\" target=\"_blank\" rel=\"noreferrer\">동문 연사 행사 홈페이지 열기</a></li></ul>"
  },
  {
    "id": "project-10",
    "name": "Pipe Flow Puzzle · Water Connection Game",
    "category": "Games",
    "status": "구현 기록",
    "summary": "파이프를 이어 물길을 완성하는 퍼즐 게임",
    "body": "<p><b>파이프를 이어 물길을 완성하는 퍼즐 게임</b></p>\n<h3>What I worked on</h3>\n<p>파이프를 연결해 물이 흘러가도록 만드는 게임을 직접 제작. 경로탐색 방식이나 언어/엔진은 이전 구현 원문이 확인되지 않아 단정하지 않음.</p>\n<h3>Tools &amp; Methods</h3>\n<p>게임 로직 · 언어 미확인</p>\n<h3>Evidence / Deliverables</h3>\n<p>게임 프로젝트(캡처·코드 링크 추가 필요)</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-11",
    "name": "Metal Plate Defect Classification",
    "category": "AI / ML",
    "status": "구현 기록",
    "summary": "표 형태 특성 데이터로 금속판 결함 종류 분류",
    "body": "<p><b>표 형태 특성 데이터로 금속판 결함 종류 분류</b></p>\n<h3>What I worked on</h3>\n<p>27개 입력 Feature에서 7가지 결함 유형을 구분하는 문제. 전처리, 모델 구조, Dropout 및 Batch Size 조정과 K-fold 검증을 진행.</p>\n<h3>Tools &amp; Methods</h3>\n<p>Classification, Neural Network, K-fold, Scaling, Confusion Matrix</p>\n<h3>Evidence / Deliverables</h3>\n<p>분류 모델 실험·평가 기록</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-12",
    "name": "Alos · 3D Printed Mobile Robot",
    "category": "Robotics",
    "status": "구현 기록",
    "summary": "마스코트형 이동로봇 기구 설계 및 실물 출력",
    "body": "<p><b>마스코트형 이동로봇 기구 설계 및 실물 출력</b></p>\n<h3>What I worked on</h3>\n<p>머리·몸통·발 구조 설계, 바퀴·모터·LCD 고정부 구성, 나사 구멍 여유와 조립 강도를 고려한 출력물 수정.</p>\n<h3>Role / Contribution</h3>\n<p>3D 모델링 및 구조 검토, 출력 후 결합부 수정 논의. 완성된 자율주행 동작은 별도 확인이 필요.</p>\n<h3>Tools &amp; Methods</h3>\n<p>Blender, Meshy, 3MF/STL, 3D Printing, Motor, TFT LCD</p>\n<h3>Evidence / Deliverables</h3>\n<p>3MF/STL 모델, 출력물, 조립 구조</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-13",
    "name": "Car Company Relational Database",
    "category": "Software",
    "status": "구현 기록",
    "summary": "자동차 회사 업무 데이터를 관리하는 관계형 DB",
    "body": "<p><b>자동차 회사 업무 데이터를 관리하는 관계형 DB</b></p>\n<h3>What I worked on</h3>\n<p>ERD와 논리 스키마 설계, BCNF 정규화, MySQL과 C/C++ 기반 DB 활용 프로그램 작성.</p>\n<h3>Tools &amp; Methods</h3>\n<p>MySQL, ERD, Relational Schema, BCNF, C/C++</p>\n<h3>Evidence / Deliverables</h3>\n<p>SQL 스키마·응용 코드·설계자료</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-14",
    "name": "MyShell · UNIX Command Shell",
    "category": "Software",
    "status": "구현 기록",
    "summary": "Process·Pipeline·Job Control을 구현한 UNIX Shell",
    "body": "<p><b>Process·Pipeline·Job Control을 구현한 UNIX Shell</b></p>\n<h3>What I worked on</h3>\n<p>명령 실행 및 Redirect, Pipe, Process Group과 Job Control을 구현하는 Phase 1~3 Shell Programming 프로젝트.</p>\n<h3>Tools &amp; Methods</h3>\n<p>C, fork, execvp, pipe, dup2, setpgid</p>\n<h3>Evidence / Deliverables</h3>\n<p>Shell 코드 및 단계별 구현 기록</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-15",
    "name": "DArt-B × PARROT · Datathon",
    "category": "Community",
    "status": "진행 기록",
    "summary": "연합 데이터톤의 기획·운영 및 과제 설계",
    "body": "<p><b>연합 데이터톤의 기획·운영 및 과제 설계</b></p>\n<h3>What I worked on</h3>\n<p>데이터 분석 → 인사이트 → 문제정의 → 아이데이션 → MVP → 발표를 연결하는 연합 데이터톤 기획. 90일 매출 예측·우선순위 결정 MVP 과제 및 참가자 안내 준비.</p>\n<h3>Role / Contribution</h3>\n<p>PARROT 학회장으로 진행·협찬·참가자 배포 문서·행사 운영 업무.</p>\n<h3>Tools &amp; Methods</h3>\n<p>Data Science, ML Challenge, Event Planning, MVP</p>\n<h3>Evidence / Deliverables</h3>\n<p>데이터톤 안내문·주제 자료·예산·행사 운영 기록</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-16",
    "name": "ReadMap · Research Reading Route",
    "category": "Software",
    "status": "진행 기록",
    "summary": "논문 인용 관계를 분석해 읽기 순서와 추천 이유를 제시하는 1인 개발 서비스",
    "body": "<p><b>ReadMap — 어떤 논문부터 읽어야 할지 알려주는 논문 읽기 순서 추천 서비스</b></p>\n<p><b>내 역할:</b> 1인 개발 · 논문 데이터 수집 · 추천 알고리즘 구현 · 웹 화면 구성</p>\n<h3>프로젝트 소개</h3>\n<p>처음 접하는 연구 분야에서는 중요한 논문이 많아도 어떤 순서로 읽어야 할지 알기 어렵습니다. ReadMap은 논문들의 <b>인용 관계와 연구 정보</b>를 분석해, 기초 논문부터 핵심 연구까지 읽을 순서를 추천하고 <b>왜 이 논문을 먼저 읽어야 하는지</b> 설명하는 서비스입니다.</p>\n<h3>내가 맡은 역할</h3>\n<p><b>논문을 검색하는 기능에서 나아가, 논문 사이의 관계를 분석해 학습자가 따라갈 수 있는 읽기 경로를 제안하는 기능을 직접 설계·개발했습니다.</b></p>\n<h4>실제로 한 작업</h4>\n<ol><li><b>논문 데이터 수집</b> — OpenAlex와 Semantic Scholar 등의 논문 정보 서비스를 활용해 제목·발행 연도·인용 수·참고문헌 등 필요한 데이터를 수집하고 정리했습니다.</li><li><b>논문 간 관계 분석</b> — 어떤 논문이 다른 논문을 인용하는지 연결하고, 연구 분야에서 기초가 되거나 중요도가 높은 논문을 구분할 수 있도록 점수를 계산했습니다.</li><li><b>읽기 순서 추천 기능 구현</b> — 논문의 역할과 인용 관계를 바탕으로 Beginner / Core / Fast처럼 목적에 따른 읽기 경로를 만들었습니다. 실제로 Long Short-Term Memory 관련 논문의 참고문헌 49개를 수집하고 추천 경로 데이터를 생성해 실행 결과를 확인했습니다.</li><li><b>추천 이유 설명 및 화면 구성</b> — 단순히 논문 목록을 나열하지 않고, 추천 순서와 그 이유를 보여주는 방식으로 결과를 구성하고 웹 화면을 개발했습니다.</li></ol>\n<h4>이 프로젝트에서 기른 역량</h4>\n<ul><li><b>데이터 수집·정리:</b> 외부 API에서 받은 서로 다른 논문 정보를 서비스에서 활용할 수 있는 데이터로 가공</li><li><b>추천 알고리즘:</b> 논문 간 연결 관계와 중요도를 활용해 읽기 순서를 결정하는 로직 구현</li><li><b>문제 해결:</b> 단순 검색 결과를 사용자에게 도움이 되는 학습 경로로 바꾸는 기능 기획</li><li><b>Full-stack 개발:</b> 데이터 처리·추천 기능과 사용자가 결과를 확인하는 웹 화면을 연결</li></ul>\n<p><b>구현 범위:</b> 논문 메타데이터 및 인용 관계를 바탕으로 한 규칙 기반 추천 기능과 읽기 경로 생성이 확인된 작업입니다. 실제 논문 내용을 이해하는 생성형 AI의 완성된 추천 성능이나 외부 공개 배포까지 완료했다고 표현하지 않았습니다.</p>\n<h3>사용한 기술</h3>\n<p>Python · React · TypeScript · OpenAlex · Semantic Scholar · Graph / Recommendation Logic</p>\n<h3>결과물</h3>\n<ul><li>논문 인용관계 분석 및 읽기 순서 추천 로직</li><li>Beginner / Core / Fast Reading Route 데이터</li><li>추천 이유를 포함한 웹 화면 개발 기록</li></ul>\n<p><a href=\"https://github.com/adeomise/readmap.git\" target=\"_blank\" rel=\"noreferrer\">https://github.com/adeomise/readmap.git</a></p>"
  },
  {
    "id": "project-17",
    "name": "LaneSense · Low-cost Lane Perception",
    "category": "Robotics",
    "status": "구현 기록",
    "summary": "저연산 환경의 실시간 차선 인식 파이프라인",
    "body": "<p><b>저연산 환경의 실시간 차선 인식 파이프라인</b></p>\n<h3>What I worked on</h3>\n<p>차량 영상에 Grayscale, Gaussian Blur, Canny Edge, ROI, HoughLinesP를 적용해 좌·우 차선을 검출하고 FPS 및 처리 시간을 측정한 프로젝트.</p>\n<h3>Role / Contribution</h3>\n<p>영상처리 구현과 실행 결과 분석 기록이 확인됨.</p>\n<h3>Tools &amp; Methods</h3>\n<p>Raspberry Pi 4, Camera V2, Python, OpenCV</p>\n<h3>Evidence / Deliverables</h3>\n<p>차선 검출 결과 화면, Python 코드, 측정 로그</p>\n<p><a href=\"https://github.com/adeomise-ai/LaneSense\" target=\"_blank\" rel=\"noreferrer\">원본 문서·코드·프로젝트 자료 열기</a></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-18",
    "name": "Pintos Operating System",
    "category": "Software",
    "status": "구현 기록",
    "summary": "Thread Scheduler와 동기화 및 시스템콜 구현",
    "body": "<p><b>Thread Scheduler와 동기화 및 시스템콜 구현</b></p>\n<h3>What I worked on</h3>\n<p>Alarm Clock, Sleep List, Priority Scheduling, Semaphore, BSD Scheduling, Argument Passing, File Descriptor 및 System Calls의 구현·테스트 과제.</p>\n<h3>Tools &amp; Methods</h3>\n<p>C, Linux, OS Threads, Scheduling, Synchronization</p>\n<h3>Evidence / Deliverables</h3>\n<p>C 코드, make check 결과와 프로젝트 보고서</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-19",
    "name": "Ethereum News Automation",
    "category": "Software",
    "status": "진행 기록",
    "summary": "이더리움 관련 뉴스를 수집·정리하는 자동화",
    "body": "<p><b>이더리움 관련 뉴스를 수집·정리하는 자동화</b></p>\n<h3>What I worked on</h3>\n<p>뉴스 데이터 크롤링과 JSON/Excel 변환 및 처리 자동화 기록. 최종 실행·배포 범위는 확인 필요.</p>\n<h3>Tools &amp; Methods</h3>\n<p>Selenium, JSON, Excel, Python</p>\n<h3>Evidence / Deliverables</h3>\n<p>스크립트·데이터 파일 관련 기록</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-20",
    "name": "News Big Data · Children's Learning Service",
    "category": "AI / ML",
    "status": "기획·설계",
    "summary": "사건·사고 뉴스의 아동 교육 콘텐츠 활용 서비스 구상",
    "body": "<p><b>사건·사고 뉴스의 아동 교육 콘텐츠 활용 서비스 구상</b></p>\n<h3>What I worked on</h3>\n<p>뉴스 빅데이터를 교육용 콘텐츠로 재구성하는 아이디어로, 텍스트 분류·중복제거·뉴스 API 적용 방안을 검토한 기획.</p>\n<h3>Tools &amp; Methods</h3>\n<p>News API, NLP, Text Classification, Duplicate Detection</p>\n<h3>Evidence / Deliverables</h3>\n<p>공모전 아이디어 및 서비스 기획 기록</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-21",
    "name": "SO-ARM 로봇팔 제작·모방학습",
    "category": "Robotics",
    "status": "구현 기록",
    "summary": "SO-101 로봇팔 제작·모터 보정·원격 조작부터 LeRobot 데이터 수집, ACT 학습과 Follower 자율 실행까지",
    "body": "<p><b>오픈소스 3D 프린팅 로봇팔을 제작하고, 사람이 조작한 동작을 AI가 학습해 스스로 수행하도록 연결한 프로젝트</b></p>\n<p><b>프로젝트:</b> 2025 MECHA × PARROT 연합 로보틱스 · SO-ARM 계열 로봇팔</p>\n<p><b>작업 범위:</b> Leader / Follower 로봇팔 제작 · 모터 보정 · 원격 조작 · 데이터 수집 · 모방학습 · 자율 실행</p>\n<h3>프로젝트 소개</h3>\n<p>로봇팔을 단순히 조립하는 데서 끝내지 않고, <b>사람이 움직여 보여준 동작을 로봇이 학습하고 스스로 따라 하도록 만드는 것</b>을 목표로 진행한 로보틱스 프로젝트입니다.</p>\n<p>공개된 <b>SO-ARM100</b> 프로젝트의 <a href=\"https://github.com/TheRobotStudio/SO-ARM100?tab=readme-ov-file#printing-the-parts\" target=\"_blank\" rel=\"noreferrer\">로봇팔 3D 프린팅 부품 안내</a>를 제작 참고 자료로 삼았습니다. 실제 작업 기록에는 SO-101 계열 <b>Leader(사람이 조작하는 팔)와 Follower(명령을 받아 움직이는 팔)</b>를 구축한 내용이 남아 있습니다.</p>\n<p><b>전체 흐름:</b> 로봇팔 제작 → 모터 설정·보정 → Leader로 원격 조작 → 동작 데이터 기록 → ACT 모방학습 → Follower 자율 실행</p>\n<h3>프로젝트에서 진행한 작업</h3>\n<h4>1. 로봇팔 제작과 하드웨어 구성</h4>\n<ul><li>3D 프린팅 가능한 오픈소스 로봇팔 구조를 참고하고 SO-101 Leader·Follower 로봇팔을 제작했습니다.</li><li>구동을 위한 모터의 ID를 설정하고, 각 관절의 기준 위치를 맞추는 Calibration을 진행했습니다.</li><li>로봇 동작을 관찰하고 학습에 활용할 수 있도록 전면 카메라를 연결했습니다.</li></ul>\n<h4>2. Leader–Follower 원격 조작</h4>\n<ul><li>사람이 Leader 팔을 움직이면 Follower 팔이 해당 움직임을 따라가는 <b>Teleoperation</b> 환경을 구축했습니다.</li><li>관절 움직임과 로봇의 반응을 확인해 이후 학습용 동작 시연을 수집할 기반을 마련했습니다.</li></ul>\n<h4>3. 로봇 동작 데이터 수집</h4>\n<ul><li><b>LeRobot</b> 환경에서 원격 조작으로 생성된 시연 동작을 기록하는 파이프라인을 실행했습니다.</li><li>카메라 영상과 로봇의 상태·동작 데이터를 기반으로 Demonstration Episode를 저장했습니다.</li><li>단순 제어를 넘어 <b>학습 가능한 형태로 실제 로봇 동작을 데이터화</b>하는 과정을 경험했습니다.</li></ul>\n<h4>4. 모방학습 모델 학습과 자율 실행</h4>\n<ul><li>수집한 시연 데이터를 사용해 <b>ACT(Action Chunking Transformer)</b> 기반 모방학습을 진행했습니다.</li><li>학습된 모델을 Follower에 연결해, Leader 팔 없이도 모델의 추론 결과로 동작하는 단계까지 확인했습니다.</li><li>하드웨어 제작부터 데이터 수집·AI 학습·실제 로봇 동작까지 하나의 흐름으로 연결했습니다.</li></ul>\n<h3>내가 참여한 역할</h3>\n<p><b>MECHA와 PARROT이 함께 진행한 연합 프로젝트</b>로, 로봇팔 하드웨어와 AI 학습을 연결하는 전체 제작·실습 과정에 참여했습니다. PARROT 측에서는 프로젝트와 부품 관련 내용을 정리하고 다른 참여자들과 협업하는 역할도 수행했습니다.</p>\n<p>위 단계들은 프로젝트의 <b>확인된 팀 수행 내용</b>입니다. 3D 출력 부품의 개별 모델링, 모든 모터 조립, ACT 모델 코드 구현을 혼자 전담했다고 단정하지 않았습니다.</p>\n<h3>결과물</h3>\n<div class=\"source-table\"><table><thead><tr><th>항목</th><th>확인된 진행 내용</th></tr></thead><tbody><tr><td>하드웨어</td><td>SO-101 Leader·Follower 제작</td></tr><tr><td>초기 설정</td><td>Motor ID 설정 및 Calibration</td></tr><tr><td>영상 입력</td><td>전면 카메라 연결</td></tr><tr><td>원격 조작</td><td>Leader–Follower Teleoperation 동작</td></tr><tr><td>데이터 수집</td><td>LeRobot 시연 동작 기록</td></tr><tr><td>AI 학습</td><td>ACT 기반 모방학습 실행</td></tr><tr><td>자율 동작</td><td>Leader 없이 Follower 추론 동작 확인</td></tr></tbody></table></div>\n<h3>이 프로젝트에서 기른 역량</h3>\n<ul><li><b>로봇 하드웨어 이해:</b> 3D 프린팅 기반 구조, 모터, 관절 설정과 조립 과정을 실제 시스템으로 연결하는 경험</li><li><b>로봇 제어:</b> 원격 조작과 관절 보정이 실제 움직임에 어떤 영향을 주는지 이해</li><li><b>Physical AI:</b> 실제 로봇의 움직임을 데이터로 기록하고 모델 학습과 추론으로 연결하는 능력</li><li><b>실험 파이프라인 구축:</b> 하드웨어 → 카메라·제어 → 데이터셋 → AI 학습 → 실행까지의 단계별 검증</li><li><b>협업 및 프로젝트 운영:</b> 연합 활동에서 하드웨어·소프트웨어 진행 상황과 부품 관련 내용을 공유·조정하는 경험</li></ul>\n<h3>사용한 기술 및 방법</h3>\n<p>SO-ARM100 / SO-101 · 3D Printing · Leader–Follower · Motor Calibration · Teleoperation · LeRobot · Demonstration Dataset · ACT · Imitation Learning</p>\n<h3>참고 자료 · 결과물 연결</h3>\n<ul><li><a href=\"https://github.com/TheRobotStudio/SO-ARM100\" target=\"_blank\" rel=\"noreferrer\">TheRobotStudio — SO-ARM100 오픈소스 프로젝트</a></li><li><a href=\"https://github.com/TheRobotStudio/SO-ARM100?tab=readme-ov-file#printing-the-parts\" target=\"_blank\" rel=\"noreferrer\">SO-ARM100 — 3D 프린팅 부품 안내</a></li></ul>\n<p><span class=\"source-note\">위 GitHub는 제작에 참고한 외부 오픈소스 프로젝트로, 개인이 직접 작성한 저장소가 아닙니다. 최신 저장소의 세부 출력 설정·부품 규격은 별도 확인이 필요합니다.</span></p>\n<h3>후속 탐구 — 우주항공 로봇 작업으로 확장</h3>\n<p>완성한 로봇팔과 모방학습 환경을 바탕으로, <b>위성 부품 회수·정비용 모듈 제거·정지 위성 모형 포획</b>처럼 우주항공 정비에 연결할 수 있는 작업을 연구 주제로 검토했습니다. 추가로 영상 기반 정렬 보정과 유연한 손목 구조를 이용해 부품을 당길 때 걸리는 현상을 줄이는 방향도 설계했습니다.</p>\n<p>이는 <b>기존 로봇팔의 제작·학습 완료 기록과 구분되는 후속 연구 구상</b>이며, 우주 환경에서의 실제 검증 결과를 의미하지 않습니다.</p>"
  },
  {
    "id": "project-22",
    "name": "SIT Paper Study · SearchArena",
    "category": "Research",
    "status": "스터디·발표",
    "summary": "실사용자 검색 AI 응답 선호와 인용 평가 논문 분석",
    "body": "<p><b>실사용자 검색 AI 응답 선호와 인용 평가 논문 분석</b></p>\n<h3>What I worked on</h3>\n<p>SearchArena의 User Intent, 다국어 대화, Bradley–Terry 점수, Claim–Citation Pair 및 검색 AI의 평가 방식 논문 스터디.</p>\n<h3>Role / Contribution</h3>\n<p>Sogang Intelligence Team 논문 분석·발표. 독립 논문 출판과 구별.</p>\n<h3>Tools &amp; Methods</h3>\n<p>LLM Evaluation, Bradley–Terry, User Preference, Citation</p>\n<h3>Evidence / Deliverables</h3>\n<p>논문 발표자료·예상질문 정리</p>\n<p><span class=\"source-note\">공개 가능한 GitHub / Demo / PDF 링크는 아직 확인되지 않았습니다. 자료가 있으면 이 항목과 &#39;자료 링크&#39; 속성에 추가할 수 있습니다.</span></p>\n<h3>Notes</h3>\n<ul><li>실제 완료한 범위와 계획 중인 범위는 구분해 기록합니다.</li><li>이미지·스크린샷·본인 담당 역할을 나중에 보강할 수 있습니다.</li></ul>"
  },
  {
    "id": "project-23",
    "name": "AI Fire Detection Drone | 화재 탐지 드론",
    "category": "Robotics",
    "status": "진행 기록",
    "summary": "화재탐지 드론 프로젝트 기획 및 학회원 참여 전 기술·부품·검증 절차 사전 점검",
    "body": "<p><b>드론 영상에서 화재·연기를 찾아내고, 탐지 결과를 드론 이동과 소화 페이로드 투하에 연결하는 프로젝트</b></p>\n<p><b>내 담당:</b> 프로젝트 기획·운영 · AI 탐지 방식 검토 · 전체 개발 흐름과 역할 분담</p>\n<h3>프로젝트 소개</h3>\n<p>드론 카메라 영상에서 AI가 화재나 연기를 발견하면, 그 위치 정보를 바탕으로 기체를 움직이고 소화용 페이로드를 투하하는 시스템을 만드는 프로젝트입니다.</p>\n<h3>내가 맡은 역할</h3>\n<p><b>AI 화재 탐지부터 드론 제어까지 이어지는 전체 방향을 기획하고, 학회원들이 원활하게 개발을 시작할 수 있도록 필요한 데이터·장비·단계를 사전에 검토했습니다.</b> 구현 과정에서 막힐 수 있는 연결 지점과 검증 순서를 먼저 정리해 팀별 가이드에 반영했습니다.</p>\n<h4>실제로 한 작업</h4>\n<ol><li><b>화재 탐지 모델 학습 방향 정리</b> — YOLO 모델을 활용해 화재·연기를 인식하는 방법을 검토하고, FLAME을 중심으로 D-Fire 데이터셋을 보완하는 방향을 잡았습니다.</li><li><b>실시간 탐지 구조 기획</b> — 스마트폰 카메라 영상을 Wi-Fi로 노트북에 전송하고, 노트북이 영상에서 화재 위치를 탐지하도록 시스템 흐름을 설계했습니다.</li><li><b>드론 이동과 투하 구조 검토</b> — 탐지한 화재의 위치를 제어 명령으로 바꾸고, ESP32·비행 컨트롤러·서보모터로 페이로드를 투하하는 과정을 연결하는 방식을 검토했습니다.</li><li><b>학회원 참여 전 사전 검증</b> — 화재 탐지 모델 학습에 필요한 데이터 준비, 스마트폰 영상 연결 방법, 드론 제어 장치 및 부품 구성을 미리 검토하고 단계별 테스트 항목을 정리했습니다.</li><li><b>개발 일정과 역할 분담</b> — 소프트웨어, 하드웨어, 통합 테스트로 작업을 나누고 학회원용 가이드와 3D 프린팅 부품 제작 계획을 정리했습니다.</li></ol>\n<h4>이 프로젝트에서 기른 역량</h4>\n<ul><li><b>Computer Vision:</b> 영상 인식 AI가 실제 하드웨어에서 활용되는 방식 이해</li><li><b>시스템 설계:</b> 카메라·AI·제어 장치·모터를 하나의 흐름으로 연결하는 설계 능력</li><li><b>프로젝트 기획:</b> 목표를 단계별 작업으로 나누고 기술적 구현 가능성을 검토</li><li><b>협업:</b> 팀별 역할과 검증 순서를 정리하고 개발을 조율하는 경험</li><li><b>사전 검증·교육 준비:</b> 참여자가 처음부터 시행착오를 줄일 수 있도록 데이터·장비·작업 흐름을 먼저 확인하고 안내자료로 정리</li></ul>\n<p><b>진행 범위:</b> 자동 이동과 페이로드 투하는 최종 구현 목표이며, 드론의 전체 기능을 실물로 통합 실증했다고 표현하지는 않았습니다.</p>\n<h3>사용한 기술</h3>\n<p>YOLO · Python · OpenCV · FLAME / D-Fire · ESP32 · INAV · Servo Motor</p>\n<h3>결과물 및 자료</h3>"
  },
  {
    "id": "project-24",
    "name": "패션 이미지 기반 향수 추천",
    "category": "AI / ML",
    "status": "진행 기록",
    "summary": "패션 사진을 분석해 6개 스타일로 분류하고, 향조·향수 설명과 연결해 어울리는 향수 5개 추천",
    "body": "<p><b>패션 사진 한 장을 분석해 어울리는 향수를 추천하는 AI 시스템</b></p>\n<p><b>프로젝트 성격:</b> 딥러닝 팀 프로젝트 · 이미지 분류와 향수 추천 기능 구현·비교</p>\n<h3>프로젝트 소개</h3>\n<p>옷차림을 보고 스타일을 판단하듯, <b>패션 이미지에서 스타일을 추출해 그 분위기에 어울리는 향수를 추천</b>하는 프로젝트입니다. 옷 사진 한 장을 입력하면 AI가 스타일을 분석하고, 향수의 향조·설명 정보를 활용해 어울리는 향수 5개를 제안하는 흐름을 만들었습니다.</p>\n<h3>프로젝트에서 진행한 작업</h3>\n<ol><li><b>패션·향수 데이터 정리</b> — Kaggle의 패션 상품 이미지와 메타데이터를 정리하고, Fragrantica 기반 향수 데이터의 향조 및 설명 정보를 추천에 사용할 수 있는 형태로 가공했습니다.</li><li><b>패션 스타일 분류</b> — 옷차림을 캐주얼·포멀·스포티·스트리트·로맨틱·빈티지의 <b>6개 스타일</b>로 분류하는 모델을 구성했습니다. 직접 설계한 CNN과 ResNet18, EfficientNet-B0를 비교했습니다.</li><li><b>스타일과 향수 연결</b> — 스타일별 분위기를 꽃향·강렬한 향·자연스러운 향 등 <b>5개 향조 그룹</b>과 연결하는 매핑 기준을 설계해, 단순 이미지 분류 결과가 실제 향수 추천으로 이어지도록 했습니다.</li><li><b>추천 결과 보정</b> — 이미지와 텍스트의 의미적 관련성을 비교하는 <b>CLIP</b>을 활용해 패션 이미지와 향수 설명을 연결하고 추천 점수를 보완했습니다.</li><li><b>추천 결과 시연·비교</b> — 실제 옷 사진을 입력해 스타일 판단부터 상위 5개 향수 추천까지 시연하고, CNN 구조에 따른 추천 결과를 Recall@3·NDCG@5로 비교했습니다.</li></ol>\n<h3>결과물</h3>\n<ul><li>패션 이미지 입력 → 스타일 분류 → 향조 매칭 → CLIP 보정 → <b>향수 5개 추천</b>까지 연결되는 처리 흐름</li><li>CNN, EfficientNet-B0, ResNet18 모델별 추천 결과와 시연 화면</li><li>6개 스타일과 5개 향조의 연결 기준 및 추천 결과 평가 자료</li></ul>\n<h3>이 프로젝트에서 기른 역량</h3>\n<ul><li><b>딥러닝 응용:</b> 이미지 분류 모델을 일상적인 추천 서비스로 연결하는 방법</li><li><b>다중 데이터 결합:</b> 이미지와 향수 설명처럼 형식이 다른 데이터를 하나의 추천 문제로 결합</li><li><b>추천 시스템 설계:</b> 사용자의 스타일을 해석하고 어울리는 아이템을 선정하는 점수 체계 구성</li><li><b>실험·평가:</b> 여러 모델의 결과를 비교하고 추천 품질을 검토하는 경험</li></ul>\n<h3>사용한 기술</h3>\n<p>Python · CNN · ResNet18 · EfficientNet-B0 · CLIP · 이미지 분류 · 추천 시스템</p>\n<h3>참고 자료</h3>\n<ul><li>팀 발표자료: <b>「패션 데이터 기반 향수 추천 모델」</b> (17페이지)</li><li>패션 데이터: Kaggle Fashion Product Images</li><li>향수 데이터: Fragrantica 기반 전처리 데이터</li></ul>\n<p><span class=\"source-note\">팀 발표자료에 개인별 세부 역할 분담은 기재되어 있지 않아, 위 작업은 팀 프로젝트 전체의 수행 내용으로 정리했습니다. 개인 담당 범위가 확인되면 별도로 강조할 수 있습니다.</span></p>"
  },
  {
    "id": "project-25",
    "name": "우주항공 발사체 소음 대응 | 음압 감응형 공명 벤트",
    "category": "Engineering",
    "status": "진행 기록",
    "summary": "위성 발사 환경의 소음 문제에서 착안해 감지막·걸쇠·스포일러 작동을 Python 수치 시뮬레이션으로 검증",
    "body": "<p><b>우주항공·위성 발사 환경의 소음 문제에서 출발한 기계식 소음 저감 장치 설계 프로젝트</b></p>\n<p><b>내 담당:</b> 동역학 모델링 · Python 수치 시뮬레이션 · 작동 가능성·민감도 검증</p>\n<p><b>작품명:</b> 음압 감응형 공명 대역 전환 벤트</p>\n<h3>프로젝트를 시작한 이유</h3>\n<p>우주왕복선이나 위성을 우주로 운반하는 발사체는 상승 과정에서 강한 소음과 진동에 노출됩니다. 특히 특정 배출구(Vent) 구조에서는 특정 주파수의 소리가 크게 발생해 탑재 장비의 음향·진동 환경에 문제가 될 수 있습니다.</p>\n<p>NASA의 우주왕복선 탑재실 Vent 관련 보고서에는 천음속 상승 중 배출구 소음이 문제가 되었고, 풍동시험에서 약 <b>300 Hz</b>의 강한 소음이 재현된 사례가 소개되어 있습니다. 이 사례에서 착안해, <b>전자 센서나 모터 없이 특정 소리에 반응하여 소음 저감 대역을 바꾸는 장치</b>를 제안했습니다.</p>\n<p><span class=\"source-note\">우주항공 발사 환경의 문제에서 출발한 개념 설계이며, 실제 위성 또는 발사체에 장착해 시험한 프로젝트는 아닙니다.</span></p>\n<h3>어떤 장치를 만들고자 했는가?</h3>\n<p>소리가 강해지면 얇은 감지막이 진동하고, 그 움직임으로 걸쇠가 풀립니다. 미리 에너지를 저장한 스프링이 스포일러를 펼치면 기어와 캠이 셔터를 이동시킵니다. 셔터가 열리면서 공명기 내부에 연결되는 공간이 늘어나고, 소음을 줄이는 주파수 대역이 달라지는 구조입니다.</p>\n<p><b>작동 흐름:</b> 음압 감지 → 감지막 진동 → 걸쇠 해제 → 스프링으로 스포일러 전개 → 셔터 이동 → 공명 대역 전환</p>\n<h3>내가 맡은 역할 — Simulation / Numerical Analysis</h3>\n<p><b>제 역할은 설계한 기구가 실제로 움직일 수 있는지를 수치해석으로 확인하는 일이었습니다.</b> CAD로 형상을 그리는 것과 별개로, 어느 정도의 소리가 있어야 걸쇠가 풀리는지, 실제로 스포일러와 셔터가 끝까지 움직이는지, 어떤 조건에서 작동에 실패하는지를 계산했습니다.</p>\n<h4>실제로 한 작업</h4>\n<ol><li><b>기계 구조의 계산 모델 구성</b> — 감지막의 질량·강성·감쇠, 레버와 슬라이더의 운동, 걸쇠의 마찰, 스프링 토크, 회전부의 질량·관성 등을 수치 모델의 입력으로 정리했습니다.</li><li><b>소리에 대한 감지막의 반응 분석</b> — 약 300 Hz의 음압이 작용할 때 감지막이 얼마나 움직이는지 확인하고, 그 움직임으로 걸쇠를 해제할 수 있는 조건을 검토했습니다.</li><li><b>걸쇠 해제와 전개 과정 시뮬레이션</b> — Python 기반 동역학 계산으로 소리 입력 이후 걸쇠가 언제 풀리는지, 스포일러가 목표 각도까지 회전하는지, 그 결과 셔터가 필요한 만큼 이동하는지를 확인했습니다.</li><li><b>마찰·구동 효율에 따른 실패 조건 분석</b> — 걸쇠 및 이동부의 마찰, 기어 전달 효율 등을 바꾸어 계산하고, 단순히 작동한다는 결과뿐 아니라 <b>어떤 조건에서 끝까지 작동하지 않는지</b>도 확인했습니다.</li><li><b>설계 검증과 개선 방향 정리</b> — 계산 결과를 바탕으로 걸쇠와 밀봉부의 저항, 스프링 구동력, 기어·가이드 마찰이 설계에 미치는 영향을 정리하고 보완이 필요한 부분을 도출했습니다.</li></ol>\n<h3>시뮬레이션으로 확인한 결과</h3>\n<p>아래 결과는 작품설명서에 정리된 <b>가정된 입력·재료·마찰 조건에서의 계산 결과</b>입니다.</p>\n<div class=\"source-table\"><table><thead><tr><th>확인 항목</th><th>계산 결과</th></tr></thead><tbody><tr><td>대표 소음 입력</td><td>300 Hz, 감지막 양면의 압력차 최대 10 Pa, 입력 시간 0.1초</td></tr><tr><td>감지막 반응</td><td>1차 고유진동수 약 267.3 Hz; 300 Hz·1 Pa에서 중심 변위 진폭 약 2.93 μm</td></tr><tr><td>걸쇠 해제</td><td>마찰계수 0.05에서 약 31.7 ms, 0.10에서 약 57.1 ms</td></tr><tr><td>스포일러 전개</td><td>두 마찰 조건에서 약 225°까지 회전</td></tr><tr><td>전개 완료 시점</td><td>각각 약 554.3 ms, 579.7 ms</td></tr><tr><td>셔터 이동</td><td>추가 공동을 연결하는 위치까지 4 mm 이동</td></tr></tbody></table></div>\n<ul><li><b>소리를 가하지 않은 조건</b>에서는 걸쇠가 잠긴 상태를 유지했습니다.</li><li><b>소리를 가한 기준 조건</b>에서는 걸쇠가 해제되고 스프링 구동으로 목표 회전각과 셔터 이동량에 도달했습니다.</li><li>다만 가이드 마찰을 높이거나 기어 전달 효율을 낮추자 스포일러가 목표 각도에 도달하지 못했습니다. 따라서 단순한 성공 판정이 아니라 <b>구동 저항이 중요한 설계 변수</b>라는 점을 확인했습니다.</li></ul>\n<h4>팀 작품 전체의 추가 해석 결과</h4>\n<p>제가 담당한 동역학 시뮬레이션과 별개로, 팀 작품설명서에는 소음 저감 및 배출 성능을 검토한 결과도 포함되어 있습니다.</p>\n<ul><li><b>공명 대역 전환:</b> 기본 공동에서는 저감 효과가 큰 주파수가 약 402 Hz였고, 셔터를 열어 추가 공동을 연결한 경우 약 284 Hz로 이동했습니다.</li><li><b>음향 응답:</b> 추가 공동을 연결한 조건에서 300 Hz의 삽입손실은 약 1.43 dB로 계산됐습니다.</li><li><b>배출 성능:</b> 스포일러의 자세에 따른 유량을 비교해 소음을 조절하는 기구가 배출 통로에 미치는 영향도 검토했습니다.</li></ul>\n<p>이 수치는 장치 전체의 설계 검토 결과이며, 개별 해석 모두를 제가 단독 수행했다고 의미하지는 않습니다.</p>\n<h3>이 프로젝트에서 기른 역량</h3>\n<ul><li><b>수치해석(Numerical Simulation):</b> 실제 기계 구조를 질량·힘·마찰·강성과 같은 계산 가능한 모델로 단순화하는 능력</li><li><b>동역학(Dynamics):</b> 입력이 작용한 뒤 부품이 어떤 순서와 속도로 움직이는지 시간에 따라 분석하는 능력</li><li><b>검증·문제 해결:</b> 성공하는 조건뿐 아니라 실패하는 조건도 비교해 설계의 한계와 개선점을 찾는 능력</li><li><b>다학제적 이해:</b> 우주항공 분야의 소음 문제를 기계 설계와 시뮬레이션으로 연결하고 다른 설계 작업과 협업한 경험</li><li><b>기술 문서화:</b> 계산에 사용한 가정과 입력 조건, 결과의 의미와 한계를 구분해 보고서에 정리하는 능력</li></ul>\n<h3>사용한 기술 및 방법</h3>\n<p>Python · NumPy / Numerical Modeling · Dynamics · Mechanical Simulation · Sensitivity Analysis · 공명·음향 응답 · CAD 연계 검토</p>\n<h3>결과물 및 참고 자료</h3>\n<ul><li>2026년 3D 디자인 공모전 출품작 <b>「음압 감응형 공명 대역 전환 벤트」</b> 작품설명서 및 조립체 설계</li><li>감지막 응답, 걸쇠 해제 및 스포일러·셔터 작동을 검토한 수치해석 결과</li><li>마찰·기어 효율 등 조건별 비교와 개선 필요 요소 정리</li><li><a href=\"https://ntrs.nasa.gov/citations/19880009188\" target=\"_blank\" rel=\"noreferrer\">NASA 우주왕복선 Vent 소음 사례 기술보고서</a></li></ul>\n<h3>검증 범위</h3>\n<p><b>시뮬레이션에서는 조건부 작동 가능성을 확인했지만, 실제 우주 발사 환경의 모든 조건을 재현하거나 실물·비행 검증을 완료한 것은 아닙니다.</b> 특히 외부 소음이 실제 감지막 양면에 필요한 압력차를 만들어내는 과정은 추가 검증이 필요합니다.</p>"
  },
  {
    "id": "project-26",
    "name": "LEO Satellite Communication | 채널·송신전력 공동 할당 연구",
    "category": "Research",
    "status": "기획·설계",
    "summary": "위성 인터넷의 사용자 밀집·간섭 문제를 정의하고 채널·송신전력 공동 최적화 및 비교 실험을 설계한 연구",
    "body": "<p><b>LEO Satellite Communication — 위성 인터넷의 통신 간섭을 줄이기 위한 채널·송신전력 최적화 연구</b></p>\n<p><b>내 담당:</b> 연구주제 및 문제 정의 · 선행연구 분석 · 자원할당 알고리즘 구상 · 시뮬레이션·평가 실험 설계</p>\n<p><b>연구 단계:</b> 연구계획서 및 실험 설계</p>\n<h3>이 연구를 시작한 이유</h3>\n<p>Starlink, Kuiper처럼 지구 가까이에서 통신하는 <b>저궤도 위성(LEO Satellite)</b>이 늘어나면 여러 위성이 같은 지역에 인터넷을 제공할 수 있습니다.</p>\n<p>문제는 도심, 대형 행사장, 재난 지역처럼 <b>사용자가 특정 지역에 한꺼번에 몰릴 때</b>입니다. 여러 위성이 제한된 주파수 채널을 동시에 사용하면 신호끼리 간섭이 생겨 인터넷 속도가 느려지거나 연결 품질이 나빠질 수 있습니다.</p>\n<p>이 문제를 해결하기 위해 <b>어떤 사용자에게 어떤 채널을 줄지</b>와 <b>얼마나 강한 송신전력으로 데이터를 보낼지</b>를 함께 결정하는 방법을 연구주제로 선정했습니다.</p>\n<h3>연구에서 해결하려는 문제</h3>\n<ul><li><b>채널(Channel) 할당:</b> 여러 사용자가 서로 간섭을 덜 일으키도록 통신 자원을 나누는 문제</li><li><b>송신전력(Power) 제어:</b> 필요한 통신 품질은 유지하면서 불필요하게 큰 전력 사용을 줄이는 문제</li><li><b>공동 최적화:</b> 채널을 바꾸면 간섭량이 달라지고, 전력을 바꿔도 간섭량이 달라지므로 두 가지를 함께 고려하는 문제</li></ul>\n<p><b>핵심 목표:</b> 통신 품질을 일정 수준 이상 유지하면서, 전체 사용자가 전송할 수 있는 데이터 양(Sum Rate)을 높이는 자원할당 방식을 설계하는 것입니다.</p>\n<h3>내가 맡은 역할 — Research Planning / Algorithm Design</h3>\n<p><b>저궤도 위성통신의 실제 문제를 분석하고, 이를 알고리즘으로 풀 수 있는 형태로 정의한 뒤, 성능을 검증할 시뮬레이션과 비교 실험을 설계했습니다.</b></p>\n<h4>실제로 한 작업</h4>\n<ol><li><b>연구주제 선정과 문제 정의</b> — 다중 LEO 위성이 같은 주파수를 사용할 때 발생하는 동일채널 간섭에 주목했습니다. 특히 사용자 밀도가 달라지는 상황에서 채널과 전력을 함께 배정해야 하는 이유를 정리했습니다.</li><li><b>선행연구와 통신 표준 분석</b> — 위성 자원할당·간섭 제어 관련 연구와 3GPP 비지상망(NTN) 표준 자료를 조사했습니다. 기존의 위성–사용자 연결, 주파수 대역 배정, 전력 제어 연구와 내가 제안한 문제의 차이를 비교했습니다.</li><li><b>최적화 문제 설계</b> — 위성 위치, 사용자 분포, 채널별 간섭, 통신 품질(SINR)을 고려해 전체 데이터 전송량을 최대화하는 목표를 설정했습니다. 위성별 전력 한도와 사용자별 최소 통신 품질 등을 제약조건으로 정의했습니다.</li><li><b>자원할당 알고리즘 구상</b> — 간섭이 작은 채널을 우선 배정하는 Greedy 방식에서 시작해, 사용자 수요를 반영하는 Weighted Score와 채널·전력을 번갈아 조정하는 Alternating Optimization 방식으로 발전시키는 계획을 세웠습니다.</li><li><b>시뮬레이션 및 비교 실험 설계</b> — 위성과 사용자의 위치, 통신 거리, 신호 감쇠, 간섭, 전송률을 계산할 Python 기반 실험 환경을 설계하고, 기존 방식과 제안 방식의 비교 기준을 정리했습니다.</li></ol>\n<h3>어떻게 검증하도록 설계했는가?</h3>\n<h4>1. 위성 통신 환경 구성</h4>\n<ul><li>지상에서 약 <b>500~550 km</b> 높이에 위치한 LEO 위성들이 같은 지역의 사용자에게 데이터를 보내는 상황을 가정했습니다.</li><li>위성과 사용자 사이 거리, 경로손실(Path Loss), 신호세기(Channel Gain), 동일채널 간섭을 계산하도록 시스템 모델을 설계했습니다.</li><li>각 시간 구간(Time Slot)에 위성과 사용자의 연결 조건이 달라지는 동적 환경을 고려했습니다.</li></ul>\n<h4>2. 사용자 밀도별 시나리오</h4>\n<div class=\"source-table\"><table><thead><tr><th>시나리오</th><th>확인하려는 상황</th></tr></thead><tbody><tr><td>균일 분포</td><td>사용자가 넓은 지역에 고르게 있는 일반적인 상황</td></tr><tr><td>단일 Hotspot</td><td>사용자들이 한 지역에 집중되는 상황</td></tr><tr><td>복수 Hotspot</td><td>여러 장소에 사용자 밀집 지역이 동시에 생기는 상황</td></tr></tbody></table></div>\n<p>사용자 밀도, 위성 수, 채널 수, 최대 송신전력 등을 변화시켜 <b>어떤 조건에서 간섭이 심해지고 어떤 방식이 유리한지</b> 비교하도록 계획했습니다.</p>\n<h4>3. 기존 방식과 제안 방식 비교</h4>\n<div class=\"source-table\"><table><thead><tr><th>비교 방식</th><th>무엇을 바꾸는가?</th></tr></thead><tbody><tr><td>고정 채널 + 균등전력</td><td>채널·전력을 고정하는 기본 비교 방식</td></tr><tr><td>동적 채널 + 균등전력</td><td>간섭 상황을 고려해 채널만 변경</td></tr><tr><td>고정 채널 + 동적전력</td><td>채널은 유지하면서 전력만 조정</td></tr><tr><td>동적 채널 + 동적전력</td><td>채널과 송신전력을 함께 조정하는 제안 방식</td></tr></tbody></table></div>\n<h4>4. 성능을 판단할 지표</h4>\n<ul><li><b>Sum Rate:</b> 전체 사용자가 얼마나 많은 데이터를 전송할 수 있는가?</li><li><b>SINR / Outage:</b> 간섭 때문에 통신 품질이 나빠지거나 연결 기준을 충족하지 못하는 사용자가 얼마나 있는가?</li><li><b>Energy Efficiency:</b> 사용한 전력 대비 데이터 전송 효율이 좋은가?</li><li><b>Fairness:</b> 일부 사용자에게만 통신 품질이 집중되지 않는가?</li><li><b>Computation Time:</b> 알고리즘이 실제로 활용할 만큼 빠르게 계산되는가?</li></ul>\n<p><b>비교의 핵심:</b> 전체 속도만 높이는 것이 아니라 전력 사용, 사용자 간 형평성, 연결 안정성, 계산시간까지 함께 판단하도록 연구를 설계했습니다.</p>\n<h3>이 연구에서 기른 역량</h3>\n<ul><li><b>연구 문제 정의:</b> 위성 인터넷의 실제 문제를 알고리즘으로 해결할 수 있는 구체적인 문제로 바꾸는 능력</li><li><b>논문·표준 분석:</b> 선행연구의 접근법과 한계를 비교하고 차별화된 연구 방향을 설정하는 능력</li><li><b>Optimization 사고:</b> 목표함수와 제약조건을 함께 고려하는 최적화 문제 설계</li><li><b>Simulation 설계:</b> 현실의 복잡한 통신 상황을 모델과 실험 조건으로 단순화하는 능력</li><li><b>실험·평가 설계:</b> 다양한 비교 기준과 성능 지표를 세워 알고리즘의 효과를 객관적으로 검증하도록 계획하는 능력</li></ul>\n<h3>사용한 개념 및 연구 방법</h3>\n<p>LEO Satellite Communication · Downlink · 3GPP NTN · Channel Assignment · Power Control · Co-channel Interference · SINR · Greedy Algorithm · Alternating Optimization</p>\n<p><b>계획한 구현 도구:</b> Python 기반 시뮬레이터</p>\n<h3>결과물 및 연구 범위</h3>\n<ul><li><b>「다중 LEO 위성 Downlink 환경에서 사용자 밀도와 동일채널 간섭을 고려한 채널–송신전력 공동 할당 연구」</b> 연구계획서 작성</li><li>선행연구 비교, 통신 시스템 모델, 최적화 목적·제약조건, 단계별 알고리즘 및 성능 평가 계획 구체화</li><li>계획서에 사용한 주요 참고 자료: 3GPP TR 38.811, TR 38.821 및 LEO 자원할당 관련 연구</li></ul>\n<p><span class=\"source-note\">본 기록은 제공된 연구계획서에 근거한 연구 기획·설계 성과입니다. 실제 Python 시뮬레이터 구현, 알고리즘의 수치 성능 개선, 실제 위성망 적용은 계획서만으로 완료 여부를 확인할 수 없으므로 달성한 결과로 기재하지 않았습니다.</span></p>"
  }
];
