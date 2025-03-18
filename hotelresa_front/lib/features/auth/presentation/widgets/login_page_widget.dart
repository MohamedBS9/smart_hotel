import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/extensions/localization.dart';
import 'package:hoelresa_front/core/util/validator.dart';

import '../../../../core/routes/app_router.gr.dart';
import '../../../../core/theme/app_pallete.dart';
import '../../../../core/widgets/buttons/auth_gradient_button.dart';
import '../../../../core/widgets/clickable_text.dart';
import '../../../../core/widgets/input_field.dart';

class LoginPageWidget extends StatelessWidget {
  final GlobalKey<FormState> formKey;
  final TextEditingController passwordController;
  final TextEditingController emailController;
  final void Function() loginFunction;
  final bool isLoading;

  const LoginPageWidget({
    super.key,
    required this.formKey,
    required this.emailController,
    required this.passwordController,
    required this.loginFunction, required this.isLoading ,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(15.0),
        child: Form(
          key: formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'sign In',
                style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 30),
              InputField(
                hintText: 'Email',
                controller: emailController,
                validator: (value) {
                  return validateEmail(context, value);
                },
              ),
              const SizedBox(height: 10),
              InputField(
                validator: (value) {
                  return validatePassword(context, value);
                },
                hintText: 'Password',
                controller: passwordController,
                isPassWord: true,
              ),
              const SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  ClickableText(
                    text: context.loc.forgetPassword,
                    onTapFunction: () => context.router.push(EmailRoute()),
                  )
                ],
              ),
              const SizedBox(height: 10),
              AuthGradientButton(
                isLoading: isLoading,
                buttonText: context.loc.logOn,
                onPressedFunction: () => loginFunction(),
              ),
              const SizedBox(height: 20),
              GestureDetector(
                onTap: () {
                  context.router.push(SignUpRoute());
                },
                child: RichText(
                  text: TextSpan(
                    text: 'Don\'t have an account ? ',
                    style: Theme.of(context).textTheme.titleMedium,
                    children: [
                      TextSpan(
                        text: context.loc.logOn,
                        style: Theme.of(
                          context,
                        ).textTheme.titleMedium?.copyWith(
                              color: AppPallete.gradient2,
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
