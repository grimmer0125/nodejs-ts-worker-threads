import { spawn, Thread, Worker } from "threads";

// const n = process.argv[2] || 500;

// const runService = (workerData: { n: number }) => {
//   return new Promise((resolve, reject) => {
//     // console.log("new worker:" + __filename);
//     const worker = new Worker(
//       "./src/worker.js",
//       //   "./dist/worker.js",
//       {
//         workerData,
//       }
//     );

//     worker.on("message", resolve);
//     worker.on("error", reject);
//     worker.on("exit", (code) => {
//       if (code !== 0) {
//         reject(new Error(`Worker stopped with exit code ${code}`));
//       }
//     });
//   });
// };

(async () => {
  console.log("index");
  const auth = await spawn(new Worker("./auth"));
  const hashed = await auth.hashPassword("Super secret password", "1234");
  console.log("Hashed password:", hashed);
  await Thread.terminate(auth);

  //   let timer = 0;
  //   const interval = setInterval(() => {
  //     timer++;
  //     console.log(`[${timer}s] Worker is working...`);
  //   }, 1000);

  //   const result = await runService({ n: +n });

  //   clearInterval(interval);
  //   console.log(`got` + result);
})();
