
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { StytchSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('UserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when STYTCH_TEST_LIVE=TRUE.
  afterEach(liveDelay('STYTCH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = StytchSDK.test()
    const ent = testsdk.User()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.STYTCH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'user.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set STYTCH_TEST_USER_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const user_ref01_ent = client.User()
    let user_ref01_data = setup.data.new.user['user_ref01']

    user_ref01_data = (await user_ref01_ent.create(user_ref01_data)).data()
    assert(null != user_ref01_data)


    // LIST
    const user_ref01_match: any = {}

    const user_ref01_list = (await user_ref01_ent.list(user_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const user_ref01_data_up0: any = {}

    const user_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-user_ref01_' + setup.now }
    ;(user_ref01_data_up0 as any)[user_ref01_markdef_up0.name] = user_ref01_markdef_up0.value

    const user_ref01_resdata_up0 = (await user_ref01_ent.update(user_ref01_data_up0)).data()
    assert(null != user_ref01_resdata_up0)

    assert((user_ref01_resdata_up0 as any)[user_ref01_markdef_up0.name] === user_ref01_markdef_up0.value)




    // LIST
    const user_ref01_match_rt0: any = {}

    const user_ref01_list_rt0 = (await user_ref01_ent.list(user_ref01_match_rt0)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user/UserTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = StytchSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['STYTCH_TEST_USER_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'STYTCH_TEST_USER_ENTID': idmap,
    'STYTCH_TEST_LIVE': 'FALSE',
    'STYTCH_TEST_EXPLAIN': 'FALSE',
    'STYTCH_APIKEY': 'NONE',
  })

  idmap = env['STYTCH_TEST_USER_ENTID']

  const live = 'TRUE' === env.STYTCH_TEST_LIVE

  if (live) {
    client = new StytchSDK(merge([
      {
        apikey: env.STYTCH_APIKEY,
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.STYTCH_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
