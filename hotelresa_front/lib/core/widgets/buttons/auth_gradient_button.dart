import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/theme/app_pallete.dart';

class AuthGradientButton extends StatelessWidget {
  final bool isLoading;
  final String buttonText;
  final VoidCallback onPressedFunction;

  const AuthGradientButton({
    super.key,
    required this.buttonText,
    this.isLoading = false,
    required this.onPressedFunction,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [AppPallete.gradient1, AppPallete.gradient2],
          begin: Alignment.bottomLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(7),
      ),
      child: ElevatedButton(
        onPressed: onPressedFunction,
        style: ElevatedButton.styleFrom(
          fixedSize: Size(400, 55),
          backgroundColor: AppPallete.transparentColor,
          shadowColor: AppPallete.transparentColor,
        ),
        child: isLoading
            ? CircularProgressIndicator()
            : Text(
                buttonText,
                style:
                    const TextStyle(fontSize: 17, fontWeight: FontWeight.w600),
              ),
      ),
    );
  }
}
