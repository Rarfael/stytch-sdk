import { StytchEntityBase } from '../StytchEntityBase';
import type { StytchSDK } from '../StytchSDK';
import type { Control } from '../types';
import type { User, UserLoadMatch, UserListMatch, UserCreateData, UserUpdateData, UserRemoveMatch } from '../StytchTypes';
declare class UserEntity extends StytchEntityBase<User> {
    constructor(client: StytchSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    load(this: any, reqmatch?: UserLoadMatch, ctrl?: Control): Promise<UserEntity>;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<UserEntity[]>;
    create(this: any, reqdata?: UserCreateData, ctrl?: Control): Promise<UserEntity>;
    update(this: any, reqdata?: UserUpdateData, ctrl?: Control): Promise<UserEntity>;
    remove(this: any, reqmatch?: UserRemoveMatch, ctrl?: Control): Promise<UserEntity>;
}
export { UserEntity };
