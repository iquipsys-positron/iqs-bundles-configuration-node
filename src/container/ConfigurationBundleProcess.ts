import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { ConfigurationBundleServicesFactory } from '../build/ConfigurationBundleServicesFactory';
import { ConfigurationBundleClientsFactory } from '../build/ConfigurationBundleClientsFactory';

export class ConfigurationBundleProcess extends ProcessContainer {

    public constructor() {
        super("iqs-bundles-configuration", "IQuipsys configuration bundle");
        this._factories.add(new ConfigurationBundleServicesFactory);
        this._factories.add(new ConfigurationBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
