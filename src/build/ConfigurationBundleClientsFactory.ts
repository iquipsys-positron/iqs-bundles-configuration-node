import { DefaultContainerFactory } from 'pip-services3-container-node';

import { OrganizationsClientFactory } from 'pip-clients-organizations-node';
import { ControlObjectsClientFactory } from 'iqs-clients-controlobjects-node';
import { BeaconsClientFactory } from 'pip-clients-beacons-node';
import { ZonesClientFactory } from 'iqs-clients-zones-node';
import { DevicesClientFactory } from 'iqs-clients-devices-node';
import { GatewaysClientFactory } from 'iqs-clients-gateways-node';
import { EventRulesClientFactory } from 'iqs-clients-eventrules-node';
import { LocationsClientFactory } from 'iqs-clients-locations-node';
import { ObjectGroupsClientFactory } from 'iqs-clients-objectgroups-node';
import { EventTemplatesClientFactory } from 'iqs-clients-eventtemplates-node';
import { ResolutionsClientFactory } from 'iqs-clients-resolutions-node';
import { ShiftsClientFactory } from 'iqs-clients-shifts-node';
import { EmergencyPlansClientFactory } from 'iqs-clients-emergencyplans-node';
import { DataProfilesClientFactory } from 'iqs-clients-dataprofiles-node';
import { DeviceProfilesClientFactory } from 'iqs-clients-deviceprofiles-node';
import { DeviceConfigsClientFactory } from 'iqs-clients-deviceconfigs-node';

export class ConfigurationBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new OrganizationsClientFactory);
        this.add(new LocationsClientFactory);
        this.add(new ObjectGroupsClientFactory);
        this.add(new ControlObjectsClientFactory);
        this.add(new DeviceProfilesClientFactory);
        this.add(new DeviceConfigsClientFactory);
        this.add(new DataProfilesClientFactory);
        this.add(new DevicesClientFactory);
        this.add(new EventTemplatesClientFactory);
        this.add(new ResolutionsClientFactory);
        this.add(new GatewaysClientFactory);
        this.add(new ZonesClientFactory);
        this.add(new BeaconsClientFactory);
        this.add(new EventRulesClientFactory);
        this.add(new ShiftsClientFactory);
        this.add(new EmergencyPlansClientFactory);

    }

}
