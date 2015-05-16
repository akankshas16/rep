

(function ($) {
    var menus = [{name:"dish1", addon:"something1", description:"", cost:"100"},
        {name:"dish2", addon:"something2", description:"", cost:"100"},
        {name:"dish3", addon:"something1", description:"", cost:"100"},
        {name:"dish4", addon:"something3", description:"", cost:"100"},
        {name:"dish5", addon:"something3", description:"", cost:"100"}];

    var menuItem = Backbone.Model.extend({
        defaults:{
            
             name:"dish",
             addon:"something",
             description:"",
             cost:"100"
        }
    });

    var menuList = Backbone.Collection.extend({
        model:menuItem
    });

    var menuView = Backbone.View.extend({
        tagName:"div",
        className:"menuContainer",
        template:$("#menuTemplate").html(),

        render:function () {
            var tmpl = _.template(this.template); 

            this.$el.html(tmpl(this.model.toJSON())); 
            return this;
        }
    });

    var menuListView = Backbone.View.extend({
        el:$("#menus"),

        initialize:function(){
            this.collection = new menuList(menus);
            this.render();
        },

        render: function(){
            var that = this;
            _.each(this.collection.models, function(item){
                that.rendermenu(item);
            });
        },

        rendermenu:function(item){
            var menuView = new menuView({
                model: item
            });
            this.$el.append(menuView.render().el);
        }
    });

    var menuListView = new menuListView();

    /*
    var menu = new menu({
        name:"dish",
        add-on:"something",
        description:"",
        cost:"100"
    });

    menuView = new menuView({
        model: menu
    });

    $("#menus").html(menuView.render().el);
    */
})(jQuery);
