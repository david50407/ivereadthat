MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if(this.dataset.ft == '{"tn":">"}') {
            $(this).html("對")
        }
        else if(this.dataset.ft == '{"tn":"?"}') {
            $(this).html("不對")
        }
    })
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
