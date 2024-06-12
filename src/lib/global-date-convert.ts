import { format } from 'date-fns'; // Assuming you're using date-fns for date formatting

export const globalDateConvert = (date: string | Date, inputFormat: string, outputFormat: string): string => {
    const d = typeof date === 'string' ? parseDate(date, inputFormat) : date;
    return format(d, outputFormat);
}

const parseDate = (dateString: string, format: string): Date => {
    const parts = dateString.split(/\W+/);
    const fmt: { [key: string]: string } = {};
    const dateObj = new Date();
    dateObj.setHours(0, 0, 0, 0);
    format.replace(/\w+/g, part => {
        fmt[part] = parts.shift() || '';
        return part;
    });
    return new Date(
        dateObj.getFullYear(),
        fmt['MM'] ? Number(fmt['MM']) - 1 : dateObj.getMonth(),
        fmt['DD'] ? Number(fmt['DD']) : dateObj.getDate(),
        fmt['HH'] ? Number(fmt['HH']) : dateObj.getHours(),
        fmt['mm'] ? Number(fmt['mm']) : dateObj.getMinutes(),
        fmt['ss'] ? Number(fmt['ss']) : dateObj.getSeconds()
    );
}


// {globalDateConvert(cell_data?.payment_date, "YYYY-MM-DD", "MM,dd, yyyy")}