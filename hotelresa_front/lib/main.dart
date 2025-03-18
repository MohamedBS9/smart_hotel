import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hoelresa_front/core/language/language_bloc.dart';
import 'package:hoelresa_front/core/theme/theme.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

import 'core/config/app_config.dart';
import 'core/language/language_state.dart';
import 'core/routes/app_router.dart';
import 'injection_container.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  AppConfig.create();

  await init();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final _appRouter = AppRouter();

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => LanguageBloc(),
      child: BlocBuilder<LanguageBloc, LanguageState>(
        builder: (context, state) {
          return MaterialApp.router(
            debugShowCheckedModeBanner: false,
            localizationsDelegates: AppLocalizations.localizationsDelegates,
            title: 'Smart Hotel',
            theme: AppTheme.darkThemeMode,
            routerConfig: _appRouter.config(),
          );
        },
      ),
    );
  }
}
