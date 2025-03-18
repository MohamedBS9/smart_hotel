import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hoelresa_front/core/routes/app_router.gr.dart';
import 'package:hoelresa_front/features/auth/domain/entity/login_request.dart';
import 'package:hoelresa_front/features/auth/presentation/bloc/auth_bloc.dart';
import 'package:hoelresa_front/features/auth/presentation/widgets/login_page_widget.dart';

import '../../../../core/widgets/pop_up.dart';
import '../../../../injection_container.dart';

@RoutePage()
class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final formKey = GlobalKey<FormState>();
  late AuthBloc authBloc;
  bool isLoading = false;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    authBloc = sl<AuthBloc>();
  }

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  void login() async {
    if (isLoading) return;

    if (formKey.currentState?.validate() ?? false) {
      authBloc.add(LoginEvent(
          loginRequest: LoginRequest(
              email: emailController.text,
              motdepasse: passwordController.text)));
    }
    // context.router.replace(HomeRoute());
  }

  @override
  Widget build(BuildContext context) {
    return BlocProvider<AuthBloc>(
      create: (_) => authBloc,
      child: BlocConsumer<AuthBloc, AuthState>(
        listener: (context, state) {
          if (state is FailureLoginState) {
            hasErrorDialog(state.error.Description, context);
          } else if (state is SuccessLoginState) {
            context.router.replace(MainHome());
          }
        },
        builder: (context, state) {
          return LoginPageWidget(
            isLoading: state is LoadingLoginState,
            loginFunction: login,
            emailController: emailController,
            formKey: formKey,
            passwordController: passwordController,
          );
        },
      ),
    );
  }
}
