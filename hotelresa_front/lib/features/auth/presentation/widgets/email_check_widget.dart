import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';

import '../../../../core/routes/app_router.gr.dart';
import '../../../../core/theme/app_pallete.dart';
import '../../../../core/widgets/buttons/auth_gradient_button.dart';
import '../../../../core/widgets/input_field.dart';

class EmailPageWidget extends StatelessWidget {
  final GlobalKey<FormState> formKey;

  final TextEditingController emailController;

  const EmailPageWidget({
    super.key,
    required this.formKey,
    required this.emailController,
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
                'Email Verification',
                style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 30),
              InputField(hintText: 'Email', controller: emailController,),

              const SizedBox(height: 20),
              AuthGradientButton(buttonText:'continuer',onPressedFunction: () {
                context.router.push(VerifyRoute());
              },),
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
                        text: 'Sign Up',
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
