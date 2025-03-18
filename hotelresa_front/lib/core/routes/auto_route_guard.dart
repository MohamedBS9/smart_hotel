import 'package:auto_route/auto_route.dart';
import 'package:hoelresa_front/core/routes/app_router.gr.dart';

import '../util/pref_utils.dart';

class GetInitialRoute extends AutoRouteGuard {
  final PrefUtils _prefUtils;

  GetInitialRoute(this._prefUtils);

  @override
  Future<void> onNavigation(
      NavigationResolver resolver, StackRouter router) async {
    String? token = _prefUtils.getToken();

    if (token.isEmpty) {
      resolver.next(true);
    } else {
      router.push(MainHome());
    }
  }
}
