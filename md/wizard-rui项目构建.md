# wizard-rui 项目构建

## 一、初始化项目

```bash
yarn init
```

## 二、Webpack 打包三件套

### 1.webpack webpack 核心

### 2.webpack-cli 命令行中运行 webpack 的工具

### 3.webpack-merge 分离的配置进行合并

```bash
yarn add  webpack webpack-cli webpack-dev-server webpack-merge -D
```

webpack[]() 相关的东西人家官网写的还是很好，要学会看文档。

## 三、安装 React 和 React-Dom

### 1.React React 核心提供 React API

### 2.ReactDom 渲染器，渲染 DOM 树

```bash
yarn add react react-dom
```

## 四、解析器

==首先根据考虑需要哪些解析器，比如 html ts js jsx css less sass png jpg ttf 等==  
举例：
|文件或功能|解析器或插件|备注|
|---|---|---|
|html|[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)|html 解析和打包插件|
|css|[css-loader](https://www.webpackjs.com/loaders/css-loader/)|css 解析器|
|less|[less-loader](https://www.webpackjs.com/loaders/less-loader/)|less 解析器|
|sass|[sass-loader](https://www.webpackjs.com/loaders/sass-loader/)|sass 解析器|
|file|[file-loader](https://www.webpackjs.com/loaders/file-loader/)|文件解析器|
|thread|[thread-loader](https://www.webpackjs.com/loaders/thread-loader/)|多线程打包|
|mini-css-extract-plugin|[mini-css-extract-plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)|css 文件提取插件|
|postcss|[postcss](https://www.postcss.com.cn/docs/)|css 浏览器兼容处理|
|babel-loader|[babel-loader](https://www.webpackjs.com/loaders/babel-loader/)|webpack 使用 babel|

## 四、babel(代码转化器)

### 1、作用

高版本 ES 转换语法到低版本 ES 语法。

#### 2、安装

```bash
yarn add  @babel/core core-js @babel/preset-env babel-loader @babel/preset-react @babel/preset-typescript babel-plugin-dynamic-import-node @babel/plugin-transform-runtime @babel/plugin-transform-runtime @babel/plugin-proposal-decorators -D
```

### 3、说明

| 文件或功能                        | 解析器或插件                                                                                          | 备注                                                                                                                            |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| @babel/core                       | [@babel/core](https://babel.docschina.org/docs/en/babel-core/)                                        | babel 核心                                                                                                                      |
| babel-loader                      | [babel-loader](https://www.webpackjs.com/loaders/babel-loader/)                                       | webpack 使用 babel                                                                                                              |
| core-js                           | [core-js](https://github.com/zloirock/core-js#readme)                                                 | JavaScript 的模块化标准库                                                                                                       |
| @babel/preset-env                 | [@babel/preset-env](https://babel.docschina.org/docs/en/babel-preset-env/)                            | 转码插件                                                                                                                        |
| @babel/preset-react               | [@babel/preset-react](https://babel.docschina.org/docs/en/babel-preset-react/)                        | react 转码插件，包含 3 个插件，有兴趣点击链接了解                                                                               |
| @babel/preset-typescript          | [@babel/preset-typescript](https://babel.docschina.org/docs/en/babel-preset-typescript/)              | typescript 转码插件                                                                                                             |
| babel-plugin-dynamic-import-node  | [babel-plugin-dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node#readme) | import()转 require(),使用有些许不一样，可以看下文或者[点击查看](https://www.npmjs.com/package/babel-plugin-dynamic-import-node) |
| @babel/plugin-transform-runtime   | [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)          | JavaScript 标准库注入                                                                                                           |
| @babel/plugin-proposal-decorators | [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)      | ES7 修饰器转码器                                                                                                                |

其实需要什么功能去搜索就可以了，用法我是直接去[npm](https://www.npmjs.com/)搜索插件看，再不行点击上面的 git 地址去看，实在不清楚建议阅读源码，宗旨就是这么一个学习过程，没有捷径，不要什么都喂到嘴里，又不是所有人是你双亲，授人以鱼不如授人以渔。

### 4、配置

```json
/*babel.config.json*/
{
	"comments": false, //注释状态
	"presets": [
		[
			"@babel/preset-env", //语法转化
			{
				"targets": {
					"browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
				},
				"useBuiltIns": "usage",
				"corejs": 3,
				"loose": true
			}
		],
		"@babel/preset-react", //解析React语法，JSX
		"@babel/preset-typescript" //解析TS
	],
	"plugins": [
		"dynamic-import-node", //将import() 转为 require()
		"@babel/plugin-transform-runtime", //注入兼容性方法
		[
			"@babel/plugin-proposal-decorators", //ES7修饰器转化
			{
				"legacy": true
			}
		]
	]
}
```

## 五、Typescript（TS 配置）

### 1、作用

为项目能使用 Typescript

### 2、安装

```bash
yarn add typescript -D
```

### 3、说明

| 文件或功能 | 解析器或插件                                                                     | 备注                                                              |
| ---------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| typescript | [typescript](https://www.typescriptlang.org/zh/docs/handbook/2/basic-types.html) | typescript 核心                                                   |
| ts-node    | [ts-node](https://typestrong.org/ts-node/)                                       | 直接运行 TS 代码，看个人需求                                      |
| ts-loader  | [ts-loader](https://github.com/TypeStrong/ts-loader)                             | webpack 解析 ts 代码，推荐使用 babel 就不用 loader 了，看个人需求 |

### 4、配置

#### （1）初始化

```bash
tsc --init
```

执行命令会生成一个 tsconfig.json 文件，文件里面有详细的配置说明，更详细的点击[配置说明](https://www.typescriptlang.org/zh/tsconfig)

```json
{
	"compilerOptions": {
		"module": "commonjs", //设置程序的模块系统。
		"target": "es5", //编译目标
		"jsx": "react", //控制 JSX 在 JavaScript 文件中的输出方式。
		"sourceMap": true, //调试显示原始的 TypeScript 代码。
		"removeComments": true, //移除注释
		/**
		 * TypeScript 开启严格模式 ，开启 "noImplicitAny": true,"strictNullChecks": true, "strictFunctionTypes": true,
		 * "strictBindCallApply": true,"strictPropertyInitialization": true,"noImplicitThis": true,"alwaysStrict": true
		 */
		"strict": true,
		"noImplicitAny": true, //ypeScript无法推断变量的类型时，TypeScript将返回到变量的any。
		"strictNullChecks": true, //null和undefined有各自不同的类型
		"moduleResolution": "node", //指定模块解析策略
		"baseUrl": "./", //基准目录
		"typeRoots": ["node_modules/@types"], //类型根路径
		"allowSyntheticDefaultImports": true, //允许合成默认导入
		"esModuleInterop": true, //ES 模块互操作性
		"experimentalDecorators": true //ES7类修饰器允许
	},
	"exclude": ["node_modules", "config/*"], //忽略文件
	"include": ["src/**/*"] //包含文件
}
```

## 六、组装

### 1、html 文件书写

新建 index.html

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta http-equiv="pragma" content="no-cache" />
		<meta http-equiv="Cache-Control" content="no-store, must-revalidate" />
		<meta http-equiv="expires" content="Wed, 26 Feb 1997 08:21:57 GMT" />
		<meta
			name="viewport"
			content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
		/>
		<title><%= htmlWebpackPlugin.options.title %></title>
	</head>
	<body>
		<div id="app_root"></div>
	</body>
</html>
```

### 2、新建源码文件夹和入口

（1）根目录下新建文件夹 src  
（2）src 下新建 index.tsx  
（3）src 下新建 APP.tsx

```
//index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
createRoot(document.querySelector('#app_root') as Element).render(<App />);
```

```
//APP.tsx
import React, { FC } from 'react';
const App: FC<any> = (props) => {
	return <>app</>;
};
export default App;
```

### 3、新建 webpack 配置文件夹和配置文件

（1）在根目录下创建 Webpack 文件及  
（2）在 Webpack 文件夹下创建 webpack.base.js、webpack.dev.js、webpack.prod.js  
（3）编写 webpack 配置文件  
首先梳理一下  
公共部分  
入口，ts，js，图片，其他文件，less，html 相同  
dev 模式
less 略微不同，devServer 相关配置，代理，resove 路径，优化模式  
product 模式  
出口，优化模式，
公共部分配置

```
//webpack.base.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
	target: 'web',
	entry: resolve('../src/index.tsx'), //入口
	plugins: [
		/**
		 * html文件处理
		 */
		new HtmlWebpackPlugin({
			title: 'Wizard-RUI',
			filename: 'index.html',
			template: resolve('../index.html'),
			hash: true,
			cache: false,
			inject: true,
			minify: {
				removeComments: true,
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
				minifyCSS: true // 缩小CSS样式元素和样式属性
			},
			nodeModules: resolve('../node_modules')
		}),
		/**
		 * MiniCss插件，在生产环境使用
		 */
		!devMode
			? new MiniCssExtractPlugin({
					filename: '[name].[contenthash].css',
					chunkFilename: 'css/[id].[contenthash].css',
					ignoreOrder: true
			  })
			: function(){}
	],
	module: {
		rules: [
			/**
			 * 处理less,css 为dev模式下使用style-loader 为pod模式下使用MIniCss
			 */
			{
				test: /\.(le|c)ss$/i,
				use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
			},
			/**
			 * ts,tsx,js,jsx解析
			 */
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},
			/**
			 * 图片处理
			 */
			{
				test: /\.(png|svg|jpg|gif)$/, // 图片
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/images/[name].[ext]' // 存放的位置： dist/assets/images/文件
						}
					}
				]
			},
			/**
			 * 字体文件处理
			 */
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/, // 字体
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/fonts/[name].[ext]' // 存放的位置： dist/assets/fonts/文件
						}
					}
				]
			}
		]
	}
};
```

开发环境配置

```
//webpack.dev.js
const base = require('./webpack.base'); //取出公共部分
const { merge } = require('webpack-merge');
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = merge(base, {
	mode: 'development', //开发环境webpack内置优化
	devtool: 'inline-source-map', //控制台调试代码
	devServer: {
		client: {
			progress: true //在浏览器中以百分比显示编译进度。
		},
		compress: false, //gzip压缩
		hot: true, //热更新
		open: {
			app: {
				name: 'goole-chrome', //走动打开chrome
				arguments: ['--incognito', '--new-window'] //无痕，新的窗口
			}
		},
		port: 8081, //监听端口
		proxy: {} //代理配置
	},
	optimization: {
		//优化模式
		minimize: false
	},
	/**
	 * 路径别名
	 */
	resolve: {
		alias: {
			// "@": ["../src"],
			'@': resolve('../src/'),
			src: resolve('../src/'),
			components: resolve('../src/components'),
			config: resolve('../src/config'),
			hook: resolve('../src/hook'),
			apis: resolve('../src/apis'),
			router: resolve('../src/router'),
			store: resolve('../src/store'),
			theme: resolve('../src/theme'),
			util: resolve('../src/util'),
			i18n: resolve('../src/i18n'),
			assets: resolve('../src/assets'),
			views: resolve('../src/views')
		},
		extensions: ['.tsx', '.ts', '.wasm', '.mjs', '.js', '.json']
	}
});
```

生产环境配置

```
//webpack.prod.js
const base = require('./webpack.base'); //取出公共部分
const { merge } = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = merge(base, {
	mode: 'production', // 环境 development 和 production 环境 链接： https://www.webpackjs.com/concepts/mode/#mode-development
	output: {
		filename: 'index.js', // 文件名
		path: resolve('../dist'), // 文件输出地址
		library: {
			/**
			 * 发布运行环境
			 * umd——兼容浏览器
			 * commonjs,commonjs2,module——node
			 * amd——require.js
			 * cmd——sea.js
			 */
			type: 'umd'
		},
		clean: true
	},
	optimization: {
		//优化模式
		minimize: false
	},
	/**若通过CDN引入React和ReactDOM可以使用 */
	// externals: {
	// 	react: 'React',
	// 	'react-dom': 'ReactDOM'
	// },
	plugins: [new CleanWebpackPlugin()],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	}
});
```

（4）配置运行命令  
package.json 的 script 加入

```json
{
	"dev": "webpack-dev-server --config ./webpack/webpack.dev.js",
	"build": "webpack --config ./webpack/webpack.prod.js",
	"test": "echo \"Error: no test specified\" && exit 1"
}
```

（5）yarn build，yarn dev 看看成功与否

附件：  
package.json

```json
{
	"name": "wizard-rui",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"dev": "webpack-dev-server --config ./webpack/webpack.dev.js",
		"build": "webpack --config ./webpack/webpack.prod.js",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"@babel/cli": "^7.19.3",
		"@babel/core": "^7.20.2",
		"@babel/plugin-proposal-decorators": "^7.20.2",
		"@babel/plugin-transform-runtime": "^7.19.6",
		"@babel/preset-env": "^7.20.2",
		"@babel/preset-react": "^7.18.6",
		"@babel/preset-typescript": "^7.18.6",
		"@types/react": "^18.0.25",
		"@types/react-dom": "^18.0.8",
		"@typescript-eslint/eslint-plugin": "^5.42.1",
		"@typescript-eslint/parser": "^5.42.1",
		"babel-loader": "^9.1.0",
		"babel-plugin-dynamic-import-node": "^2.3.3",
		"babel-plugin-transform-runtime": "^6.23.0",
		"clean-webpack-plugin": "^4.0.0",
		"core-js": "^3.26.1",
		"css-loader": "^6.7.1",
		"file-loader": "^6.2.0",
		"html-webpack-plugin": "^5.5.0",
		"less-loader": "^11.1.0",
		"mini-css-extract-plugin": "^2.6.1",
		"prettier": "^2.7.1",
		"style-loader": "^3.3.1",
		"typescript": "^4.8.4",
		"webpack": "^5.74.0",
		"webpack-cli": "^4.10.0",
		"webpack-dev-server": "^4.11.1",
		"webpack-merge": "^5.8.0"
	},
	"dependencies": {
		"react": "^18.2.0",
		"react-dom": "^18.2.0"
	}
}
```

==最后还是那就话，授人以鱼不如授人以渔，少抄袭，多学习少年！==
