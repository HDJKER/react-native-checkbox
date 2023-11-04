/**
 * MIT License
 * 
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANT KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
#pragma once

#include "RNOHCorePackage/ComponentBinders/ViewComponentJSIBinder.h"

namespace rnoh {

class CheckboxJSIBinder : public ViewComponentJSIBinder {
    facebook::jsi::Object createNativeProps(facebook::jsi::Runtime &rt) override {
        auto object = ViewComponentJSIBinder::createNativeProps(rt);
//        object.setProperty(rt, "disabled", "boolean");
//        object.setProperty(rt, "inverted", "boolean");
//        object.setProperty(rt, "vertical", "boolean");
//        object.setProperty(rt, "tapToSeek", "boolean");
//        object.setProperty(rt, "maximumTrackTintColor", "Color");
//        object.setProperty(rt, "minimumTrackTintColor", "Color");
//        object.setProperty(rt, "thumbImage", "object");
//        object.setProperty(rt, "maximumValue", "float");
//        object.setProperty(rt, "minimumValue", "float");
//        object.setProperty(rt, "step", "float");
//        object.setProperty(rt, "lowerLimit", "float");

        object.setProperty(rt, "tintColor", "Color");
        object.setProperty(rt, "onCheckColor", "Color");
        object.setProperty(rt, "onFillColor", "Color");
        object.setProperty(rt, "onTintColor", "Color");
        object.setProperty(rt, "value", "boolean");
        object.setProperty(rt, "disabled", "boolean");
        object.setProperty(rt, "animationDuration", "float");

        return object;
    }
    
    facebook::jsi::Object createDirectEventTypes(facebook::jsi::Runtime &rt) override {
        facebook::jsi::Object events(rt);
        events.setProperty(rt, "topChange", createDirectEvent(rt, "onChange"));
        events.setProperty(rt, "topValueChangeNative", createDirectEvent(rt, "onValueChangeNative"));
        return events;
    }

};
} // namespace rnoh