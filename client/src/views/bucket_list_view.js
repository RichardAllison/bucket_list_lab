const BucketListView = function(){
  this.bucketList = [];
};

BucketListView.prototype.addListItem = function(listItem) {
  this.bucketList.push(listItem);
  this.render(listItem);
};

BucketListView.prototype.render = function(listItem){
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.innerText = listItem.country;
    ul.appendChild(li);
};


module.exports = BucketListView;
