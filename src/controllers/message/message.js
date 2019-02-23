var MessageItem = (function() {
    var array = MessageModel.get();
    var template = $('#message-template').text();
    
    return {
        appendToList: function() {
            for (i = 0; i < array.length; i++) {
                $('ul').append(template);
                $('li:last-child .text').html(array[i]);
            }
        },
    }
})();