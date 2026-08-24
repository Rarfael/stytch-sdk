# Stytch SDK utility: make_context

from stytch_sdk.core.context import StytchContext


def make_context_util(ctxmap, basectx):
    return StytchContext(ctxmap, basectx)
