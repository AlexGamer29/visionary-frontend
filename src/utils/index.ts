// Utils function
function getImageName (url: string): string {
  // Split the URL by '/'
  const parts = url.split('/')
  // Get the last part which contains the filename
  const filenameWithParams = parts[parts.length - 1]
  // Split the filename by '?' to get parameters
  const filenameAndParams = filenameWithParams.split('?')
  // Get filename and parameters separately
  const filename = filenameAndParams[0]
  const params = filenameAndParams[1]
  // Split parameters by '&' to find "fm" parameter
  const paramPairs = params.split('&')
  let extension = 'jpg' // Default extension if "fm" parameter not found
  // Loop through parameters to find "fm" parameter
  for (const pair of paramPairs) {
    const [key, value] = pair.split('=')
    if (key === 'fm') {
      extension = value
      break
    }
  }
  // Return the filename with extension
  return `${filename}.${extension}`
}

export { getImageName }
