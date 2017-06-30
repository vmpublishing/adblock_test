

gs = gs || {};

'use strict';

// create test element and fill it with "evil" content
gs.addblock_test_element = document.createElement('div');
gs.addblock_test_element.innerHTML = '&nbsp;';
gs.addblock_test_element.className = 'afs_ads';

// attach it
document.body.appendChild(gs.addblock_test_element);

// wait some time before the test,
// so the add blockers will have a chance to notice the div
setTimeout(function() {

  // test for the add blockers effects
  var text = '';
  if (gs.addblock_test_element.offsetHeight === 0)
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
  gs.addblock_test_element.remove();
  gs.addblock_test_element = undefined;

}, 400);

