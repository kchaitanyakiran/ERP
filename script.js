const getDifference = (a, b) => {
  const onlyInA = a.filter(item => !b.includes(item));
  const onlyInB = b.filter(item => !a.includes(item));
  return { onlyInA, onlyInB };
}