export class AuthError extends Error {
  constructor(message: string, public code: string, public status: number) {
    super(message);
    this.name = "AuthError";
  }
}

export const AUTH_ERROR_CODES = {
  INVALID_CREDENTIALS: "AUTH001",
  ACCOUNT_LOCKED: "AUTH002",
  INVALID_INPUT: "AUTH003",
  SERVER_ERROR: "AUTH004",
  NETWORK_ERROR: "AUTH005",
} as const;
