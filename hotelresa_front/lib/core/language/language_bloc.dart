import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'language_event.dart';
import 'language_provider.dart';
import 'language_state.dart';


class LanguageBloc extends Bloc<LanguageEvent, LanguageState> {
  static const String _languageKey = 'fr';

  LanguageBloc() : super(const EnglishLanguageState()) {
    _loadPersistedLanguage();

    on<ChangeToEnglish>((event, emit) async {
      emit(const EnglishLanguageState());
      await _persistLanguage('en');
      await LanguageProvider.setLanguage('en');
    });

    on<ChangeToFrench>((event, emit) async {
      emit(const FrenchLanguageState());
      await _persistLanguage('fr');
      await LanguageProvider.setLanguage('fr');
    });

    on<ChangeToDutch>((event, emit) async {
      emit(const DutchLanguageState());
      await _persistLanguage('nl');
      await LanguageProvider.setLanguage('nl');
    });
  }

  Future<void> _persistLanguage(String languageCode) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_languageKey, languageCode);
  }

  Future<void> _loadPersistedLanguage() async {
    final prefs = await SharedPreferences.getInstance();
    final languageCode = prefs.getString(_languageKey) ?? 'fr';

    if (languageCode == 'fr') {
      emit(const FrenchLanguageState());
    } else if (languageCode == 'nl') {
      emit(const DutchLanguageState());
    } else {
      emit(const EnglishLanguageState());
    }
  }
}
