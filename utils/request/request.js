const PubFuc = {
  // 格式化时间戳
  formatTime: (value) => {
    var value = String(value);
    function t(v) {
      return (v = v < 10 ? "0" + v : v);
    }
  },
};

export default PubFuc;