import ajax from "ghost/utils/ajax";

var EditorRoute = Ember.Route.extend({
    classNames: "editor",

    model: function(params) {
        return ajax("/ghost/api/v0.1/posts/" + params.post_id);
    }
});

export default EditorRoute;