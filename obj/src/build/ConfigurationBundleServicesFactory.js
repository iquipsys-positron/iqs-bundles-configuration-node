"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services_organizations_node_1 = require("pip-services-organizations-node");
const iqs_services_locations_node_1 = require("iqs-services-locations-node");
const iqs_services_objectgroups_node_1 = require("iqs-services-objectgroups-node");
const iqs_services_controlobjects_node_1 = require("iqs-services-controlobjects-node");
const iqs_services_devices_node_1 = require("iqs-services-devices-node");
const iqs_services_eventtemplates_node_1 = require("iqs-services-eventtemplates-node");
const iqs_services_resolutions_node_1 = require("iqs-services-resolutions-node");
const iqs_services_gateways_node_1 = require("iqs-services-gateways-node");
const iqs_services_zones_node_1 = require("iqs-services-zones-node");
const pip_services_beacons_node_1 = require("pip-services-beacons-node");
const iqs_services_eventrules_node_1 = require("iqs-services-eventrules-node");
const iqs_services_shifts_node_1 = require("iqs-services-shifts-node");
const iqs_services_emergencyplans_node_1 = require("iqs-services-emergencyplans-node");
const iqs_services_dataprofiles_node_1 = require("iqs-services-dataprofiles-node");
const iqs_services_deviceprofiles_node_1 = require("iqs-services-deviceprofiles-node");
const iqs_services_deviceconfigs_node_1 = require("iqs-services-deviceconfigs-node");
class ConfigurationBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_services_organizations_node_1.OrganizationsServiceFactory);
        this.add(new iqs_services_locations_node_1.LocationsServiceFactory);
        this.add(new iqs_services_objectgroups_node_1.ObjectGroupsServiceFactory);
        this.add(new iqs_services_controlobjects_node_1.ControlObjectsServiceFactory);
        this.add(new iqs_services_dataprofiles_node_1.DataProfilesServiceFactory);
        this.add(new iqs_services_deviceprofiles_node_1.DeviceProfilesServiceFactory);
        this.add(new iqs_services_deviceconfigs_node_1.DeviceConfigsServiceFactory);
        this.add(new iqs_services_devices_node_1.DevicesServiceFactory);
        this.add(new iqs_services_eventtemplates_node_1.EventTemplatesServiceFactory);
        this.add(new iqs_services_resolutions_node_1.ResolutionsServiceFactory);
        this.add(new iqs_services_gateways_node_1.GatewaysServiceFactory);
        this.add(new iqs_services_zones_node_1.ZonesServiceFactory);
        this.add(new pip_services_beacons_node_1.BeaconsServiceFactory);
        this.add(new iqs_services_eventrules_node_1.EventRulesServiceFactory);
        this.add(new iqs_services_shifts_node_1.ShiftsServiceFactory);
        this.add(new iqs_services_emergencyplans_node_1.EmergencyPlansServiceFactory);
    }
}
exports.ConfigurationBundleServicesFactory = ConfigurationBundleServicesFactory;
//# sourceMappingURL=ConfigurationBundleServicesFactory.js.map