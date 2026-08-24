
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { StytchSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('UserEntity', async () => {

  test('instance', async () => {
    const testsdk = StytchSDK.test()
    const ent = testsdk.User()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
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
    const user_ref01_match = {}

    const user_ref01_list = (await user_ref01_ent.list(user_ref01_match)).map((e) => e.data())


    // UPDATE
    const user_ref01_data_up0 = {}

    const user_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-user_ref01_' + setup.now }
    user_ref01_data_up0 [user_ref01_markdef_up0.name] = user_ref01_markdef_up0.value

    const user_ref01_resdata_up0 = (await user_ref01_ent.update(user_ref01_data_up0)).data()
    assert(null != user_ref01_resdata_up0)

    assert(user_ref01_resdata_up0[user_ref01_markdef_up0.name] === user_ref01_markdef_up0.value)


    // LOAD
    const user_ref01_match_dt0 = {}
    const user_ref01_data_dt0 = (await user_ref01_ent.load(user_ref01_match_dt0)).data()
    assert(null != user_ref01_data_dt0)



    // LIST
    const user_ref01_match_rt0 = {}

    const user_ref01_list_rt0 = (await user_ref01_ent.list(user_ref01_match_rt0)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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

  const env = envOverride({
    'STYTCH_TEST_USER_ENTID': idmap,
    'STYTCH_TEST_LIVE': 'FALSE',
    'STYTCH_TEST_EXPLAIN': 'FALSE',
    'STYTCH_APIKEY': 'NONE',
  })

  idmap = env['STYTCH_TEST_USER_ENTID']

  if ('TRUE' === env.STYTCH_TEST_LIVE) {
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
    now: Date.now(),
  }

  return setup
}
  
