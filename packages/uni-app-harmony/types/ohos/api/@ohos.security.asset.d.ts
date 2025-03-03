/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit Asset Store Kit
 */
/**
 * This module provides the capabilities for life cycle management of sensitive user data (Asset) such as passwords
 * and tokens, including adding, removing, updating, and querying.
 *
 * @namespace asset
 * @syscap SystemCapability.Security.Asset
 * @since 11
 */
declare namespace asset {
    /**
     * Add an Asset.
     *
     * @param { AssetMap } attributes - a map object containing attributes of the Asset to be added.
     * @returns { Promise<void> } the promise object returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid argument.
     * @throws { BusinessError } 24000001 - Service unavailable.
     * @throws { BusinessError } 24000003 - Data already exists.
     * @throws { BusinessError } 24000005 - Device status mismatch.
     * @throws { BusinessError } 24000006 - Out of memory.
     * @throws { BusinessError } 24000007 - Data corrupted.
     * @throws { BusinessError } 24000008 - Database operation failed.
     * @throws { BusinessError } 24000009 - Key management service is abnormal.
     * @throws { BusinessError } 24000010 - IPC communication is abnormal.
     * @throws { BusinessError } 24000011 - Bundle framework is abnormal.
     * @throws { BusinessError } 24000012 - Account manager is abnormal.
     * @throws { BusinessError } 24000013 - Access token manager is abnormal.
     * @throws { BusinessError } 24000014 - File operation failed.
     * @throws { BusinessError } 24000015 - Get system time failed.
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    function add(attributes: AssetMap): Promise<void>;
    /**
     * Remove one or more Assets that match a search query.
     *
     * @param { AssetMap } query - a map object containing attributes of the Asset to be removed.
     * @returns { Promise<void> } the promise object returned by the function.
     * @throws { BusinessError } 401 - Invalid argument.
     * @throws { BusinessError } 24000001 - Service unavailable.
     * @throws { BusinessError } 24000002 - Data not found.
     * @throws { BusinessError } 24000006 - Out of memory.
     * @throws { BusinessError } 24000007 - Data corrupted.
     * @throws { BusinessError } 24000008 - Database operation failed.
     * @throws { BusinessError } 24000010 - IPC communication is abnormal.
     * @throws { BusinessError } 24000011 - Bundle framework is abnormal.
     * @throws { BusinessError } 24000012 - Account manager is abnormal.
     * @throws { BusinessError } 24000013 - Access token manager is abnormal.
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    function remove(query: AssetMap): Promise<void>;
    /**
     * Update an Asset that matches a search query.
     *
     * @param { AssetMap } query - a map object containing attributes of the Asset to be updated.
     * @param { AssetMap } attributesToUpdate - a map object containing attributes with new values.
     * @returns { Promise<void> } the promise object returned by the function.
     * @throws { BusinessError } 401 - Invalid argument.
     * @throws { BusinessError } 24000001 - Service unavailable.
     * @throws { BusinessError } 24000002 - Data not found.
     * @throws { BusinessError } 24000005 - Device status mismatch.
     * @throws { BusinessError } 24000006 - Out of memory.
     * @throws { BusinessError } 24000007 - Data corrupted.
     * @throws { BusinessError } 24000008 - Database operation failed.
     * @throws { BusinessError } 24000009 - Key management service is abnormal.
     * @throws { BusinessError } 24000010 - IPC communication is abnormal.
     * @throws { BusinessError } 24000011 - Bundle framework is abnormal.
     * @throws { BusinessError } 24000012 - Account manager is abnormal.
     * @throws { BusinessError } 24000013 - Access token manager is abnormal.
     * @throws { BusinessError } 24000015 - Get system time failed.
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    function update(query: AssetMap, attributesToUpdate: AssetMap): Promise<void>;
    /**
     * Preprocessing (e.g. get challenge) for querying one or more Assets that require user authentication.
     *
     * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
     * @returns { Promise<Uint8Array> } the promise object returned by the function.
     * @throws { BusinessError } 401 - Invalid argument.
     * @throws { BusinessError } 24000001 - Service unavailable.
     * @throws { BusinessError } 24000002 - Data not found.
     * @throws { BusinessError } 24000005 - Device status mismatch.
     * @throws { BusinessError } 24000006 - Out of memory.
     * @throws { BusinessError } 24000007 - Data corrupted.
     * @throws { BusinessError } 24000008 - Database operation failed.
     * @throws { BusinessError } 24000009 - Key management service is abnormal.
     * @throws { BusinessError } 24000010 - IPC communication is abnormal.
     * @throws { BusinessError } 24000011 - Bundle framework is abnormal.
     * @throws { BusinessError } 24000012 - Account manager is abnormal.
     * @throws { BusinessError } 24000013 - Access token manager is abnormal.
     * @throws { BusinessError } 24000016 - Capacity exceeds the limit.
     * @throws { BusinessError } 24000017 - Capability not supported.
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    function preQuery(query: AssetMap): Promise<Uint8Array>;
    /**
     * Query one or more Assets that match a search query.
     *
     * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
     * @returns { Promise<Array<AssetMap>> } the promise object returned by the function.
     * @throws { BusinessError } 401 - Invalid argument.
     * @throws { BusinessError } 24000001 - Service unavailable.
     * @throws { BusinessError } 24000002 - Data not found.
     * @throws { BusinessError } 24000004 - Access denied.
     * @throws { BusinessError } 24000005 - Device status mismatch.
     * @throws { BusinessError } 24000006 - Out of memory.
     * @throws { BusinessError } 24000007 - Data corrupted.
     * @throws { BusinessError } 24000008 - Database operation failed.
     * @throws { BusinessError } 24000009 - Key management service is abnormal.
     * @throws { BusinessError } 24000010 - IPC communication is abnormal.
     * @throws { BusinessError } 24000011 - Bundle framework is abnormal.
     * @throws { BusinessError } 24000012 - Account manager is abnormal.
     * @throws { BusinessError } 24000013 - Access token manager is abnormal.
     * @throws { BusinessError } 24000017 - Capability not supported.
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    function query(query: AssetMap): Promise<Array<AssetMap>>;
    /**
     * Post-processing (e.g. release cached resource) for querying multiple Assets that require user authentication.
     *
     * @param { AssetMap } handle - a map object contains the handle returned by {@link preQuery}.
     * @returns { Promise<void> } the promise object returned by the function.
     * @throws { BusinessError } 401 - Invalid argument.
     * @throws { BusinessError } 24000001 - Service unavailable.
     * @throws { BusinessError } 24000006 - Out of memory.
     * @throws { BusinessError } 24000010 - IPC communication is abnormal.
     * @throws { BusinessError } 24000011 - Bundle framework is abnormal.
     * @throws { BusinessError } 24000012 - Account manager is abnormal.
     * @throws { BusinessError } 24000013 - Access token manager is abnormal.
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    function postQuery(handle: AssetMap): Promise<void>;
    /**
     * A Map type containing tag-value pairs that describe the attributes of an Asset.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    type AssetMap = Map<Tag, Value>;
    /**
     * A type that indicates the secret or attribute value of an Asset tag.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    type Value = boolean | number | Uint8Array;
    /**
     * An enum type indicates when the Asset is accessible.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    enum Accessibility {
        /**
         * The secret value in the Asset can only be accessed after the device is powered on.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DEVICE_POWERED_ON = 0,
        /**
         * The secret value in the Asset can only be accessed after the device is first unlocked.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DEVICE_FIRST_UNLOCKED = 1,
        /**
         * The secret value in the Asset can only be accessed while the device is unlocked.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DEVICE_UNLOCKED = 2
    }
    /**
     * An enum type indicates the user authentication type for Asset access control.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    enum AuthType {
        /**
         * The access to an Asset doesn't require user authentication.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        NONE = 0x00,
        /**
         * The access to an Asset requires user authentication using either PIN/pattern/password or biometric traits.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        ANY = 0xFF
    }
    /**
     * An enum type indicates the type of Asset synchronization.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    enum SyncType {
        /**
         * An Asset with this attribute value is never allowed to be transferred out.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        NEVER = 0,
        /**
         * An Asset with this attribute value can only be restored to the device from which it was transferred out.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        THIS_DEVICE = 1 << 0,
        /**
         * An Asset with this attribute value can only be transferred out to a trusted device (user authorized).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        TRUSTED_DEVICE = 1 << 1
    }
    /**
     * An enum type indicates the strategy for conflict resolution when handling duplicated Asset alias.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    enum ConflictResolution {
        /**
         * Directly overwrite an Asset with duplicated alias when a conflict is detected.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        OVERWRITE = 0,
        /**
         * Throw an error so that the caller can take measures when a conflict is detected.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        THROW_ERROR = 1
    }
    /**
     * An enum type indicates the return type of the queried Asset.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    enum ReturnType {
        /**
         * Specify that the return data should contain both secret value and attributes.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        ALL = 0,
        /**
         * Specify that the return data contains only attributes.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        ATTRIBUTES = 1
    }
    /**
     * An enum type containing the data type definitions for Asset attribute value.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    enum TagType {
        /**
         * The data type of Asset attribute value is bool.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        BOOL = 0x01 << 28,
        /**
         * The data type of Asset attribute value is uint32.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        NUMBER = 0x02 << 28,
        /**
         * The data type of Asset attribute value is byte array.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        BYTES = 0x03 << 28
    }
    /**
     * An enum type containing the Asset attribute tags.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    enum Tag {
        /**
         * A tag whose value is a byte array indicating the sensitive user data such as passwords and tokens.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        SECRET = TagType.BYTES | 0x01,
        /**
         * A tag whose value is a byte array identifying an Asset.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        ALIAS = TagType.BYTES | 0x02,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating when the Asset can be accessed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        ACCESSIBILITY = TagType.NUMBER | 0x03,
        /**
         * A tag whose value is a bool indicating whether a screen lock password is required for the device.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        REQUIRE_PASSWORD_SET = TagType.BOOL | 0x04,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating the user authentication type for Asset access control.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        AUTH_TYPE = TagType.NUMBER | 0x05,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating the validity period in seconds of user authentication.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        AUTH_VALIDITY_PERIOD = TagType.NUMBER | 0x06,
        /**
         * A tag whose value is a byte array indicating the authentication challenge for anti-replay protection.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        AUTH_CHALLENGE = TagType.BYTES | 0x07,
        /**
         * A tag whose value is a byte array indicating the authentication token after a user is verified.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        AUTH_TOKEN = TagType.BYTES | 0x08,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating the type of Asset synchronization.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        SYNC_TYPE = TagType.NUMBER | 0x10,
        /**
         * A tag whose value is a bool indicating whether Asset is stored persistently.
         * The permission needs to be verified only when this attribute is set in the {@link add} function.
         *
         * @permission ohos.permission.STORE_PERSISTENT_DATA
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        IS_PERSISTENT = TagType.BOOL | 0x11,
        /**
         * A tag whose value is a byte array indicating the first user-defined Asset data label (not allow to update).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_LABEL_CRITICAL_1 = TagType.BYTES | 0x20,
        /**
         * A tag whose value is a byte array indicating the second user-defined Asset data label (not allow to update).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_LABEL_CRITICAL_2 = TagType.BYTES | 0x21,
        /**
         * A tag whose value is a byte array indicating the third user-defined Asset data label (not allow to update).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_LABEL_CRITICAL_3 = TagType.BYTES | 0x22,
        /**
         * A tag whose value is a byte array indicating the fourth user-defined Asset data label (not allow to update).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_LABEL_CRITICAL_4 = TagType.BYTES | 0x23,
        /**
         * A tag whose value is a byte array indicating the first user-defined Asset data label (allow to update).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_LABEL_NORMAL_1 = TagType.BYTES | 0x30,
        /**
         * A tag whose value is a byte array indicating the second user-defined Asset data label (allow to update).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_LABEL_NORMAL_2 = TagType.BYTES | 0x31,
        /**
         * A tag whose value is a byte array indicating the third user-defined Asset data label (allow to update).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_LABEL_NORMAL_3 = TagType.BYTES | 0x32,
        /**
         * A tag whose value is a byte array indicating the fourth user-defined Asset data label (allow to update).
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_LABEL_NORMAL_4 = TagType.BYTES | 0x33,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating the return type of the queried Asset.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        RETURN_TYPE = TagType.NUMBER | 0x40,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating the maximum number of returned Assets in one query.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        RETURN_LIMIT = TagType.NUMBER | 0x41,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating the offset of return data in batch query.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        RETURN_OFFSET = TagType.NUMBER | 0x42,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating how the query results are sorted.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        RETURN_ORDERED_BY = TagType.NUMBER | 0x43,
        /**
         * A tag whose value is a 32-bit unsigned integer indicating the strategy for resolving Asset conflicts.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        CONFLICT_RESOLUTION = TagType.NUMBER | 0x44
    }
    /**
     *  An enum type containing the Asset error codes.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    enum ErrorCode {
        /**
         * The error code indicates that the caller doesn't have the permission.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        PERMISSION_DENIED = 201,
        /**
         * The error code indicates that the argument is invalid.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        INVALID_ARGUMENT = 401,
        /**
         * The error code indicates that the ASSET Service is unavailable.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        SERVICE_UNAVAILABLE = 24000001,
        /**
         * The error code indicates that the queried Asset can not be found.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        NOT_FOUND = 24000002,
        /**
         * The error code indicates that the Asset already exists.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DUPLICATED = 24000003,
        /**
         * The error code indicates that the access to Asset is denied.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        ACCESS_DENIED = 24000004,
        /**
         * The error code indicates that the screen lock status mismatches.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        STATUS_MISMATCH = 24000005,
        /**
         * The error code indicates insufficient memory.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        OUT_OF_MEMORY = 24000006,
        /**
         * The error code indicates that the Asset is corrupted.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATA_CORRUPTED = 24000007,
        /**
         * The error code indicates that the database operation is failed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        DATABASE_ERROR = 24000008,
        /**
         * The error code indicates that the cryptography operation is failed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        CRYPTO_ERROR = 24000009,
        /**
         * The error code indicates that the ipc communication is failed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        IPC_ERROR = 24000010,
        /**
         * The error code indicates that the operation of calling Bundle Manager Service is failed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        BMS_ERROR = 24000011,
        /**
         * The error code indicates that the operation of calling OS Account Service is failed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        ACCOUNT_ERROR = 24000012,
        /**
         * The error code indicates that the operation of calling Access Token Service is failed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        ACCESS_TOKEN_ERROR = 24000013,
        /**
         * The error code indicates that the operation of file is failed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        FILE_OPERATION_ERROR = 24000014,
        /**
         * The error code indicates that the operation of getting system time is failed.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        GET_SYSTEM_TIME_ERROR = 24000015,
        /**
         * The error code indicates that the cache exceeds the limit.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        LIMIT_EXCEEDED = 24000016,
        /**
         * The error code indicates that the capability is not supported.
         *
         * @syscap SystemCapability.Security.Asset
         * @since 11
         */
        UNSUPPORTED = 24000017
    }
}
export default asset;
