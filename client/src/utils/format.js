const formatCurrency = (num, locale='en-latn', currency='USD') => {
  return num.toLocaleString(locale, {
    'style': 'currency',
    'currency': currency
  });
}

export {
  formatCurrency,
}