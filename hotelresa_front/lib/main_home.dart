import 'package:auto_route/annotations.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/routes/app_router.gr.dart';

import 'core/util/pref_utils.dart';
import 'injection_container.dart';

@RoutePage()
class MainHome extends StatefulWidget {
  const MainHome({super.key});

  @override
  State<MainHome> createState() => _MainHomeState();
}

class _MainHomeState extends State<MainHome> {
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
              Text("home page"),
            ],
          ),
        ),
      ),
    );
  }
}
