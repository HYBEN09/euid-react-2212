const babelConfig = {
  presets: [
    // 나중에 옵션을 넣을 수 있으므로 {} 넣어주기.
    ["@babel/preset-env", {}],
    ["@babel/preset-typescript", {}],
    [
      "@babel/preset-react",
      //   App.js 에서 import React from 'react' 없애도 구동이 되게 해줌.
      {
        runtime: "automatic",
      },
    ],
  ],
};

module.exports = babelConfig;
