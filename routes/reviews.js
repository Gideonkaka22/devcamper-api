const express = require('express');
const { getReviews,
     getReview,
      addReview,
     updateReview,
     deleteReview
 } = require('../controllers/reviews');

const Review = require('../models/Review')

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middleware/auth');


router
.route('/').get(getReviews
    ).post(protect, authorize('user', 'admins'), addReview );



router
.route('/:id')
.get(getReview)
.put(protect, authorize('user', 'admin'), updateReview)
.delete(protect, authorize('user', 'admin'), deleteReview);



module.exports = router;
