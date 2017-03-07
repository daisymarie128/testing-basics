var assert = require('assert');

describe('test button', function() {
	it('should replace text with working', function () {
  browser.url('http://bs-local.com:8080/');
		const myButton = $('.o-btn--test')
  browser.click('.o-btn--test');
  const text = browser.getText('.text-block');
  expect(text).toBe('working');
	})
});

describe('test modal opens', function() {
	it('clicking button should open modal', function () {
  browser.url('http://bs-local.com:8080/');
		const modal = $('.o-modal--test')
		const openBtn = browser.getText('.o-btn--open');
  browser.click('.o-btn--open');
		const visible = modal.getCssProperty('display');
  expect(visible.value).toBe('block');
	})
});

describe('test modal closes', function() {
	it('clicking button should close modal', function () {
  browser.url('http://bs-local.com:8080/');

		const modal = $('.o-modal--test')
		const openBtn = browser.getText('.o-btn--open');
		const closeBtn = browser.getText('.o-btn--close');
		// const visible = modal.getCssProperty('display');

		browser.click('.o-btn--open');
  browser.click('.o-btn--close');
		const visible = browser.isVisible('.o-modal--test');
  expect(visible).toBe(false);
	})
});
