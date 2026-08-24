-- Stytch SDK exists test

local sdk = require("stytch_sdk")

describe("StytchSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
