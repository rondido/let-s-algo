let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

class Queue {
  constructor() {
    this.storage = {}; //값을 저장할 객체
    this.front = 0; //첫 원소를 가리킬 포인터
    this.rear = 0; //마지막 원소를 가리킬 포인터
  }
  size() {
    if (this.storage[this.rear] === undefined) return 0;
    else return this.rear - this.front + 1;
  }
  add(value) {
    // 큐에 데이터가 아무것도 없는 경우
    if (this.size() === 0) {
      //0번 위치에 값을 넣고 포인터는 건드리지 않는다.
      // 이때 ['0']으로 키를 설정한 이유는
      // 자바스크립트 객체 object는 키 값로 오직
      //문자열과 symbol만 허용하기 때문
      this.storage["0"] = value;
    } else {
      //그 외의 경우에는 간단하게
      // rear 위치를 1만큼 늘리고 해당 위치에 값 삽입
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  popleft() {
    let temp; // 첫 원소 값을 임시로 담을 변수
    //두 포인터의 값이 같은 경우 (데이터가 1개 남은 경우)
    // 물론 초기 상태에서 아무런 데이터가 없는 상황일 수도 있으나
    // 이때 front의 값을 가져오고 제거하는 과정에서
    // 자바스크립트 특성 상 에러가 발생하지 않고
    // 두 포인터의 값을 계속 0으로 유지시켜 주기 때문에
    // 별도로 이 부분에 대한 처리를 해줄 필요는 없지만
    // 좀 더 호환성 높은 코드를 위해서는 사실 하는 편을 추천
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      // 이 부분이 없었다면 이 시점에서 front는
      // rear의 값 보다 1보다 더 큰 역설에 빠지게 되므로
      // 데이터가 없는 경우를 다시 0으로 초기화
      this.front = 0;
      this.rear = 0;
    } else {
      // 현재 front에 담긴 값을 가져오고
      //항상 이 값을 delete 해중야 한다.
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}

function bfs(graph, start, visited) {
  queue = new Queue();
  queue.add(start);
  visited[start] = true;
  while (queue.size() != 0) {
    v = queue.popleft();
    console.log(v);
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.add(i);
        visited[i] = true;
      }
    }
  }
}

let visited = Array(9).fill(false);

bfs(graph, 1, visited);
