(function (window) {
  "use strict";
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var USER_FORM_SELECTOR = '[user-data="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var truck = new Truck("ncc-1701", new DataStore());
  window.truck = truck;

  try {
    var userFormHandler = new FormHandler(USER_FORM_SELECTOR);
    userFormHandler.addSubmitHandler(function (data) {
      // console.log(data);
      var title = $("input:radio[name=title]:checked").val();
      var name = $("input:text[name=username]").val();
      $("#modal").modal();
      $("#thanks").html(`Thank you for your payment ${title} ${name}`);
    });
  } catch (error) {}

  try {
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
      truck.createOrder.call(truck, data);
      checkList.addRow.call(checkList, data);
    });
  } catch (error) {}
})(window);
