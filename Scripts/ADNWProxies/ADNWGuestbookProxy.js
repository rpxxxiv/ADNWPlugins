


$(function($){


function GetGuestbookEntries(options,callback) {
    if ($.browser.msie && window.XDomainRequest) {
        var xdr = new XDomainRequest();
        xdr.open("get", options.url);
        xdr.onload = function () {
            var JSON = $.parseJSON(xdr.responseText);
            if (JSON == null || typeof (JSON) == 'undefined') {
                JSON = $.parseJSON(data.firstChild.textContent);
            }
            callback(JSON.d);
        }
        xdr.send();

    }
    else {
        $.getJSON(
            options.url,
            function (msg) {
                callback(msg.d);
            }).error(function (jqXHR, textStatus, errorThrown) {
                alert('Error:' + textStatus + '  Message:' + errorThrown);
            });
    }
}

})(jQuery)