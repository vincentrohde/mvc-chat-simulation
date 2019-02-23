var MessageModel = (function() {
    var messages = ['Hey Leute', 'Hallo ihr', 'Wie gehts? :)', 'Hier ist ' +
    ' Sven!'];
    
    return {
        get: function() {
            return messages;
        },
        add: function(item) {
            return messages.push(item);
        }
    }
})();