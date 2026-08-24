package voxgigstytchsdk

import (
	"github.com/voxgig-sdk/stytch-sdk/go/core"
	"github.com/voxgig-sdk/stytch-sdk/go/entity"
	"github.com/voxgig-sdk/stytch-sdk/go/feature"
	_ "github.com/voxgig-sdk/stytch-sdk/go/utility"
)

// Type aliases preserve external API.
type StytchSDK = core.StytchSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type StytchEntity = core.StytchEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type StytchError = core.StytchError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewUserEntityFunc = func(client *core.StytchSDK, entopts map[string]any) core.StytchEntity {
		return entity.NewUserEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewStytchSDK = core.NewStytchSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewStytchSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *StytchSDK  { return NewStytchSDK(nil) }
func Test() *StytchSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
