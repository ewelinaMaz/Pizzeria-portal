# Dashboard

- `/`
- statystyki dzisiejszych zamówień (zdalne i lokalne)
- listę rezerwacji i eventów zaplanowanych na dzisiaj

#Logowanie

- `/login`
- pola na login i hasło
- guzik do zalogowania (link do dashboardu)

# Widok dostęności stolików

- `/tables`
- wybór daty i godziny
- tabelę z listą rezerwacji oraz wydarzeń
  - każda kolumna = 1 stolików
  - każdy wiersz = 30 minut
  - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
  - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów

- `/tables/booking/:id`
- zawiera wszystkie informacje dotyczące rezerwacji
- umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
- analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id`
- analogicznie do powyższej, dla eventów
- `/tables/events/new`
- analogicznie do powyższej, dla eventów, bez początkowych informacji
#Widok kelnera

- `/waiter`
- tabela
  - wierszach stoliki
  - w kolumnach różne rodzaje informacji(status, czas aktywności)
  - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
- numer stolika (edytowalny)
- menu produktów
- zamówienie (zamówione produkty z opcjami i ceną)
- kwotę zamówienia
- `/waiter/order/:id`
- jak powyższe


#Widok kuchni

- `/kitchen`
- wyświetla listę zamówień z kolejnością ich złożenia
- lista musi zawierać:
  - numer stolika
  - pełne informaje dotyczące zamówionych wydarzeń
- na liście musi być możliwość zmiany statusu zamówienia
