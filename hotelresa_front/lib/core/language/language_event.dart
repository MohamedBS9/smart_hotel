import 'package:equatable/equatable.dart';

abstract class LanguageEvent extends Equatable {
  const LanguageEvent();

  @override
  List<Object?> get props => [];
}

class ChangeToEnglish extends LanguageEvent {}

class ChangeToFrench extends LanguageEvent {}

class ChangeToDutch extends LanguageEvent {}
