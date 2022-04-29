#! /usr/bin/env node

const readline = require('readline');
const https = require('http');

function postData(d) {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/set',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': d.length
    }
  };

  const rq = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
    });

  }).on("error", (err) => {
    console.log("Error: ", err.message);
  });

  rq.write(d);
  rq.end();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getAnswer(prompt) {
  const answer = await new Promise((resolve, reject) => {
    rl.question(`${prompt}\n`, (answer) => {
      resolve(answer)
    });
  })
  return answer
}

const doWork = async () => {
  while (true) {
    const answer1 = await getAnswer('Enter User barcode');
    if (answer1 === 'q') { break }
    const answer2 = await getAnswer('Enter Item barcode');
    if (answer2 === 'q') { break }

    console.log(`User #${answer1} scanned item #${answer2}`);

    const obj = { 
      user: answer1,
      item: answer2
    }
    postData(JSON.stringify(obj));
  }
  rl.close();
}

doWork()