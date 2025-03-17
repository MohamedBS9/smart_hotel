import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';

abstract class LanguageState extends Equatable {
  final Locale locale;

  const LanguageState(this.locale);

  @override
  List<Object?> get props => [locale];
}

class EnglishLanguageState extends LanguageState {
   const EnglishLanguageState() : super(const Locale('en'));
}

class FrenchLanguageState extends LanguageState {
   const FrenchLanguageState() : super(const Locale('fr'));
}

class DutchLanguageState extends LanguageState {
   const DutchLanguageState() : super(const Locale('nl'));
}
