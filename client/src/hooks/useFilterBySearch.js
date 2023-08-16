export const useFilterBySearch = (arrayToFilter, search) => {
    console.log(arrayToFilter);
    console.log(search);
    arrayToFilter.filter((itemToFilter) => {
        return itemToFilter.data.includes(search)
    })
}