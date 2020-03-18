export interface Tariff {
    id: number;
    name: string;
    price: number;
    durationInMinutes: string;
    isActive: boolean;
    machineId: number;
}