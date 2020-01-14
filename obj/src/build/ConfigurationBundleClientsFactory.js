"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_clients_organizations_node_1 = require("pip-clients-organizations-node");
const iqs_clients_controlobjects_node_1 = require("iqs-clients-controlobjects-node");
const pip_clients_beacons_node_1 = require("pip-clients-beacons-node");
const iqs_clients_zones_node_1 = require("iqs-clients-zones-node");
const iqs_clients_devices_node_1 = require("iqs-clients-devices-node");
const iqs_clients_gateways_node_1 = require("iqs-clients-gateways-node");
const iqs_clients_eventrules_node_1 = require("iqs-clients-eventrules-node");
const iqs_clients_locations_node_1 = require("iqs-clients-locations-node");
const iqs_clients_objectgroups_node_1 = require("iqs-clients-objectgroups-node");
const iqs_clients_eventtemplates_node_1 = require("iqs-clients-eventtemplates-node");
const iqs_clients_resolutions_node_1 = require("iqs-clients-resolutions-node");
const iqs_clients_shifts_node_1 = require("iqs-clients-shifts-node");
const iqs_clients_emergencyplans_node_1 = require("iqs-clients-emergencyplans-node");
const iqs_clients_dataprofiles_node_1 = require("iqs-clients-dataprofiles-node");
const iqs_clients_deviceprofiles_node_1 = require("iqs-clients-deviceprofiles-node");
const iqs_clients_deviceconfigs_node_1 = require("iqs-clients-deviceconfigs-node");
class ConfigurationBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_clients_organizations_node_1.OrganizationsClientFactory);
        this.add(new iqs_clients_locations_node_1.LocationsClientFactory);
        this.add(new iqs_clients_objectgroups_node_1.ObjectGroupsClientFactory);
        this.add(new iqs_clients_controlobjects_node_1.ControlObjectsClientFactory);
        this.add(new iqs_clients_deviceprofiles_node_1.DeviceProfilesClientFactory);
        this.add(new iqs_clients_deviceconfigs_node_1.DeviceConfigsClientFactory);
        this.add(new iqs_clients_dataprofiles_node_1.DataProfilesClientFactory);
        this.add(new iqs_clients_devices_node_1.DevicesClientFactory);
        this.add(new iqs_clients_eventtemplates_node_1.EventTemplatesClientFactory);
        this.add(new iqs_clients_resolutions_node_1.ResolutionsClientFactory);
        this.add(new iqs_clients_gateways_node_1.GatewaysClientFactory);
        this.add(new iqs_clients_zones_node_1.ZonesClientFactory);
        this.add(new pip_clients_beacons_node_1.BeaconsClientFactory);
        this.add(new iqs_clients_eventrules_node_1.EventRulesClientFactory);
        this.add(new iqs_clients_shifts_node_1.ShiftsClientFactory);
        this.add(new iqs_clients_emergencyplans_node_1.EmergencyPlansClientFactory);
    }
}
exports.ConfigurationBundleClientsFactory = ConfigurationBundleClientsFactory;
//# sourceMappingURL=ConfigurationBundleClientsFactory.js.map