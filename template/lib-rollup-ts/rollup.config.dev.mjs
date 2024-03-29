import path from 'path'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'

module.exports = {
  input: path.resolve(__dirname, 'src/index.ts'), // 入口文件
  output: [
    {
      // 打包umd格式文件
      file: path.resolve(__dirname, './dist/bundle.umd.js'), // 输出路劲
      format: 'umd', // umd - 统一兼容模式
      name: 'RollupLib', // 对外暴露的顶级变量
      sourcemap: true, // 开启sorcemap
      exports: 'named'
    },
    {
      // 打包es格式文件
      file: path.resolve(__dirname, './dist/bundle.es.js'), // 输出路劲
      format: 'es', // ejs - es6模式
      name: 'RollupLib', // 对外暴露的顶级变量
      sourcemap: true, // 开启sorcemap
      exports: 'named'
    },
    {
      // 打包es格式文件
      file: path.resolve(__dirname, './dist/bundle.common.js'), // 输出路劲
      format: 'cjs', // cjs - commonJs模式
      name: 'RollupLib', // 对外暴露的顶级变量
      sourcemap: true, // 开启sorcemap
      exports: 'named'
    }
  ],
  // 插件
  plugins: [
    nodeResolve(), // 三方依赖打包
    commonjs(), // 支持commonJs语法
    babel({ babelHelpers: 'bundled', }), // babel语法转义
    typescript({ sourceMap: true, tsconfig: './tsconfig.json' }), // 不生成sourceMap
    json() // 支持引用json文件
  ]
}
