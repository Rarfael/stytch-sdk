# Typed models for the Stytch SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class User(TypedDict, total=False):
    created_at: str
    emails: list
    name: dict
    status: str
    trusted_metadata: dict
    user_id: str


class UserLoadMatch(TypedDict):
    id: str


class UserListMatch(TypedDict, total=False):
    created_at: str
    emails: list
    name: dict
    status: str
    trusted_metadata: dict
    user_id: str


class UserCreateData(TypedDict, total=False):
    created_at: str
    emails: list
    name: dict
    status: str
    trusted_metadata: dict
    user_id: str


class UserUpdateDataRequired(TypedDict):
    id: str


class UserUpdateData(UserUpdateDataRequired, total=False):
    created_at: str
    emails: list
    name: dict
    status: str
    trusted_metadata: dict
    user_id: str


class UserRemoveMatch(TypedDict):
    id: str
