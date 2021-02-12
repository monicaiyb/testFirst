describe('#fibonacciSequence(myNumber)', () => {
  it('should return a fibonacci sequence', () => {
      const result = fibonacciSequence(10);
      const fibSeq = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];
      expect(result).to.equal(fibSeq);
  });
});