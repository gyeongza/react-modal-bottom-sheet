# react-modal-bottom-sheet 모달 라이브러리

간단한 모달을 구현할 수 있는 라이브러리입니다.

## 설치 방법

```
npm install react-modal-bottom-sheet
```

## 사용 방법

### react-modal-bottom-sheet 컴포넌트 불러오기

```
import Modal from 'react-modal-bottom-sheet';
```

### react-modal-bottom-sheet 사용하기

## Props

setModal: 모달을 열기 위한 상태를 변경하는 함수.
width, height(선택값): 모달창의 크기 설정. 없을 경우 100%
element: 모달 내부에 들어갈 컨텐츠(JSX 문법)

```javascript
import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive?.(!isModalActive);
  };

  return (
    <div className="App">
      <div onClick={handleModal}>modal open</div>
      {isModalActive && (
        <Modal
          setModal={handleModal}
          height="300"
          element={<div>modal contents</div>}
        />
      )}
    </div>
  );
}

export default App;
```
