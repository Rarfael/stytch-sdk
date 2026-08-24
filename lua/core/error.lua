-- Stytch SDK error

local StytchError = {}
StytchError.__index = StytchError


function StytchError.new(code, msg, ctx)
  local self = setmetatable({}, StytchError)
  self.is_sdk_error = true
  self.sdk = "Stytch"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function StytchError:error()
  return self.msg
end


function StytchError:__tostring()
  return self.msg
end


return StytchError
