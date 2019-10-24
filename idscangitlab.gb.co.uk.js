// @include "jquery-3.4.1.min.js"
window.onload = function(){
    // check the squash and delete check boxes as soon as you enter the page
    document.getElementById("merge_request_force_remove_source_branch").checked = true;
    document.getElementById("merge_request_squash").checked = true;

    // do not allow to submit a MR unless at least one label has been selected
    var commit_btn = jQuery('[name="commit"]')
    commit_btn[0].onmouseenter = function() {
        if(commit_btn[0].value == "Save changes" || commit_btn[0].value == "Submit merge request") {
            var lst = jQuery('[name="merge_request[label_ids][]"]');
            if(lst.length < 2) {
                window.alert("Please choose atlease one label for your MR");
            }
        }
    }
};