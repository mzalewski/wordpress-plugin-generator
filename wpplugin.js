module.exports = function(data, template) {
  template = template.replace('{{{name}}}', data.name);
  template = template.replace('{{{version}}}', data.version);
  template = template.replace('{{{description}}}', data.description);
  return template;
};
