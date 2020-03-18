import { Machine } from './machine';
import { Tariff } from './tariff';

export interface MachineGroup {
    id: number;
    machines: Machine[];
    tariff: Tariff[];
    iconUrl: string;
    typeName: string;
}