export default function serialize(form) {
  // Setup our serialized data
  const serialized = [];

  // Loop through each field in the form
  for (let i = 0; i < form.elements.length; i += 1) {
    const field = form.elements[i];

    // Don't serialize fields without a name, submits, buttons,
    // file and reset inputs, and disabled fields
    if (
      field.name &&
      !field.disabled &&
      ['file', 'button', 'submit', 'reset'].indexOf(field.type) === -1
    ) {
      // If a multi-select, get all selections
      if (field.type === 'select-multiple') {
        for (let n = 0; n < field.options.length; n += 1) {
          if (field.options[n].selected) {
            serialized.push(
              `${encodeURIComponent(field.name)}=${encodeURIComponent(
                field.options[n].value
              )}`
            );
          }
        }
      } else if (
        (field.type !== 'checkbox' && field.type !== 'radio') ||
        field.checked
      ) {
        // Convert field data to a query string
        serialized.push(
          `${encodeURIComponent(field.name)}=${encodeURIComponent(field.value)}`
        );
      }
    }
  }

  return serialized.join('&');
}
