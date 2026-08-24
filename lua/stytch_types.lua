-- Typed models for the Stytch SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class User
---@field created_at? string
---@field emails? table
---@field name? table
---@field status? string
---@field trusted_metadata? table
---@field user_id? string

---@class UserLoadMatch
---@field id string

---@class UserListMatch
---@field created_at? string
---@field emails? table
---@field name? table
---@field status? string
---@field trusted_metadata? table
---@field user_id? string

---@class UserCreateData
---@field created_at? string
---@field emails? table
---@field name? table
---@field status? string
---@field trusted_metadata? table
---@field user_id? string

---@class UserUpdateData
---@field id string
---@field created_at? string
---@field emails? table
---@field name? table
---@field status? string
---@field trusted_metadata? table
---@field user_id? string

---@class UserRemoveMatch
---@field id string

local M = {}

return M
