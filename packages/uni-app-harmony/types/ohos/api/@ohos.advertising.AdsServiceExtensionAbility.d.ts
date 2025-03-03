/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit AdsKit
 */
import type advertising from './@ohos.advertising';
/**
 * Defines the callback of loading ad.
 * @typedef RespCallback
 * @syscap SystemCapability.Advertising.Ads
 * @since 11
 */
export interface RespCallback {
    /**
     * Defines the callback data.
     * @param { Map<string, Array<advertising.Advertisement>> } respData
     * @syscap SystemCapability.Advertising.Ads
     * @since 11
     */
    (respData: Map<string, Array<advertising.Advertisement>>): void;
}
