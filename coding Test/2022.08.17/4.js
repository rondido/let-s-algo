//bfs, dfs
/**
 * @param {array} identity
 * @return {int}
 */
function solution(identity) {
  var visited = [];
  var v = new Array(26).fill(0);
  var counter = 0;

  function dfs(node) {
    if (v[node]) {
      return;
    }

    v[node] = 1;

    for (var i = 0; i < visited[node].length; i++) {
      var n = visited[visited[node][i]];

      n.forEach((x) => {
        if (v[x] === 0) {
          dfs(x);
        }
      });
    }
  }

  for (var i = 0; i < identity.length; i++) {
    for (var j = 0; j < identity[i].length; j++) {
      var x = identity[i][j].charCodeAt(0) - "a".charCodeAt(0);
      if (visited[x]) {
        visited[x].push(26 + i);
      } else {
        visited[x] = [26 + i];
      }

      if (visited[26 + i]) {
        visited[26 + i].push(x);
      } else {
        visited[26 + i] = [x];
      }
    }
  }

  for (var i = 0; i < 26; i++) {
    if (v[i] === 0 && visited[i]) {
      dfs(i);
      counter++;
    }
  }

  return counter;
}
