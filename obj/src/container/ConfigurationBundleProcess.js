"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const ConfigurationBundleServicesFactory_1 = require("../build/ConfigurationBundleServicesFactory");
const ConfigurationBundleClientsFactory_1 = require("../build/ConfigurationBundleClientsFactory");
class ConfigurationBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("iqs-bundles-configuration", "IQuipsys configuration bundle");
        this._factories.add(new ConfigurationBundleServicesFactory_1.ConfigurationBundleServicesFactory);
        this._factories.add(new ConfigurationBundleClientsFactory_1.ConfigurationBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.ConfigurationBundleProcess = ConfigurationBundleProcess;
//# sourceMappingURL=ConfigurationBundleProcess.js.map