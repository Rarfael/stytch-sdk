
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { StytchSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await StytchSDK.test()
    equal(null !== testsdk, true)
  })

})
