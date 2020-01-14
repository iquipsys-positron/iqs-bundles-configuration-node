
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { OrganizationsServiceFactory } from 'pip-services-organizations-node';
import { LocationsServiceFactory } from 'iqs-services-locations-node';
import { ObjectGroupsServiceFactory } from 'iqs-services-objectgroups-node';
import { ControlObjectsServiceFactory } from 'iqs-services-controlobjects-node';
import { DevicesServiceFactory } from 'iqs-services-devices-node';
import { EventTemplatesServiceFactory } from 'iqs-services-eventtemplates-node';
import { ResolutionsServiceFactory } from 'iqs-services-resolutions-node';
import { GatewaysServiceFactory } from 'iqs-services-gateways-node';
import { ZonesServiceFactory } from 'iqs-services-zones-node';
import { BeaconsServiceFactory } from 'pip-services-beacons-node';
import { EventRulesServiceFactory } from 'iqs-services-eventrules-node';
import { ShiftsServiceFactory } from 'iqs-services-shifts-node';
import { EmergencyPlansServiceFactory } from 'iqs-services-emergencyplans-node';
import { DataProfilesServiceFactory } from 'iqs-services-dataprofiles-node';
import { DeviceProfilesServiceFactory } from 'iqs-services-deviceprofiles-node';
import { DeviceConfigsServiceFactory } from 'iqs-services-deviceconfigs-node';

export class ConfigurationBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new OrganizationsServiceFactory);
        this.add(new LocationsServiceFactory);
        this.add(new ObjectGroupsServiceFactory);
        this.add(new ControlObjectsServiceFactory);
        this.add(new DataProfilesServiceFactory);
        this.add(new DeviceProfilesServiceFactory);
        this.add(new DeviceConfigsServiceFactory);
        this.add(new DevicesServiceFactory);
        this.add(new EventTemplatesServiceFactory);
        this.add(new ResolutionsServiceFactory);
        this.add(new GatewaysServiceFactory);
        this.add(new ZonesServiceFactory);
        this.add(new BeaconsServiceFactory);
        this.add(new EventRulesServiceFactory);
        this.add(new ShiftsServiceFactory);
        this.add(new EmergencyPlansServiceFactory);

    }

}
