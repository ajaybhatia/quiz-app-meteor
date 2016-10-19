import { Template } from 'meteor/templating';

import './body.html';

Template.main.helpers({
    title() {
        return "Quiz App";
    }
});