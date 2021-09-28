var mpn_wi = { userId: 12198, siteId: 101534, widgetId: 103375, widgetType: 0 };
if (void 0 === mpn_ref) var mpn_ref = [mpn_wi];
else mpn_ref.push(mpn_wi);
var mpn_sid = document.getElementById('monadplugscript');
if (!mpn_sid) {
  var mpn_dt = new Date(),
    mpn_ns = document.createElement('script');
  // eslint-disable-next-line no-unused-expressions
  (mpn_ns.id = 'monadplugscript'),
    (mpn_ns.type = 'text/javascript'),
    (mpn_ns.defer = !0),
    (mpn_ns.src =
      '//cdn.monadplug.com/format/native/js/hood.js?v=' +
      mpn_dt.getYear() +
      mpn_dt.getMonth() +
      mpn_dt.getUTCDate() +
      mpn_dt.getUTCHours());
  var pmn_os = document.getElementsByTagName('script')[0];
  pmn_os.parentNode.insertBefore(mpn_ns, pmn_os);
}
