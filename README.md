# Node.js + Express sample

[![GuardRails badge](https://badges.production.guardrails.io/shtakai/js-study.svg)](https://www.guardrails.io)

## 0.node-express

- [ゼロからはじめるExpress + Node.jsを使ったアプリ開発 - Qiita](http://qiita.com/nkjm/items/723990c518acfee6e473)

## 1.node-rest

- [Node.js + Express 4.x + MongoDB(Mongoose)でRESTfulなjsonAPIサーバの作成を丁寧に解説する．+ テストクライアントを用いたAPIテストまで - Qiita](http://qiita.com/shopetan/items/58a62a366aac4f5faa20)

## 2.angular2-quickstart

- [5 Min Quickstart - ts](https://angular.io/docs/ts/latest/quickstart.html)

## 3.angular2-tour-of-heroes

- [Tutorial: Tour of Heroes - ts](https://angular.io/docs/ts/latest/tutorial/)

## 4.react-getting-started

- [Getting Started | React](https://facebook.github.io/react/docs/getting-started.html)

## 5.react-tutorial

```bash
npm install
node server.js
```

- [Tutorial | React](https://facebook.github.io/react/docs/tutorial.html)

## 6.typescript-react

- [Working with React and TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)

## 7.react-hello-world

- TypeScript
- React

package.json

```
{
  "name": "react-my-first",
  "version": "1.0.0",
  "scripts": {
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
  },
  "license": "ISC",
  "dependencies": {
    "react": "^0.14.6",
    "react-dom": "^0.14.6"
  },
  "devDependencies": {
    "concurrently": "^1.0.0",
    "lite-server": "^1.3.1",
    "typescript": "^1.7.3"
  }
}
```

tsconfig.json

```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": true,
    "noImplicitAny": false,
    "jsx": "react"
  },
  "exclude": [
    "node_modules"
  ]
}
```

## 8.react-tutorial-typescript

~~superagentでやろうとしたけど、使えないところで止まってる...。~~ 一応チュートリアルは終えることができた...。ただ、やはり不慣れなせいでinterfaceの使い方も曖昧だし、`;`が付いていたりいなかったり、buildが手間だったりいろいろ問題がある。。。

- [Browserify](http://browserify.org/)
- [superagent](https://github.com/visionmedia/superagent)

が良かった。`setInterval(cb, time)`に、`bind(this)`をつけてなくてハマった。

- [hushin/react-tutorial-typescript](https://github.com/hushin/react-tutorial-typescript)
- [Visual Studio上のTypeScript JSXを使ってReact.js「ReactのチュートリアルをTypeScriptでリライト」 - かずきのBlog@hatena](http://blog.okazuki.jp/entry/2015/12/27/004450)

が参考になった。

## 9.react-tutorial-2

- Babel ES6(ES2015)
- webpack
- ESLint
- lite-server
- Airbnb style guide

[Reactのチュートリアルをもう一回やってみた（ESLint & Webpack） – Morizotter Blog](http://blog.morizotter.com/2016/01/12/react-tutorial-again-with-web-pack/)
