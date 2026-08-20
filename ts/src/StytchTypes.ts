// Typed models for the Stytch SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface User {
  created_at?: string
  emails?: any[]
  name?: Record<string, any>
  status?: string
  trusted_metadata?: Record<string, any>
  user_id?: string
}

export interface UserLoadMatch {
  id: string
}

export interface UserListMatch {
  created_at?: string
  emails?: any[]
  name?: Record<string, any>
  status?: string
  trusted_metadata?: Record<string, any>
  user_id?: string
}

export interface UserCreateData {
  created_at?: string
  emails?: any[]
  name?: Record<string, any>
  status?: string
  trusted_metadata?: Record<string, any>
  user_id?: string
}

export interface UserUpdateData {
  id: string
  created_at?: string
  emails?: any[]
  name?: Record<string, any>
  status?: string
  trusted_metadata?: Record<string, any>
  user_id?: string
}

export interface UserRemoveMatch {
  id: string
}

