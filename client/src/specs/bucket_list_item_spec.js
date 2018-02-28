const BucketListItem = require('../models/bucketListItem.js');
const assert = require('assert');

describe('Bucket List Item', function () {
  let bucketListItem;

  beforeEach(function () {
    bucketListItem = new BucketListItem({
      country: "France"
    });
  });

  it('should have country', function () {
    assert.equal(bucketListItem.country, "France");
  });

});
