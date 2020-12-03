import Vue from 'vue';

const capitalize = Vue.filter('capitalize', function(value: string) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

const uppercase = Vue.filter('uppercase', function(value: { toString: () => string; }) {
  if (!value) return '';
  value = value.toString().toUpperCase();
  return value;
});

export default {
  capitalize,
  uppercase
}
