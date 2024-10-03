// 压缩和混淆 js 代码
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle-es.js",
      format: "es",
    }
  ],
  // 插件 顺序引用 顺序执行 
  plugins: [terser()]
}
