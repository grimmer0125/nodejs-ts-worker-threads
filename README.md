# NodeJS Worker Threads

Two examples: 
1. built-in worker thread node.js library. The drawback: it needs to do some trick to work with [ts-node](https://github.com/TypeStrong/ts-node),  even that, ts-node debugging mode (`node -r ./node_modules/ts-node/register`) still not work. Trick: https://qiita.com/suin/items/bc7f74f2ca27160a62bf
2. threads.js library example, https://www.npmjs.com/package/threads and it wrapps web worker & node.js worker thread. It's better than built in since ts-node works in most of the cases. ~It works perfectly~. One trickt is to add `outputCapture` in VSCode's launch.json to show the logs in worker threads. Two issues 
    1. One limitation is that VSCode breakpoints will not stop at the code in worker threads.
    2. Sometimes `node -r ts-node/register --inspect index.ts` will fail to run the worker thread code in some `circular dependency` case


## Requirements

- NodeJS 12 or above

## Installation

1. Intall yarn first, https://classic.yarnpkg.com/en/docs/install/, then 
2. Install packages: `yarn install`

## Run 

`yarn devthreads` / `yarn devthreads2` or use VSCode F5 to debug 


