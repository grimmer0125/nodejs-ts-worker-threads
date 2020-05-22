# NodeJS Worker Threads

Two examples: 
1. built-in worker thread node.js library. The drawback: it needs to do some trick to work with [ts-node](https://github.com/TypeStrong/ts-node),  even that, ts-node debugging mode (`node -r ./node_modules/ts-node/register`) still not work. Trick: https://qiita.com/suin/items/bc7f74f2ca27160a62bf
2. threads.js library example, https://www.npmjs.com/package/threads and it wrapps web worker and worke thread. It works perfectly. Only one trickt is to add `outputCapture` in VSCode's launch.json to show the logs in worker threads. 


## Requirements

- NodeJS 12 or above

## Installation

1. Intall yarn first, https://classic.yarnpkg.com/en/docs/install/, then 
2. Install packages: `yarn install`

## Run 

`yarn devthreads` / `yarn devthreads2` or use VSCode F5 to debug 


