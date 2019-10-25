// @include "jquery-3.4.1.min.js"
window.onload = function(){
    // check the squash and delete check boxes as soon as you enter the page
    document.getElementById("merge_request_force_remove_source_branch").checked = true;
    document.getElementById("merge_request_squash").checked = true;

    var commit_btn = jQuery('[name="commit"]')
    commit_btn[0].onmouseenter = function() {
        // do not allow to submit a MR unless at least one label has been selected
        if(commit_btn[0].value == "Save changes" || commit_btn[0].value == "Submit merge request") {
            var lst = jQuery('[name="merge_request[label_ids][]"]');
            if(lst.length < 2) {
                window.alert("You really gotta choose a label for your MR");
            }
        }

        // do not allow to submit a MR if the MR title is invalid
        var MR_title = jQuery('[id="merge_request_title"]')[0].value
        if(!MR_title.startsWith("IDES2: ") &&
           !MR_title.startsWith("Resolve IDES2: ") &&
           !MR_title.startsWith("IRES: ") &&
           !MR_title.startsWith("Resolve IRES: ") &&
           !MR_title.startsWith("WIP: ") &&
           !MR_title.startsWith("EXP: ") &&
           !MR_title.startsWith("Merge: ")) {

            var msg = 'The MR title is invalid. The MR title should start with one of the following patterns - \n' +
                      '* IDES2-1234: ' + '\n' +
                      '* IRES-1234: ' + '\n' +
                      '* Resolve IDES2-1234: ' + '\n' +
                      '* Resolve IRES-1234: ' + '\n' +
                      '* WIP: -> for work in progress' + '\n' +
                      '* Merge: -> generally for cherry pick merges' + '\n' +
                      '* Exp: -> for experimental purposes'
            window.alert(msg);
        }
    }
};