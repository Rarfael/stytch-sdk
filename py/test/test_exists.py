# Stytch SDK exists test

import pytest
from stytch_sdk import StytchSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = StytchSDK.test(None, None)
        assert testsdk is not None
