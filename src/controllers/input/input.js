var InputItem = (function() {
    
    return {
        clear: function() {
            document.getElementById("input").value = "";
        },
        add: function() {
            var input = document.getElementById("input").value;
            if(input != "") {
                MessageModel.add(input);
                InputItem.clear();
            }
        }
    }
})();