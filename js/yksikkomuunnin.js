window.onload = function() {
    var data = { a: 1};

    var vue = new Vue({
        el: "#yksikkomuunnin",
        data: {
            type: ""
        },
        methods: {
            setType: function(type) {
                this.type = type;
                console.log(type);
            }
        }
    });
}