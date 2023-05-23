https://www.acmicpc.net/submit/18258/61205565

Javascript에서 queue는 존재하지않는다.

queue를 비슷하게 구현하기 위해 배열로 push,shift를 사용하여 구현할 수 있지만 shift의 시간복잡도는 o(n)이다.

그렇기 때문에 queue 구현하여야 백준에서 시간초과를 에러를 방지할 수 있다.
