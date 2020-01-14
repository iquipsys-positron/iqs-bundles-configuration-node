let ConfigurationBundleProcess = require('../obj/src/container/ConfigurationBundleProcess').ConfigurationBundleProcess;

try {
    new ConfigurationBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}