function solution(live, commands) {
  let max = live[0];
  const segs = new TreeMultiSet((a, b) => a[1] < b[1]);
  segs.insert([live[0], 0, 0]);

  live.forEach((x, i) => {
    if (x < max) {
      segs.insert([x, i, i]);
      max = x;
    } else {
      segs.rbegin().value[2] = i;
    }
  });

  return commands.map(([k, d]) => {
    k--;
    const iter = segs.upper_bound([0, k, k]).prev();
    const value = iter.value;

    if (live[k] - d < value[0]) {
      let last = iter;
      while (
        last.next() !== segs.end() &&
        last.next().value[0] >= live[k] - d
      ) {
        last = last.next();
      }
      const add = [live[k] - d, k, last.value[2]];
      let start = iter;
      if (value[1] < k) {
        value[2] = k - 1;
        start = iter.next();
      }
      if (start !== segs.end() && start.value[1] <= last.value[1]) {
        segs.erase(start, last.next());
      }
      segs.insert(add);
    }

    live[k] -= d;

    return segs.size();
  });
}
