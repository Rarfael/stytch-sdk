package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewUserEntityFunc func(client *StytchSDK, entopts map[string]any) StytchEntity

