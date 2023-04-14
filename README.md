## 코드 파일 설명

```
1. 디렉토리 - project-env
2. main. py
```
크게 위 두가지로 나뉨.

---
### project-env
파이썬 환경을 격리시켜주기 위한 가상 환경 구축.

(여러개의 프로젝트에서 작업할 때 서로 영향을 미치지 않도록하기 위한 subwork)

* 아래의 명령어는 가상환경을 구축하기 위한 것임.
```
python -m venv env_name
```
윈도우 사용자일 경우, 가상환경을 구축하는 파일이 powershell로 돼있고, powershell은 처음에 접근 불가능하기 때문에
powershell을 관리자 모드로 들어간 후 
```
$ Get-Executionpolicy
```
위의 명령어로 Restricted 확인 후, 권한 변경해야함.
```
$ Set-ExecutionPolicy Unrestricted
```
위의 명령어를 통해 권한을 변경시켜줌.

이후에, 다시 아래의 가상환경을 실행시켜주는 명령어를 입력시키면 된다.

* 가상환경 실행시키는 명령어
```
.\project-env\Scripts\activate
```

### main.py
api 사용한 페이지로, 파이썬을 이용함.

* openai의 api를 사용하기 위해서 아래와 같은 설치 과정이 필요.

```
pip install openai
```
the above instruction is for installing the python bindings

or to install offical Node.js, use the below instruction.
```
npm install openai
```


---
참고 자료
1. openai
https://platform.openai.com/docs/api-reference
2. 
https://www.youtube.com/watch?v=FwOdQR8c_9g
