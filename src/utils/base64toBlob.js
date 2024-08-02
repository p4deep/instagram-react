export function base64toFile(base64, filename, mimeType) {
  // Remove the data URL prefix
  const base64Data = base64.replace(/^data:\w+\/\w+;base64,/, "");

  // Convert the base64 string to binary data
  const binaryData = atob(base64Data);

  // Create an ArrayBuffer from the binary data
  const arrayBuffer = new ArrayBuffer(binaryData.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  // Create a Blob object from the ArrayBuffer
  const blob = new Blob([arrayBuffer], { type: mimeType });

  // Create a File object from the Blob
  const file = new File([blob], filename, { type: mimeType });

  return file;
}
