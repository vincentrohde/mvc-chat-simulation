var MessageView = (function() {
    
    return {
        get: function() {
            //clears ul list first
            $('li').remove();
            MessageItem.appendToList();
        },
        add: function() {
            InputItem.add();
            MessageView.get();
        }
    }
})();