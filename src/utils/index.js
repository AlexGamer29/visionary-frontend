// Utils function
function getImageName(url) {
  // Split the URL by '/'
  const urlSegments = url.split('/');
  // Get the last segment which contains the image name
  const imageNameWithExtension = urlSegments[urlSegments.length - 1];
  // Remove any query parameters from the image name
  const imageName = imageNameWithExtension.split('?')[0];
  // Extract the file extension
  const extensionIndex = imageName.lastIndexOf('.');
  const extension = imageName.substring(extensionIndex + 1);
  return imageName.substring(0, extensionIndex) + '.' + extension;
}

export { getImageName };
