import './App.css';
import EthernityCloudRunner from "@ethernity-cloud/runner";
import {ECEvent, ECRunner, ECStatus, TESTNET_ADDRESS} from "@ethernity-cloud/runner/enums";

const code = `___etny_result___("Hello, World!")`;
function App() {
    const executeTask = async () => {
        const runner = new EthernityCloudRunner(TESTNET_ADDRESS);
        // this is a server provided by Ethernity CLOUD, please bear in mind that you can use your own Decentralized Storage server
        const ipfsAddress = 'https://ipfs.ethernity.cloud:5001';
        runner.initializeStorage(ipfsAddress);

        const onTaskCreated = (e) => {
            console.log('Task published.');
        };

        const onTaskOrderPlaced = () => {
            console.log('Task order placed and approved, started processing.');
        };

        const onTaskProgress = (e) => {
            if (e.detail.status === ECStatus.ERROR) {
                console.error(e.detail.message);
            } else {
                console.log(e.detail.message);
            }
        };

        const onTaskNotProcessed = (e) => {
            console.error('Task processing failed due to unavailability of nodes. The network is currently busy. Please consider increasing the task price.');
        };

        const onTaskCompleted = (e) => {
            console.log(`Task Result: ${e.detail.message.result}; Task code: ${e.detail.message.resultTaskCode}`);
        }

        runner.addEventListener(ECEvent.TASK_CREATED, onTaskCreated);
        runner.addEventListener(ECEvent.TASK_ORDER_PLACED, onTaskOrderPlaced);
        runner.addEventListener(ECEvent.TASK_PROGRESS, onTaskProgress);
        runner.addEventListener(ECEvent.TASK_NOT_PROCESSED, onTaskNotProcessed);
        runner.addEventListener(ECEvent.TASK_COMPLETED, onTaskCompleted);

        // defining resources for the task
        const resources = { taskPrice: 10, cpu: 1, memory: 1, storage: 40, bandwidth: 1, duration: 1, validators: 1 };
        // there are two types of runners: for Python(ECRunner.PYNITHY_RUNNER_TESTNET) and Node.js(ECRunner.NODENITHY_RUNNER_TESTNET)
        // based on this you should use appropriate runner type, for this example we are using PYNITHY_RUNNER_TESTNET since we are executing a python script
        await runner.run(ECRunner.PYNITHY_RUNNER_TESTNET, code, '', resources);
        // in case you want to use Node.js
        //await runner.run(ECRunner.NODENITHY_RUNNER_TESTNET, code, '', resources);
    };

    return (
        <div className="container">
            <button className="centeredButton" onClick={executeTask}>Execute Task</button>
        </div>
    );
}

export default App;
