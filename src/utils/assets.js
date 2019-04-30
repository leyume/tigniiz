const assets = {
  import: {
    mapper(r) {
      return r.keys().map(r);
    },
    all() {
      assets.import.mapper(
        require.context("@/assets/img", false, /\.(png|jpe?g|gif)$/)
      );
      assets.import.mapper(
        require.context("@/assets/css", false, /\.(scss|css)$/)
      );
      assets.import.mapper(
        require.context("@/assets/fonts", false, /\.(eot|svg|ttf|woff)$/)
      );
    }
  }
};

export default assets;
