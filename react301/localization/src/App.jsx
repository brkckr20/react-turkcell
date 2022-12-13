import { useEffect } from 'react';
import { useState } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl';

const messages = {
  'tr-TR': {
    title: "Merhaba dünya",
    description: "{count} yeni mesajınız var"
  },
  'en-US': {
    title: "Hello World",
    description: "You have been {count} new messages"
  },

}

function App() {
  const defaultLocale = localStorage.getItem("lang") || navigator.language;
  const [lang, setLang] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  return (
    <div>
      <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id='title' />
        <br />
        <FormattedMessage id='description' values={{ count: 5 }} />
      </IntlProvider>
      <br /><br />
      <button onClick={() => setLang("tr-TR")}>TR</button>
      <button onClick={() => setLang("en-US")}>EN</button>
    </div>
  )
}

export default App
