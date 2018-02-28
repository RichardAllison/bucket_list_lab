const BucketList = require('../models/bucket_list.js');
const BucketListItem = require('../models/bucket_list_item.js');
const assert = require('assert');

describe('Bucket List', function () {
  let bucketListItem;
  let bucketList;

  beforeEach(function () {
    bucketList = new BucketList({});
    bucketListItem = new BucketListItem({
      country: "France"
    });
  });

  it('should start empty', function () {
    assert.strictEqual(bucketList.list.length, 0);
  });

  it('should be able to add bucket list item', function () {
    bucketList.addItem(bucketListItem)
    assert.strictEqual(bucketList.list.length, 1);
    assert.deepStrictEqual(bucketList.list, [bucketListItem]);
  });

});
