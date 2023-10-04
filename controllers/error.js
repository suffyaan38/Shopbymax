exports.get404 = (req, res, next) => {
<<<<<<< HEAD
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
=======
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
>>>>>>> 47abf83 (Your commit message here)
};
