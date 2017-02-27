interface IFrequency {
    _id: string;
    label: string;
    amountAndUnit: {
        amount: number,
        unit: string
    }
}

const frequencies: IFrequency[] = [
    {
        _id: 'INSTANTLY',
        label: 'All at once',
        amountAndUnit: {
            amount: 0,
            unit: 'days',
        },
    },
    {
        _id: 'WEEKLY',
        label: 'Weekly',
        amountAndUnit: {
            amount: 1,
            unit: 'week',
        },
    },
    {
        _id: 'MONTHLY',
        label: 'Monthly',
        amountAndUnit: {
            amount: 1,
            unit: 'month',
        },
    },
];

export { frequencies, IFrequency };
