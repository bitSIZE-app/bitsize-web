export const formatCompactNumber = (num: number): {
    amount: string;
    suffix: string;
} => {
    const formattedParts = Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
    }).formatToParts(num);
    return {
        amount: formattedParts.filter(item => item.type !== 'compact').map(item => item.value).join(''),
        suffix: formattedParts.find(item => item.type === 'compact')?.value || ''
    };
}