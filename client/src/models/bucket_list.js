const BucketList = function () {
  this.list = [];
}

BucketList.prototype.addItem = function (item) {
  this.list.push(item);
};

module.exports = BucketList;
