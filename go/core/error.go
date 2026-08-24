package core

type StytchError struct {
	IsStytchError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewStytchError(code string, msg string, ctx *Context) *StytchError {
	return &StytchError{
		IsStytchError: true,
		Sdk:              "Stytch",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *StytchError) Error() string {
	return e.Msg
}
