module.exports = {
  assert: function assert(arg) {
    arg.test.forEach((element) => {
      var res = arg.fn(element.condition);

      var str_result = "";
      res.toString() != element.result.toString()
        ? (str_result = "Failure")
        : (str_result = "Success");

      console.log(
        element.condition.toString() +
          ": " +
          str_result +
          ", got:" +
          res.toString() +
          ", expected:" +
          element.result.toString()
      );
    });
  },
};
