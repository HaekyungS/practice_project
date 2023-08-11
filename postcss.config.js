module.exports = {
  plugins: {
    // tailwindcss 부분은 비워두면 기본값을 적용하고,
    // 아래와 같이 작성하면 사용자 설정을 적용하여 쓸 수 있다.
    tailwindcss: { config: './tailwind.config.js' },
    autoprefixer: {}
  }
};
