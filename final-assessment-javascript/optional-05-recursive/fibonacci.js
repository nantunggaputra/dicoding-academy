function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const previousSeries = fibonacci(n - 1);

  const nextValue =
    previousSeries[previousSeries.length - 1] +
    previousSeries[previousSeries.length - 2];
  previousSeries.push(nextValue);

  return previousSeries;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
