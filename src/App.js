import './App.css';
import EthernityCloudRunner from "@ethernity-cloud/runner";
import {ECEvent, ECRunner, ECStatus} from "@ethernity-cloud/runner/enums";

// example of a Python script
const pythonCode = `
def sum(a, b):
    return a + b        
a=1
b=10        
___etny_result___(str(sum(a, b)))`;

// example of a Node.js script
// const jsCode = `function add(a, b) {\n  return a + b;\n}\n ___etny_result___(add(1, 10).toString());`;

function App() {
    const executeTask = async () => {
        const runner = new EthernityCloudRunner();
        // this is a server provided by Ethernity CLOUD, please bear in mind that you can use your own Decentralized Storage server
        const ipfsAddress = 'https://ipfs.ethernity.cloud:5001';
        runner.initializeStorage(ipfsAddress);

        const onTaskProgress = (e) => {
            if (e.detail.status === ECStatus.ERROR) {
                console.error(e.detail.message);
            } else {
                console.log(e.detail.message);
            }
        };

        const onTaskCompleted = (e) => {
            console.log(`Task Result: ${e.detail.message.result}`);
        }

        runner.addEventListener(ECEvent.TASK_PROGRESS, onTaskProgress);
        runner.addEventListener(ECEvent.TASK_COMPLETED, onTaskCompleted);


        // there are two types of runners: for Python(ECRunner.PYNITHY_RUNNER_TESTNET) and Node.js(ECRunner.NODENITHY_RUNNER_TESTNET)
        // based on this you should use appropriate runner type, for this example we are using PYNITHY_RUNNER_TESTNET since we are executing a python script
        await runner.run(ECRunner.PYNITHY_RUNNER_TESTNET, pythonCode, '0x73842b5e67a321516cBA1d384E8B2cD70404148b');
        // in case you want to use Node.js
        //await runner.run(ECRunner.NODENITHY_RUNNER_TESTNET, jsCode, '0x73842b5e67a321516cBA1d384E8B2cD70404148b');
    };

    return (
        <div className="container">
            <button className="centeredButton" onClick={executeTask}>Execute Task</button>
        </div>
    );
}

export default App;
