// create a number prefix dollar function which takes a number and adds the dollar sign and returns a number with the dollar sign and thousands separator

export const numberPrefixDollar = (num: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });
    return formatter.format(num);
}


// example: numberPrefixDollar(1234567.89) // $1,234,567.90


