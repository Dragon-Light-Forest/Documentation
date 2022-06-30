---
title: Wymagania dot. ruchu
---

Co znajduje się w tej sekcji?

    Określenie jaki ruch musi być obsłużony przez aplikację (po wdrożeniu i rok/kilka lat od wdrożenia).
    Performance (waga aplikacji i poszczególnych widoków).

Bardzo częstym błędem przy projektowaniu platformy/aplikacji jest nieprzygotowanie na duże wolumeny ruchu. 

Oczywiście, w pierwszych tygodniach, a często nawet miesiącach istnienia platformy/aplikacji, ruch nie będzie przebijał sufitu. Wystarczy jednak jedna wzmianka na popularnym blogu lub stronie i może się zdarzyć, że w ciągu nocy ruch na naszej stronie wzrośnie z kilku tysięcy unikalnych użytkowników do kilkuset… a nasza infrastruktura tego nie udźwignie i strona dosłownie “utonie”.

A co się dzieje kiedy statystyczny użytkownik internetu natrafia na stronę, która nie działa?

Nigdy na nią nie wraca.

Właśnie dlatego tak ważne jest określenie jaki ruch musi być obsłużony przez platformę/aplikację po wdrożeniu i rok od wdrożenia. Dobrą praktyką jest też zastanowienie się nad celami ilościowymi na następne 5 lat, zakładając systematyczny i stabilny przyrost fanów.

W tej sekcji określa się ponadto tzw. performance, czyli wydajność. Nie raz, nie dwa spotkaliśmy się z sytuacją, w której z powodu braku przemyślanych rozwiązań na początku procesu, konieczne było wstrzymanie prac developerskich nad startupem na rzecz poprawy wydajności wdrożonych już elementów. Efekt? Bardzo częsta i nagła śmierć owych startupów, ze względu na nieprzewidziane koszty.

Aby nie powtarzać tego błędu, zawsze zwracamy naszym Klientom uwagę na określenie chociażby wstępnych wymagań dotyczących performance: ustalenie minimalnej liczby punktów w bezpłatnym narzędziu Google Page Speed czy wartości granicznej czasu wyświetlenia dowolnej strony serwisu oraz wypisanie “dobrych praktyk”, takich jak optymalizacja obrazów, kompresja tekstów itd.