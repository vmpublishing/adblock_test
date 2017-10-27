

gs = gs || {};

'use strict';

// create test element and fill it with "evil" content

document.addEventListener('DOMContentLoaded', function() {

  var addblock_test_element = document.createElement('div');
  addblock_test_element.innerHTML = '&nbsp;';
  addblock_test_element.className = 'afs_ads';

  // attach it
  document.body.appendChild(addblock_test_element);

  // wait some time before the test,
  // so the add blockers will have a chance to notice the div
  setTimeout(function() {

    // test for the add blockers effects
    var text = '';
    if (addblock_test_element.offsetHeight === 0)
      text = 'gs_addblocker_active';
    else
      text = 'gs_addblocker_inactive';

    // generate some debug information
    if ('undefined' !== typeof(gs.debug))
      console.log(text);

    // throw the important events
    var event = new Event(text);
    document.dispatchEvent(event);

    // remove our test-div
    addblock_test_element.parentNode.removeChild(addblock_test_element);
    addblock_test_element = undefined;

  }, 400);
});
