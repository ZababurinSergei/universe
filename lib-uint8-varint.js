var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// node_modules/uint8arrays/dist/src/alloc.js
function allocUnsafe(size = 0) {
  return new Uint8Array(size);
}
__name(allocUnsafe, "allocUnsafe");

// node_modules/uint8-varint/dist/src/index.js
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var MSB = 128;
var REST = 127;
function encodingLength(value) {
  if (value < N1) {
    return 1;
  }
  if (value < N2) {
    return 2;
  }
  if (value < N3) {
    return 3;
  }
  if (value < N4) {
    return 4;
  }
  if (value < N5) {
    return 5;
  }
  if (value < N6) {
    return 6;
  }
  if (value < N7) {
    return 7;
  }
  if (Number.MAX_SAFE_INTEGER != null && value > Number.MAX_SAFE_INTEGER) {
    throw new RangeError("Could not encode varint");
  }
  return 8;
}
__name(encodingLength, "encodingLength");
function encodeUint8Array(value, buf, offset = 0) {
  switch (encodingLength(value)) {
    case 8: {
      buf[offset++] = value & 255 | MSB;
      value /= 128;
    }
    case 7: {
      buf[offset++] = value & 255 | MSB;
      value /= 128;
    }
    case 6: {
      buf[offset++] = value & 255 | MSB;
      value /= 128;
    }
    case 5: {
      buf[offset++] = value & 255 | MSB;
      value /= 128;
    }
    case 4: {
      buf[offset++] = value & 255 | MSB;
      value >>>= 7;
    }
    case 3: {
      buf[offset++] = value & 255 | MSB;
      value >>>= 7;
    }
    case 2: {
      buf[offset++] = value & 255 | MSB;
      value >>>= 7;
    }
    case 1: {
      buf[offset++] = value & 255;
      value >>>= 7;
      break;
    }
    default:
      throw new Error("unreachable");
  }
  return buf;
}
__name(encodeUint8Array, "encodeUint8Array");
function encodeUint8ArrayList(value, buf, offset = 0) {
  switch (encodingLength(value)) {
    case 8: {
      buf.set(offset++, value & 255 | MSB);
      value /= 128;
    }
    case 7: {
      buf.set(offset++, value & 255 | MSB);
      value /= 128;
    }
    case 6: {
      buf.set(offset++, value & 255 | MSB);
      value /= 128;
    }
    case 5: {
      buf.set(offset++, value & 255 | MSB);
      value /= 128;
    }
    case 4: {
      buf.set(offset++, value & 255 | MSB);
      value >>>= 7;
    }
    case 3: {
      buf.set(offset++, value & 255 | MSB);
      value >>>= 7;
    }
    case 2: {
      buf.set(offset++, value & 255 | MSB);
      value >>>= 7;
    }
    case 1: {
      buf.set(offset++, value & 255);
      value >>>= 7;
      break;
    }
    default:
      throw new Error("unreachable");
  }
  return buf;
}
__name(encodeUint8ArrayList, "encodeUint8ArrayList");
function decodeUint8Array(buf, offset) {
  let b = buf[offset];
  let res = 0;
  res += b & REST;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 1];
  res += (b & REST) << 7;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 2];
  res += (b & REST) << 14;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 3];
  res += (b & REST) << 21;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 4];
  res += (b & REST) * N4;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 5];
  res += (b & REST) * N5;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 6];
  res += (b & REST) * N6;
  if (b < MSB) {
    return res;
  }
  b = buf[offset + 7];
  res += (b & REST) * N7;
  if (b < MSB) {
    return res;
  }
  throw new RangeError("Could not decode varint");
}
__name(decodeUint8Array, "decodeUint8Array");
function decodeUint8ArrayList(buf, offset) {
  let b = buf.get(offset);
  let res = 0;
  res += b & REST;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 1);
  res += (b & REST) << 7;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 2);
  res += (b & REST) << 14;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 3);
  res += (b & REST) << 21;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 4);
  res += (b & REST) * N4;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 5);
  res += (b & REST) * N5;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 6);
  res += (b & REST) * N6;
  if (b < MSB) {
    return res;
  }
  b = buf.get(offset + 7);
  res += (b & REST) * N7;
  if (b < MSB) {
    return res;
  }
  throw new RangeError("Could not decode varint");
}
__name(decodeUint8ArrayList, "decodeUint8ArrayList");
function encode(value, buf, offset = 0) {
  if (buf == null) {
    buf = allocUnsafe(encodingLength(value));
  }
  if (buf instanceof Uint8Array) {
    return encodeUint8Array(value, buf, offset);
  } else {
    return encodeUint8ArrayList(value, buf, offset);
  }
}
__name(encode, "encode");
function decode(buf, offset = 0) {
  if (buf instanceof Uint8Array) {
    return decodeUint8Array(buf, offset);
  } else {
    return decodeUint8ArrayList(buf, offset);
  }
}
__name(decode, "decode");
export {
  decode,
  decodeUint8Array,
  decodeUint8ArrayList,
  encode,
  encodeUint8Array,
  encodeUint8ArrayList,
  encodingLength
};
