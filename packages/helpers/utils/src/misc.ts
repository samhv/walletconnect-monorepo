import * as jsonRpcUtils from "@json-rpc-tools/utils";
import * as encUtils from "enc-utils";

// -- Hex -------------------------------------------------- //

export function sanitizeHex(hex: string): string {
  return encUtils.sanitizeHex(hex);
}

export function addHexPrefix(hex: string): string {
  return encUtils.addHexPrefix(hex);
}

export function removeHexPrefix(hex: string): string {
  return encUtils.removeHexPrefix(hex);
}

export function removeHexLeadingZeros(hex: string): string {
  return encUtils.removeHexLeadingZeros(encUtils.addHexPrefix(hex));
}

// -- id -------------------------------------------------- //

export const payloadId = jsonRpcUtils.payloadId;

export function uuid(): string {
  const result: string = ((a?: any, b?: any) => {
    for (
      b = a = "";
      a++ < 36;
      b += (a * 51) & 52 ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16) : "-"
    ) {
      // empty
    }
    return b;
  })();
  return result;
}

// -- log -------------------------------------------------- //

export function logDeprecationWarning() {
  console.warn(
    "DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!",
  );
}
