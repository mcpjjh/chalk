module.exports = {
  water : function () {},
  bass : 500,
  sharks : 100,
  algae : 200,
  fish : function () {
  if (this.wood > 0) {
    this.wood = this.wood -1;
    return 1;
  } else {
    return 0;
  }
  },
}