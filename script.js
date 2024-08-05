function chunkString(str, chunkLength) {
  // Check for null or empty string input
  if (!str) {
    return [];
  }

  // Initialize an array to store the chunks
  const chunks = [];

  // Iterate through the string, slicing it into chunks
  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
  }

  return chunks;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
