process.env.NODE_ENV = 'test';
var Browser = require('zombie');
var mongoose = require('mongoose');

Browser.localhost('localhost', 3000);

describe('User visits the page and logs in', function() {

  var browser = new Browser();
  var app = require("../app.js");

  before(function(done) {
    browser.visit('/users/login', done);

  });

describe('logs in', function() {

  before(function(done) {
    browser.deleteCookies()
    browser
      .fill('email', 'zombie1@dead.com')
      .fill('password', '111')
      .pressButton('Log in', done);
  });

  it('should be successful', function() {
    browser.assert.success();
  });

  it('shows the registered listing', function() {
    browser.assert.text("body", /Welcome Zombie/);
  });

  it('should see welcome page', function() {
    browser.assert.text('title', 'Listings');
  });
});
});
