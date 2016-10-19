import { Template } from 'meteor/templating';

import './body.html';
import '../startups/routers';

Template.home.helpers({
    title() {
        return "Quiz App";
    }
});