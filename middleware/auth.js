export default function (context) {
  if (!context.store.state.user.isAuthorized) {
    if (context.route.path === '/cart') context.redirect('/login');
    if (context.route.path === '/checkout') context.redirect('/login');
  }
}
