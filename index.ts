export const isWEBM = (buf: Uint8Array) =>
  buf
    .subarray(0, 4)
    .reduce((acc, e) => acc += e.toString(16), "") === "1a45dfa3";
