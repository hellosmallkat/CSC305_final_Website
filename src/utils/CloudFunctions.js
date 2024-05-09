
async function getUser(uid) {
  // Construct the URL with the provided uid
  const url = `https://getuser-ja2asz65ca-uc.a.run.app/?uid=${uid}`;

  try {
      // Perform the fetch request
      const response = await fetch(url, {cache: "no-store"});
      
      // Check if the fetch was successful
      if (!response.ok) {
          // Throw an error if the response has an HTTP status code of 400 or above
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Return the parsed data
      return data;
  } catch (error) {
      // Log the error or handle it as needed
      console.error('Error fetching user data:', error);

      // Optionally rethrow the error or handle it differently
      throw error;
  }
}


export { getUser };
