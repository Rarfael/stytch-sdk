
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { StytchSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await StytchSDK.test()
    equal(null !== testsdk, true)
  })

})
