
export interface MachineUsage {
    id: number;
    userId: number;
    date: Date;
    machineLabeledAs: string;
    iconUrl: string;
    totalAmountPaid: number;
    totalDurationInMinutes: number;
}
