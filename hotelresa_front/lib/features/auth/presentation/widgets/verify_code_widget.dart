import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/widgets/buttons/auth_gradient_button.dart';
import 'package:pinput/pinput.dart';

class VerificationScreen extends StatelessWidget {
  final void Function()? nextPageFnction;
  final TextEditingController pinController;
  const VerificationScreen({
    super.key,
    this.nextPageFnction,
    required this.pinController,
  });

  @override
  Widget build(BuildContext context) {
    final defaultPinTheme = PinTheme(
      width: 45,
      height: 45,
      textStyle: const TextStyle(fontSize: 15),
      decoration: BoxDecoration(
        color: const Color(0xFFE6E9EF),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(width: 0.7, color: Colors.transparent),
      ),
    );
    final focusedPinTheme = defaultPinTheme.copyDecorationWith(
      border: Border.all(color: Colors.blue),
      borderRadius: BorderRadius.circular(8),
    );
    final submittedPinTheme = defaultPinTheme.copyWith(
      decoration: defaultPinTheme.decoration!.copyWith(
        color: const Color.fromRGBO(234, 239, 243, 1),
      ),
    );
    return SafeArea(
      child: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 20),
              Text(
                'Entrer le Code ',
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 10),
              Text(
                "Nous avons envoyé un code de vérification à votre adresse e-mail. Veuillez le saisir pour continuer.",
                style: TextStyle(fontSize: 16, color: Colors.grey[600]),
              ),
              SizedBox(height: 30),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Pinput(
                    submittedPinTheme: submittedPinTheme,
                    defaultPinTheme: defaultPinTheme,
                    focusedPinTheme: focusedPinTheme,
                    keyboardType: TextInputType.number,
                    controller: pinController,
                    length: 6,
                  ),
                ],
              ),

              SizedBox(height: 40),
              AuthGradientButton(
                buttonText: 'Vérifiez votre Code',
                onPressedFunction: () {},
              ),
              SizedBox(height: 20),
              Text(
                "Vous n'avez pas reçu d'e-mail ? Veuillez vérifier vos spams ou demander un nouveau code dans 31 secondes.",
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, color: Colors.grey[600]),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
