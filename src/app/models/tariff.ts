export interface Tariff {
    id: number;
    name: string;
    price: number;
    durationInMinutes: number;
    isActive: boolean;
    machineId: number;
}