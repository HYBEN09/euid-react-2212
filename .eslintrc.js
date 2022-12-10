module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: "true",
  },
  settings: {
    react: { version: "detect" },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // jsx 최신문법
    "plugin:react/jsx-runtime",
    // custom Hook 만들시 이름 앞에 use안쓰면 오류 표시 해주는 플러그인.
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    // button type 정하지 않으면 오류 나타내기 규칙.
    "react/button-has-type": "warn",
    // common.js 파일 require불러오기 오류 끄기.
    "@typescript-eslint/no-var-requires": "off",
  },
};
