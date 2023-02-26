const assetLoader = {
  // 이미지 로더 => 파일을 data URI 형식으로 번들에 인라인 추가 할 때
  test: /\.(jpe?g|png|svg|gif)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        // 10kb까지 url-loader가 처리
        limit: 10000,
      },
    },

    {
      loader: "file-loader",
    },

    {
      loader: "@svgr/webpack",
    },
  ],
};

module.exports = assetLoader;
