export type LoginPayload = {
  email?: string
  username?: string
  password: string
}

export type RegisterPayload = {
  username: string
  email: string
  password: string
}

export type AuthUser = {
  id: string | number
  email?: string
  username?: string
}

export type AuthResponse = {
  token?: string
  user?: AuthUser
} & Record<string, unknown>
