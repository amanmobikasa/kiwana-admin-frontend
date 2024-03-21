// create a global delete function which takes an id and delete it from the array of objects
export const globalDeleteFunction = <T>(array: T[], id: number | string) => {
    return array.filter((item : any) => item?.id !== id);
}