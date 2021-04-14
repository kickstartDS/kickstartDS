import { addRoute } from '@rm-frontend/server';

addRoute('deals', ({ Response }) => [
  {
    method: 'post',
    path: '/success',
    handler() {
      return {
        message:
          'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.',
      };
    },
  },
  {
    method: 'post',
    path: '/error',
    handler() {
      return new Response(500, {}, 'Internal Server Error');
    },
  },
  {
    method: 'post',
    path: '/invalid',
    handler() {
      return new Response(
        403,
        {},
        {
          message:
            'Ihre Nachricht konnte noch nicht gesendet werden. Bitte füllen Sie alle markierten Pflichtfelder korrekt aus.',
          errors: [
            'Bitte tragen Sie in dem Feld "E-Mail-Adresse" eine korrekte E-Mail-Adresse ein.',
          ],
        }
      );
    },
  },
]);
