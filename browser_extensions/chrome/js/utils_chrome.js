/*
 Only for options.js / popup.js
 */

var utils_chrome = (function() {

  var BG_PAGE = chrome.extension.getBackgroundPage();
  var SYNC_STORAGE = BG_PAGE.SYNC_STORAGE;
  var CACHED_SETTINGS = BG_PAGE.CACHED_SETTINGS;

  const isNavigatorDefined = typeof navigator !== 'undefined';
  const userAgent = isNavigatorDefined ? (navigator.userAgentData && Array.isArray(navigator.userAgentData.brands)) ?
    navigator.userAgentData.brands.map((brand) => `${brand.brand.toLowerCase()} ${brand.version}`).join(' ') : navigator.userAgent.toLowerCase()
    : 'some useragent';
  const isChromium = (userAgent.includes('chrome') || userAgent.includes('chromium'));
  const isSafari = userAgent.includes('safari') && !isChromium;

  return {
    BG_PAGE: BG_PAGE,
    SYNC_STORAGE: SYNC_STORAGE,
    CACHED_SETTINGS: CACHED_SETTINGS,
    get_i18n: function(message_name) {
      return chrome.i18n.getMessage(message_name);
    },
    print_sync_storage: function() {
      SYNC_STORAGE.get(null, function(items) {
        console.log('SYNC_STORAGE: %O', items);
      });
    },
    isSafari: isSafari
  };

}());
