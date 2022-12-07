module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  settings:{
    react:{
      version:"detect",
    },
    

  }
  
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error"], // prettier 규칙을 어기면 error 발생
    "no-unused-vars": "off", // 사용하지않는 변수 error처리 하겠다.
    "no-console": "off", // 콘솔로그를 사용하수 있게 꺼놓음.
    semi: "error",
  },
};
