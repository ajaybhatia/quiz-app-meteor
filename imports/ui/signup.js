import { Template } from 'meteor/templating';

import './signup.html';

Template.signup.events({
    'click #login-form-link'(event) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    },
    'click #register-form-link'(event) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    },
    'click #login-form'(event) {
        event.preventDefault();
    },
    'click #register-form'(event) {
        event.preventDefault();
    }
});