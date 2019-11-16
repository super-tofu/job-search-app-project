
export const getCurrencySymbol = countryCode => {
    const currencies = {
        ge: 'euro ',
        gb: '£',
        us: '$',
        au: '$',
        ca: '$',
    };
    return currencies[countryCode];
};

export const extractFormData = form => Array
    .from(form.elements)
    .reduce((acc, { id, value }) => ({...acc, [id]: value}), {});
