import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';

import '../../core/routes/app_router.gr.dart';
import '../../core/util/pref_utils.dart';
import '../../injection_container.dart';

@RoutePage()
class ManagerHomePage extends StatefulWidget {
  const ManagerHomePage({super.key});

  @override
  State<ManagerHomePage> createState() => _ManagerHomePageState();
}

class _ManagerHomePageState extends State<ManagerHomePage> {
  PrefUtils prefUtils = sl<PrefUtils>();

  void logOut() {
    prefUtils.logout();
    context.router.replace(LoginRoute());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Column(
            children: [
              IconButton(
                  onPressed: () => logOut(),
                  icon: Icon(
                    Icons.exit_to_app_outlined,
                    color: Colors.white,
                  )),
              Text("manager home page"),
            ],
          ),
        ),
      ),
    );
  }
}
