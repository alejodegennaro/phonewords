// API endpoints
export const findWords = async (numbers, useDictionary) => {
    const response = await fetch(`http://localhost:3030/api?search=${numbers}&useDictionary=${useDictionary}`);
    const { result } = await response.json();
    return result;
}
  
export default findWords;