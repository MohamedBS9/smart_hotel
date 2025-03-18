import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/extensions/localization.dart';

Future<void> hasErrorDialog(String errorMessage, BuildContext context) async {
  await showDialog(
    context: context,
    barrierDismissible: false,
    builder: (context) => AlertDialog(
      title: Text(context.loc.error),
      content: Text(errorMessage),
      actions: [
        TextButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          style: ButtonStyle(
            backgroundColor: WidgetStateProperty.all<Color>(Colors.blue),
          ),
          child: const Text("OK"),
        ),
      ],
    ),
  );
}
