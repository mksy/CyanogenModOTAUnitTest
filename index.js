/*
    The MIT License (MIT)

    Copyright (c) 2014 Julian Xhokaxhiu

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
var unirest = require("unirest");

var getCMList = function(){
    unirest
    .post("http://beta.download.cyanogenmod.org/api")
    .headers({
        "Cache-control" : "no-cache",
        "Content-type" : "application/json",
        "User-Agent" : "com.cyanogenmod.updater/2.2"
    })
    .send({
        "method" : "get_all_builds",
        "params" : {
            "device" : "i9300",
            "channels": [
                "stable",
                "snapshot",
                "RC",
                "nightly"
            ],
            "source_incremental" : "68fb067fc8"
        }
    })
    .end(function(response){
        console.log( response.body );
    });
}

// Probably not working?
var getDeltaUpdate = function(){
    unirest
    .post("http://beta.download.cyanogenmod.org/api/v1/build/get_delta")
    .headers({
        "Cache-control" : "no-cache",
        "Content-type" : "application/json",
        "User-Agent" : "com.cyanogenmod.updater/2.2"
    })
    .send({
        "source_incremental" : "68fb067fc8", // 31-gen-2014
        "target_incremental" : "0051d4688f" // 01-feb-2014
    })
    .end(function(response){
        console.log( response.body );
    });
}

getCMList();
//getDeltaUpdate();